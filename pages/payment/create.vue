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
  
            <h4 class="card-title"> Payment</h4>
  
  
  
            <div class="row mb-3">
              <label for="example-text-input" class="col-sm-2 col-form-label">User Id</label>
              <div class="col-sm-10">
                <input class="form-control" autocomplete="off" v-model="user_id"  type="text" placeholder="Category name"
                  id="example-text-input">
              
              </div>
            </div>
            <!-- end row -->

            
            <div class="row mb-3">
              <label for="example-text-input" class="col-sm-2 col-form-label">Order Id</label>
              <div class="col-sm-10">
                <input class="form-control" autocomplete="off" v-model="order_id"  type="text" placeholder="Category name"
                  id="example-text-input">
              
              </div>
            </div>
            <!-- end row -->



            
            <div class="row mb-3">
              <label for="example-text-input" class="col-sm-2 col-form-label">Amount</label>
              <div class="col-sm-10">
                <input class="form-control" autocomplete="off" v-model="ammount"  type="text" placeholder="Category name"
                  id="example-text-input">
              
              </div>
            </div>
            <!-- end row -->



            
            <div class="row mb-3">
              <label for="example-text-input" class="col-sm-2 col-form-label">Account No</label>
              <div class="col-sm-10">
                <input class="form-control" autocomplete="off" v-model="account_no"  type="text" placeholder="Category name"
                  id="example-text-input">
              
              </div>
            </div>
            <!-- end row payment_type -->



  
     
            <div class="row mb-3">
              <label for="example-text-input" class="col-sm-2 col-form-label">Payment</label>
              <div class="col-sm-10">
                <input class="form-control" autocomplete="off" v-model="payment_type"  type="text" placeholder="Category name"
                  id="example-text-input">
              
              </div>
            </div>
            <!-- end row payment_type -->
  
  

          
            <button class="btn btn-info" @click.prevent="submitHandle()">Submite</button>
  
            <!-- end row -->
          </div>
        </div>
      </div> <!-- end col -->
  
    </div>
  
    <!-- end row -->
</template>
  
  

<script setup>

</script>

<style lang="scss" scoped>

</style>