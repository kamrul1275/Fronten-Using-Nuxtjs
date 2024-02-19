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
  
            <h4 class="card-title">Create Order</h4>
  
  
  
            <div class="row mb-3">
              <label for="example-text-input" class="col-sm-2 col-form-label">Total Amount</label>
              <div class="col-sm-10">
                <input class="form-control" autocomplete="off" v-model="Order.total_ammount"  type="text" placeholder="Total Amount"
                  id="example-text-input">
              
              </div>
            </div>
            <!-- end row -->
  
  

    <div class="mb-4">
        <label class="form-label">Order Date</label>
        <div class="input-group" id="datepicker1">
            <input type="text" class="form-control"  v-model="Order.order_date" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-date-container="#datepicker1" data-provide="datepicker">

            <span class="input-group-text"><i class="mdi mdi-calendar"></i></span>
        </div><!-- input-group -->
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
      Order: {

        total_ammount: "",
        order_date:"",
        
      
      },
    
      Swal: {},
      errors:{},

      isLoading: false,
      isLoadingTitle: 'Loading...',
    };
  },



  methods: {



    submitHandle() {
      //alert('hello');


  //  console.log(Order.total_ammount, Order.order_date);
        

        this.isLoading = true;
      this.isLoadingTitle = "Saving....";

 


        axios.post('http://127.0.0.1:8000/api/orders', this.Order)
        .then(res => {
  
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Order created successfully!",
            showConfirmButton: false,
            timer: 1500
          });

          console.log("OrderInfo:", res);
          this.Order.total_ammount = "";
          this.Order.order_date = "";
         

          this.isLoading = false;
          this.isLoadingTitle = "loading....";



        });
    

    




  }//end method


},



  }
  
</script>

<style lang="scss" scoped></style>

<style lang="scss" scoped>

</style>