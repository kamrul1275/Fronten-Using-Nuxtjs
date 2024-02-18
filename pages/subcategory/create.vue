<template>
    <br>
    <br>
    <br>
    <br>
    <br>
  
    <div class="row">
      <!-- loader -->
  
  
      <div class="col-md-3"> </div>
      <div class="col-md-7">
        <!-- loader -->
  
        <!-- <div v-if="isLoading" class="spinner-border text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
        </div> -->
        <!-- end loader -->
  
        <div  class="card">
  
          <div class="card-body">
  
            <h4 class="card-title">Create SubCategory</h4>
  
  
  
            <div class="row mb-3">
              <label for="example-text-input" class="col-sm-2 col-form-label">Sub Category Name</label>
              <br>
              <div class="col-sm-10">
                <input class="form-control" v-model="SubCategory.subcategory_name" autocomplete="off"  type="text" placeholder="SubCategory name"
                  id="example-text-input">
              
              </div>
            </div>
            <!-- end row -->
  
  
            <div class="row mb-3">
              <label for="" class="col-sm-2 col-form-label">Category Name</label>
              <select class="form-select" v-model="SubCategory.selectedCategoryId" aria-label="Default select example">
                <option :value="category.id" v-for="(category, index) in categories" :key="index">{{ category.category_name }}</option>

                                                   
                                                 
               </select>
            </div>
            <!-- end row -->
  
  

          
            <button class="btn btn-info" @click.prevent="submiteSubCategory()">Submite</button>
  
            <!-- end row -->
          </div>
        </div>
      </div> <!-- end col -->
  
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
          SubCategory: {
            subcategory_name:"",
           
            selectedCategoryId:"",
            },


       


            category_id:"",
            categories:{},

      isLoading: false,
            isLoading: true,
            isLoadingTitle: 'Loading...',
      
      
          
        };

       
    },





    mounted() {

        this.getCategory();
       
        

    },

    methods: {


        // gete Category
        getCategory() {

            this.isLoading = true;
            axios.get(`http://127.0.0.1:8000/api/categories`)
                .then(res => {


                    this.isLoading = false;

                    this.categories = res.data.data;
                    console.log(" getCategory", this.categories);



                });



                

        },

  



// store sub category





submiteSubCategory() {

//alert('hello');

this.isLoading = true;

this.isLoadingTitle = "Saving....";


axios.post('http://127.0.0.1:8000/api/subcategories', this.SubCategory)
  .then(res => {

    //alert('Permission Create Succesfully');


  // satrt sweet alert
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "SubCate create successfully!",
      showConfirmButton: false,
      timer: 1500
    });
  // end sweet alert

    console.log("SubCate_Info:", res);
    // this.SubCategory.subcategory_name = "";
    // this.SubCategory.category_id = "";




    this.isLoading = false;

    this.isLoadingTitle = "loading....";


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


<style lang="scss" scoped>

</style>