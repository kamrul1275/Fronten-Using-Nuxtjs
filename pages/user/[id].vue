<template>
   

        <br>
        <br>
        
      <h4 class="text-center">User edit</h4>
  
  
  
   
  


<div class="container">

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

          <h4 class="card-title">Edit User</h4>


          <div class="row mb-3">
            <label for="example-text-input" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
              <input class="form-control" v-model="User.name" type="text" placeholder="Artisanal kale"
                id="example-text-input">
            </div>
          </div>
          <!-- end row -->


          <div class="row mb-3">
            <label for="example-email-input" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input class="form-control" v-model="User.email" type="email" placeholder="bootstrap@example.com"
                id="example-email-input">
            </div>
          </div>
          <!-- end row -->


  


          <div class="row mb-3">
            <label for="example-password-input" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
              <input class="form-control" v-model="User.password" type="password">
            </div>
          </div>
          <!-- end row -->
          <button class="btn btn-info"  @click.prevent="submiteUpdate()"> Submite</button>

         
        </div>
      </div>
    </div> 

  </div>

</div>






  
</template>
    
  <script>
  import axios from "axios";
  export default {
  
    data() {
      return {
        User: {
  //
        },
  
        UserId: "",
        isLoading: false,
        isLoadingTitle: 'Loading...',
      };
  
    },
  
    mounted() {
  
      this.UserId = this.$route.params.id;
  
      // alert(this.UserId);
  
  this.getUser(this.UserId);
  
    },
  
    methods: {
  

  
  
      getUser(UserId){

        // alert('oky');
  
        axios.get(`http://127.0.0.1:8000/api/user/edit/${UserId}`)
          .then(res=>{
  
  
            // this.isLoading=false;
  
            this.User = res.data.data;
             console.log("User Edit:",this.User);
    
  
  
          });
      },
  
      submiteUpdate(UserId) {
  
  
  
        //alert('oky up');
        this.isLoading = true;
  
        this.isLoadingTitle = "Saving....";
  
  
        axios.put(`http://127.0.0.1:8000/api/user/update/${this.UserId}`,this.User)
          .then(res => {
  
            console.log(res.data);
            this.User.name = "";
            this.User.email = "";
            this.User.password = "";
  
  
            this.isLoading = false;
  
            this.isLoadingTitle = "updating....";
  
  
          });
  
  
      }
  
  
    }
  }
  
  
  </script>