<template>
    <br>
    <br>
    <br>
   <br>
    <div>
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

          <h4 class="card-title">Reset Password</h4>


       

          <div class="row mb-3">
            <label for="example-email-input" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input class="form-control" v-model="User.email" type="email" placeholder="Enter Your Email Address"
                id="example-email-input">
            </div>
          </div>
          <!-- end row -->


   
          <!-- end row -->



          <!-- end row -->
          <button class="btn btn-info" @click.prevent="resetPassword()">Change</button>

          <!-- end row -->
        </div>
      </div>
    </div> <!-- end col -->

  </div>

    </div>
</template>


<script>
import axios from "axios";


definePageMeta({
  layout: "custom",
});


export default {

  data() {
    return {
      User: {

        email: "",
    
      },


      isLoading: false,
      isLoadingTitle: 'Loading...',
    };
  },


  // getRole

  // mounted() {
  //   try {
  //     let token = useTokenStore();
  //     this.isLoading = true;
  //     const roles = axios
  //       .get("http://127.0.0.1:8000/api/roles", {
  //         headers: {
  //           Accept: "application/json",
  //           Authorization: `Bearer ${token.getToken}`,
  //         },
  //       })
  //       .then((response) => {
  //         this.roles = response.data.data;
  //         this.isLoading = false;
  //         console.log("roles_Data..:", this.roles);
  //       });
  //   } catch (error) {
  //     this.errors.push(error);
  //     throw error;
  //   }

  //   //end  get role
  // },



  methods: {

    resetPassword() {



      //alert('hello');

      this.isLoading = true;

      this.isLoadingTitle = "Saving....";


      axios.post('http://127.0.0.1:8000/api/forget/password', this.User,{
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${useTokenStore().getToken}`,
          },
        })
        .then(res => {

          alert('Mail Sent Succesfully');
          console.log("Mail Sent:", res);
      
          this.User.email = "";

          this.isLoading = false;

          this.isLoadingTitle = "loading....";


        });


    }


  }
}


</script>


<style lang="scss" scoped>

</style>