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
  
            <h4 class="card-title">Create Brand</h4>
  
  
  
            <div class="row mb-3">
              <label for="example-text-input" class="col-sm-2 col-form-label">Brand</label>
              <div class="col-sm-10">
                <input class="form-control" autocomplete="off" v-model="Brand.brand_name" type="text" placeholder="Category name"
                  id="example-text-input">
              
              </div>
            </div>
            <!-- end row -->
  
            <div class="row mb-3">
              <label for="" class="col-sm-2 col-form-label">Photo</label>
              <div class="col-sm-10">
                <input type="file" id="brand_image" @change="onFileChange" accept="image/*" required>
              </div>
            </div>
            <!-- end row -->
  
  
  

          
            <button class="btn btn-info" @click.prevent="saveBrand()">Submite</button>
  
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
      Brand: {

        brand_name: "",
        brand_image: null,
      
      },
      

      Swal: {},
      errors:{},

      isLoading: false,
      isLoadingTitle: 'Loading...',
    };
  },



  methods: {
    onFileChange(e) {
      this.brand_image = e.target.files[0];
    },


    saveBrand() {
      let formData = new FormData();
      formData.append('brand_name', this.Brand.brand_name);
      formData.append('brand_image', this.brand_image);

      axios.post('http://127.0.0.1:8000/api/brands', formData)
        .then(response => {

          
          
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Brand created successfully!",
            showConfirmButton: false,
            timer: 1500
          });



          console.log(response.data);
          // Handle success
        })
        .catch(error => {
          console.error(error);
          // Handle error
        });
    }
  }//end method


}
  
</script>
  
  <style lang="scss" scoped></style>