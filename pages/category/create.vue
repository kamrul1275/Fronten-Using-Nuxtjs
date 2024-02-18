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
  
        <div v-if="isLoading" class="spinner-border text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <!-- end loader -->
  
        <div v-else class="card">
  
          <div class="card-body">
  
            <h4 class="card-title">Create Category</h4>
  
  
  
            <div class="row mb-3">
              <label for="example-text-input" class="col-sm-2 col-form-label">Category</label>
              <div class="col-sm-10">
                <input class="form-control" autocomplete="off" v-model="Category.category_name" type="text" placeholder="Category name"
                  id="example-text-input">
              
              </div>
            </div>
            <!-- end row -->
  
  
            <div class="row mb-3">
              <label for="" class="col-sm-2 col-form-label">Photo</label>
              <div class="col-sm-10">
                <input type="file" class="form-control" @change="handleImageUpload" />
              </div>
            </div>
            <!-- end row -->
  
  

          
            <button class="btn btn-info" @click.prevent="submitHandle()">Submite</button>
  
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
        Category: {

         category_name: "",
          
        
        },
      
        Swal: {},
        errors:{},
  
        isLoading: false,
        isLoadingTitle: 'Loading...',
      };
    },
  

  
    methods: {
  
  


      submitHandle() {
      this.isLoading = true;
      this.isLoadingTitle = "Saving....";

      // Check if an image file is selected
      if (!this.imageFile) {
        // Handle the case where no image file is selected
        console.error("No image file selected");
        return; // Abort the submission process
      }

      // Create FormData object to handle file upload
      let formData = new FormData();
      formData.append("image", this.imageFile); // Assuming 'this.imageFile' is the selected file
      formData.append("category_name", this.Category.category_name); // Assuming 'title' is a required field
     

      // Make a POST request to upload the image and product details
      axios
        .post("http://127.0.0.1:8000/api/categories", formData)
        .then((res) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Category created successfully!",
            showConfirmButton: false,
            timer: 1500,
          });

      
          this.Category.category_name = "";
          this.isLoading = false;
          this.isLoadingTitle = "Loading....";
        })
        .catch((error) => {
          console.error("Error creating product:", error);
          // Handle error if product creation fails
        });
    },

    handleImageUpload(event) {
      // Get the selected file from the input field
      this.imageFile = event.target.files[0];
    },
  },



    }
    
  </script>
  
  <style lang="scss" scoped></style>