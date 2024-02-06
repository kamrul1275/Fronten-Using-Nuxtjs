<template>
  <br />
  <br />

  <br />
  <br />


  <div class="row">
    <div class="col-md-3"></div>



    <!-- loader -->

    <!-- <div v-if="isLoading"  class="spinner-border text-info" role="status">
      <span class="visually-hidden">Loading...</span>
      </div>
      end loader -->


    <div class="col-md-7 mb-3">

      <nuxt-link to="/product/create" v-if="hasCreatePermission==true" class="btn btn-primary py-1">Add Product </nuxt-link>

      <br>
      <br>



      <div class="card ml-4">
        <div class="card-body ml-3">
          <h4 class="card-title">Table</h4>

          <div class="table-responsive">
            <table class="table mb-0">
              <thead>

              


                <tr>
                  <th>No</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>


                <tr v-for="(product, index) in  products" :key="index">
                  <th scope="row">{{ product.id }}</th>
                  <td>{{ product.title }}</td>
                  <td>{{ product.price }}</td>
                  <td>
                    <a href="" v-if="hasEditPremission==true" class="btn btn-success">Edit</a>
                    <a href="" v-if="hasDeletePremission==true" class="btn btn-danger">Delete</a>
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

import { useAuthStore } from '@/stores/auth';

// let hasViewPremission = false;
// let hasCreatePermission = false;
// let hasEditPremission = false;
// let hasDeletePremission = false;
// let testTemp = true;


definePageMeta({
  middleware: 'auth'
  // or middleware: 'auth'
});


export default {

  data() {
    return {
      products: {
      },

      products: "",
      isLoading: true,
      isLoadingTitle: 'Loading...',
      Products: "",

      hasViewPremission:false,
      hasCreatePermission:false,
      hasEditPremission:false,
      hasDeletePremission:false,
    };



  },






  //  computed(){
  //   return auth.getPermission;

  // },


  // before mounted



  // beforeMount() {





  // },




  mounted() {







    useAuthStore().hasViewPremission().then(res => {
      this.hasViewPremission = res;
      console.log("view permission:",this.hasViewPremission); // Use the value here or in subsequent code
    });



    useAuthStore().hasCreatePremission().then(res => {
      this.hasCreatePermission = res;
      console.log("crete permission:", this.hasCreatePermission); // Use the value here or in subsequent code
    });




    useAuthStore().hasEditPremission().then(res => { // Use edit code
      this.hasEditPremission = res;
      console.log("edit permission:",this.hasEditPremission);
    });


    useAuthStore().hasDeletePremission().then(res => {
      this.hasDeletePremission = res;
      console.log(this.hasDeletePremission); // Use the value here or in subsequent code
    });






   // this.permissionGet();

    this.getProducts();


  },

  methods: {


    // permissionGet() {

    //   return useAuthStore().getPermission;
    //   //console.log("permission list:",useAuthStore().getPermission);
    // },



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





    // delete User


    // deleteUser(UserId){


    // if(confirm('are you sure')){

    //   axios.delete(`http://127.0.0.1:8000/api/user/delete/${UserId}`)
    //   .then(res=>{
    //   });

    // }

    // this.isLoading=false;







  }



}//end deleted



</script>


<style lang="scss" scoped></style>
