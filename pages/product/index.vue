<template>
  <br />
  <br />



  <div class="conatiner">

    <div class="row">
      <div class="col-md-2"></div>


      <div class="col-md-8">

        <!-- loader -->

        <!-- <div v-if="isLoading" class="spinner-border text-info" role="status">
                <span class="visually-hidden">Loading...</span>
            </div> -->
        <!-- end loader -->



        <br>
        <br>
        <nuxt-link to="/product/create" v-if="hasCreatePermission" class="btn btn-primary py-1">Add Product </nuxt-link>



        <div class="card ml-4">
          <!-- <div v-else  class="card ml-4"> -->
          <div class="card-body ml-3">
            <h4 class="card-title">Table</h4>

            <div class="table-responsive">
              <table class="table mb-0">
                <thead>




                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Code</th>
                    <th>Quanty</th>
                    <th>Tags</th>
                    <th>Color</th>
                    <th>Size</th>
                    <th>Sell_Price</th>
                    <th>Dis_price</th>
                    <th>short_descp</th>
                    <th>Image</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>


                  <tr v-for="(product, index) in  products.products" :key="index">

                  
                    <th scope="row">{{ product.id }}</th>
                    <td>{{ product.title }}</td>
                    <td>{{ product.price }}</td>
                    <td>
    
                      <img :src="`${product.product__image}`" alt="Product Image" style="width:30px; height:30px;">

              <!-- //<img :src="product.product__image" alt="Product Image" style="width:30px; height:30px;">  -->
              </td>


                    <td>
                      <nuxt-link :to="`product/${product.id}`" v-if="hasEditPremission == true" class="btn btn-success"><i class='far fa-edit'></i>
                      </nuxt-link>
                      <button   @click.prevent="deleteUser(product.id)"     v-if="hasDeletePremission == true" class="btn btn-danger"><i class="fa fa-trash"></i></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>


      <div class="col-md-2"></div>

    </div>
    <!-- end row -->

  </div>
</template>


<script>

import axios from "axios";

import { useAuthStore } from '@/stores/auth';



definePageMeta({
  middleware: 'auth'
  // or middleware: 'auth'
});


export default {

  data() {
    return {
      products: {
      },
      product_images:{},
    
  //product_images:"",
  
      isLoading: true,
      isLoadingTitle: 'Loading...',
  

      hasViewPremission: false,
      hasCreatePermission: false,
      hasEditPremission: false,
      hasDeletePremission: false,
    };



  },



  mounted() {


    useAuthStore().hasViewPremission().then(res => {
      this.hasViewPremission = res;
      console.log("view permission:", this.hasViewPremission); // Use the value here or in subsequent code
    });



    useAuthStore().hasCreatePremission().then(res => {
      this.hasCreatePermission = res;
      console.log("crete permission:", this.hasCreatePermission); // Use the value here or in subsequent code
    });



    useAuthStore().hasEditPremission().then(res => { // Use edit code
      this.hasEditPremission = res;
      console.log("edit permission:", this.hasEditPremission);
    });


    useAuthStore().hasDeletePremission().then(res => {
      this.hasDeletePremission = res;
      console.log(this.hasDeletePremission); // Use the value here or in subsequent code
    });






    // this.permissionGet();

    this.getProducts();


  },

  methods: {

    // gete data
    getProducts() {

      this.isLoading = true;
      axios.get(`http://127.0.0.1:8000/api/products`)
        .then(res => {


          this.isLoading = false;

          this.products = res.data.data;
          console.log("All_products:", this.products);



        });

    },


    // delete part


    deleteUser(){
      alert('working..');
    }

  }



}//end deleted



</script>


<style lang="scss" scoped></style>
