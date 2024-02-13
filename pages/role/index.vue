<template>
    <br>
    <br>


    <h1>User page</h1>


    <div class="row">
        <div class="col-md-3">

        </div>


        <div class="col-md-7 mb-3">

            <!-- loader -->

            <div v-if="isLoading" class="spinner-border text-info" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <!-- end loader -->


            <div v-else class="card ml-4">
                <div class="card-body ml-3">
                    <h4 class="card-title"> Table</h4>


                    <div class="table-responsive">
                        <table class="table mb-0">

                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Role Name</th>
                                    <th>Permission</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(role, index)  in  roles" :key="index">
                                    <th scope="row"> {{ role.id }}</th>
                                    <td> {{ role.name }}</td>
                                    <td> permissions name </td>

                                    <td>


                                        <nuxt-link   :to="`/role/${role.id}`" class="btn btn-success"> <i class='far fa-edit'></i> </nuxt-link>
                                        <!-- <a href="" class="btn btn-danger">Delete</a> -->

                                        <button @click.prevent="deleteRole(role.id)" class="btn btn-danger"><i class="fa fa-trash"></i></button>



                                    </td>
                                </tr>


                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
        </div>
        <div class="col-md-3">

        </div>

    </div>
    <!-- end row -->
</template>



<script>

import axios from "axios";
import Swal from 'sweetalert2'




definePageMeta({
    middleware: 'auth'
    // or middleware: 'auth'
});


export default {

    data() {
        return {
        
            roles:{},
            isLoading: true,
            isLoadingTitle: 'Loading...',
            role: "",
            RoleId:"",

        };
    },



    mounted() {

        this.getUsers();

    },

    methods: {

        // gete data
        getUsers() {

            this.isLoading = true;
            axios.get(`http://127.0.0.1:8000/api/roles`)
                .then(res => {


                    this.isLoading = false;

                    this.roles = res.data.data;
                    console.log("All Roles", this.roles);



                });

        },


        // delete User
    //     deleteRole(RoleId){

    //     if(confirm('are you sure')){

    //       axios.delete(`http://127.0.0.1:8000/api/roles/${RoleId}`)
    //       .then(res=>{
    //       });

    //     }

    //     this.isLoading=false;

    // }//end delete part
    async deleteRole(RoleId) {
    const confirmed = await Swal.fire({
        title: 'Are you sure?',
        text: 'You are about to delete this role. This action cannot be undone.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6'
    });

    if (!confirmed.isConfirmed) {
        return; // Exit if user cancels
    }

    const roleIndex = this.roles.findIndex(role => role.id === RoleId);
    if (roleIndex !== -1) {
        // Optimistically remove the role from the local data
        this.roles.splice(roleIndex, 1);

        // Send the DELETE request
        axios.delete(`http://127.0.0.1:8000/api/roles/${RoleId}`)
            .then(res => {
                // Handle successful deletion:
                console.log('Role deleted successfully:', res.data);
                Swal.fire({
                    title: 'Success!',
                    text: 'Role deleted successfully.',
                    icon: 'success'
                });
            })
            .catch(error => {
                // Handle errors:
                console.error('Failed to delete role:', error);

                // Revert the UI change (optional, depending on your preference)
                if (roleIndex !== -1) {
                    this.roles.splice(roleIndex, 0, {
                        id: RoleId,
                        // Other role properties
                    });
                }

                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to delete role.',
                    icon: 'error'
                });
            });
    }
}



    }

    }


</script>

<style lang="scss" scoped></style>