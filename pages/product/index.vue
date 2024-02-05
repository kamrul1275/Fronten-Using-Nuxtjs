<template>
  <br />
  <br />

  <h1>Product page</h1>

  <div class="row">
    <div class="col-md-3"></div>

    <div class="col-md-7 mb-3">
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
                <tr v-for="(product,index) in  products" :key="index">
                  <th scope="row">{{ product.id }}</th>
                  <td>{{ product.title }}</td>
                  <td>{{ product.price }}</td>
                  <td>
                    <a href="" class="btn btn-success">Edit</a>
                    <a href="" class="btn btn-danger">Delete</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-3"></div>
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
    products:{

    },
      isLoading:true,
      isLoadingTitle:'Loading...',
      Products:"",

  };
 },



 mounted(){

this.getProducts();

 },

 methods:{

// gete data
  getProducts(){

    this.isLoading=true;
    axios.get(`http://127.0.0.1:8000/api/products`)
        .then(res=>{


          this.isLoading=false;

          this.products = res.data.data;
           console.log("All products",this.products);
  


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
