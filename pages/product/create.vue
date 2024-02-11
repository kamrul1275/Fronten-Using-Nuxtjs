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


          <!-- <div class="row mb-3">
            <label for="example-email-input" class="col-sm-2 col-form-label">Image</label>
            <div class="col-sm-10">
              <input 
                class="form-control"
                type="file"
                placeholder="price..."
                id="example-email-input"
              />
            </div>
          </div> -->
          <!-- end row -->

          <!-- end row -->
          <button class="btn btn-info" @click.prevent="submiteProduct()">Submite</button>

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
      Product: {

        title: "",
        price: "",



      },


      isLoading: false,
      isLoadingTitle: 'Loading...',
    };
  },



  methods: {

    submiteProduct() {

      //alert(this.Product.title);
      console.log(this.Product.title);

      this.isLoading = true;

      this.isLoadingTitle = "Saving....";


      axios.post('http://127.0.0.1:8000/api/products', this.Product)
        .then(res => {

          //alert(' Product Create Succesfully');
             // satrt sweet alert
            Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product create successfully!",
            showConfirmButton: false,
            timer: 1500
          });
        // end sweet alert
         // console.log("Product_Info:", res);
          this.Product.title = "";
          this.Product.price = "";




          this.isLoading = false;

          this.isLoadingTitle = "loading....";


        });


    }


  }
}


</script>


<style lang="scss" scoped></style>
