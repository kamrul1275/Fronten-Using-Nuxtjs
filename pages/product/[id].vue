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
          <h4 class="card-title">Edit Product</h4>

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
              <input v-model="Product.price" class="form-control" type="text" placeholder="price..."
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
          <button class="btn btn-info" @click.prevent="UpdateProduct()">Update</button>

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
      ProductId:"",


      isLoading: false,
      isLoadingTitle: 'Loading...',
    };
  },



  mounted() {

    this.ProductId = this.$route.params.id;

    //alert(this.ProductId);

    this.getProduct(this.ProductId);

  },

  methods: {

    UpdateProduct() {

     // alert('alert');
      console.log(this.Product.title);

      this.isLoading = true;

      this.isLoadingTitle = "Saving....";


      axios.put(`http://127.0.0.1:8000/api/products/${this.ProductId}`,this.Product) 
        .then(res => {

          alert(' Product update Succesfully');
          console.log("Product_Info:", res);
          this.Product.title = "";
          this.Product.price = "";




          this.isLoading = false;

          this.isLoadingTitle = "loading....";


        });


    },//end update product



    //get product

          getProduct(ProductId){

    // alert('oky');

    axios.get(`http://127.0.0.1:8000/api/products/edit/${ProductId}`)
      .then(res=>{


        // this.isLoading=false;

        this.Product = res.data.data;
         console.log("Product Edit:",this.Product);



      });
    },






  }
}


</script>
  
  
<style lang="scss" scoped></style>
  