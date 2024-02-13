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
                                    <th> Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(User, index)  in  Users" :key="index">
                                    <th scope="row">{{ User.id }}</th>
                                    <td> {{ User.name }}</td>
                                    <td> {{ User.email }}</td>
                                    <td>{{ roles[User.role_id] }}</td>

                                    <td>


                                        <nuxt-link :to="`/user/${User.id}`" class="btn btn-success"> <i class='far fa-edit'></i> </nuxt-link>
                                        <!-- <a href="" class="btn btn-danger">Delete</a> -->

                                        <button @click.prevent="deleteUser(User.id)" class="btn btn-danger"><i class="fa fa-trash"></i></button>




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
            Users: {

            },
            isLoading: true,
            isLoadingTitle: 'Loading...',
            UserId: "",
            roles: {} // Object to store role names
          
        };
    },



    mounted() {

        this.getUsers();
        this.getRoles(); // Fetch roles along with users

        

    },

    methods: {

        // gete data
        getUsers() {

            this.isLoading = true;
            axios.get(`http://127.0.0.1:8000/api/user/info`)
                .then(res => {


                    this.isLoading = false;

                    this.Users = res.data.data;
                    console.log("All User", this.Users);



                });



                

        },

  
// get role name
        getRoles() {
            axios.get(`http://127.0.0.1:8000/api/roles`)
                .then(res => {
                    this.roles = res.data.data.reduce((acc, role) => {
                        acc[role.id] = role.name; // Map role names by their ids
                        return acc;
                    }, {});
                    console.log("All Roles", this.roles);
                });
        },


        // delete User


        // deleteUser(UserId) {


        //     if (confirm('are you sure')) {

        //         axios.delete(`http://127.0.0.1:8000/api/user/delete/${UserId}`)
        //             .then(res => {
        //             });

        //     }

        //     // this.isLoading=false;







        // }








async deleteUser(userId) {
  const confirmed = await Swal.fire({
    title: 'Are you sure?',
    text: 'You are about to delete this user. This action cannot be undone.',
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

  const userIndex = this.Users.findIndex(user => user.id === userId);
  if (userIndex !== -1) {
    // Optimistically remove the user from the local data
    this.Users.splice(userIndex, 1);

    // Send the DELETE request
    axios.delete(`http://127.0.0.1:8000/api/user/delete/${userId}`)
      .then(res => {
        // Handle successful deletion:
        console.log('User deleted successfully:', res.data);

        Swal.fire({
          title: 'Success!',
          text: 'User deleted successfully.',
          icon: 'success'
        });
      })
      .catch(error => {
        // Handle errors:
        console.error('Failed to delete user:', error);

        // Revert the UI change (optional, depending on your preference)
        if (userIndex !== -1) {
          this.Users.splice(userIndex, 0, {
            id: userId,
            // Other user properties
          });
        }

        Swal.fire({
          title: 'Error!',
          text: 'Failed to delete user.',
          icon: 'error'
        });
      });
  }
}



    }//end deleted

}




</script>

<style lang="scss" scoped></style>