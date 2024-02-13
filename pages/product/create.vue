<template>
  <br />
  <br />
  <br />
  <br />

  <div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-7">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Create Product</h4>

          <div class="row mb-3">
            <label for="example-text-input" class="col-sm-2 col-form-label">Title</label>
            <div class="col-sm-10">
              <input v-model="Product.title" class="form-control" type="text" placeholder="wrttie product"
                id="example-text-input" />
            </div>
          </div>
          <!-- end row -->

          <div class="row mb-3">
            <label for="example-email-input" class="col-sm-2 col-form-label">Price</label>
            <div class="col-sm-10">
              <input v-model="Product.price" autocomplete="off" class="form-control" type="text" placeholder="price..."
                id="example-email-input" />
            </div>
          </div>
          <!-- end row -->


          <div class="row mb-3">
            <label for="example-email-input" class="col-sm-2 col-form-label">Image</label>
            <div class="col-sm-10">

              <input type="file" class="form-control" @change="handleImageUpload">
              
            </div>
          </div> 
          <!-- end row -->

          <!-- end row -->
          <button class="btn btn-info" @click.prevent="submitProduct()">Submite</button>

          <!-- end row -->
        </div>
      </div>
    </div>
    <!-- end col -->
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

      Product:{

        title: "",
        price: "",

      },
    
      isLoading: false,
      isLoadingTitle: 'Loading...',
    };
  },



  methods: {

    submitProduct() {
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
    formData.append('image', this.imageFile); // Assuming 'this.imageFile' is the selected file
    formData.append('title', this.Product.title); // Assuming 'title' is a required field
    formData.append('price', this.Product.price); // Assuming 'price' is a required field

    // Make a POST request to upload the image and product details
    axios.post('http://127.0.0.1:8000/api/products', formData)
        .then(res => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Product created successfully!",
                showConfirmButton: false,
                timer: 1500
            });

            this.Product.title = "";
            this.Product.price = "";
            this.isLoading = false;
            this.isLoadingTitle = "Loading....";
        })
        .catch(error => {
            console.error("Error creating product:", error);
            // Handle error if product creation fails
        });
},

handleImageUpload(event) {
    // Get the selected file from the input field
    this.imageFile = event.target.files[0];
},





  }
}


</script>


<style lang="scss" scoped></style>
