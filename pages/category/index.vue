<template>
    <br>
    <br>
    <br>
    <br>


    <div class="row">
        <div class="col-md-3">

        </div>


        <div class="col-md-7 mb-3">

            <!-- loader -->

           <div v-if="isLoading" class="spinner-border text-info" role="status">
                <span class="visually-hidden">Loading...</span>
            </div> 
            <!-- end loader -->


            <div  class="card ml-4">
                <div class="card-body ml-3">
                    <h4 class="card-title"> Table</h4>


                    <div class="table-responsive">
                        <table class="table mb-0">

                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Category Name</th>
                                    <th>Category Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(Category, index)  in  Categories" :key="index">
                                    <th scope="row"> {{ Category.id }}</th>
                                    <td> {{Category.category_name}}</td>
                                    
                                    <NuxtImg :src="`http://127.0.0.1:8000/${Category.category_image}`" style="height:70px; width:70px;" alt="brand images" />

                                    <td>


                                        <nuxt-link   to="" class="btn btn-success"> <i class='far fa-edit'></i> </nuxt-link>
                                        <!-- <a href="" class="btn btn-danger">Delete</a> -->

                                        <button @click.prevent="" class="btn btn-danger"><i class="fa fa-trash"></i></button>



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
            Categories: {

            },

        

           isLoading: false,
            isLoading: true,
            isLoadingTitle: 'Loading...',

          
        };

       
    },





    mounted() {

        this.getCategory();
     

        

    },

    methods: {


        // gete data
        getCategory() {

            this.isLoading = true;
            axios.get(`http://127.0.0.1:8000/api/categories`)
                .then(res => {

                    this.isLoading = false;
                    this.Categories = res.data.data;
                    console.log("Category list", this.Categories);



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








// async deleteUser(userId) {
//   const confirmed = await Swal.fire({
//     title: 'Are you sure?',
//     text: 'You are about to delete this user. This action cannot be undone.',
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonText: 'Yes, delete it!',
//     cancelButtonText: 'No, cancel!',
//     confirmButtonColor: '#d33',
//     cancelButtonColor: '#3085d6'
//   });

//   if (!confirmed.isConfirmed) {
//     return; // Exit if user cancels
//   }

//   const userIndex = this.Users.findIndex(user => user.id === userId);
//   if (userIndex !== -1) {
//     // Optimistically remove the user from the local data
//     this.Users.splice(userIndex, 1);

//     // Send the DELETE request
//     axios.delete(`http://127.0.0.1:8000/api/user/delete/${userId}`)
//       .then(res => {
//         // Handle successful deletion:
//         console.log('User deleted successfully:', res.data);

//         Swal.fire({
//           title: 'Success!',
//           text: 'User deleted successfully.',
//           icon: 'success'
//         });
//       })
//       .catch(error => {
//         // Handle errors:
//         console.error('Failed to delete user:', error);

//         // Revert the UI change (optional, depending on your preference)
//         if (userIndex !== -1) {
//           this.Users.splice(userIndex, 0, {
//             id: userId,
//             // Other user properties
//           });
//         }

//         Swal.fire({
//           title: 'Error!',
//           text: 'Failed to delete user.',
//           icon: 'error'
//         });
//       });
//   }
// }



    }//end deleted

}




</script>




<style lang="scss" scoped>

</style>