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

          <h4 class="card-title">Change Password</h4>


          <div class="row mb-3">
            <label for="example-text-input" class="col-sm-2 col-form-label">Old Password</label>
            <div class="col-sm-10">
              <input class="form-control" v-model="User.old_password" type="text" placeholder="Old Password"
                id="example-text-input">
            </div>
          </div>
          <!-- end row -->


          <div class="row mb-3">
            <label for="example-email-input" class="col-sm-2 col-form-label">New Password</label>
            <div class="col-sm-10">
              <input class="form-control" v-model="User.password" type="text" placeholder="New Password"
                id="example-email-input">
            </div>
          </div>
          <!-- end row -->

          <div class="row mb-3">
            <label for="example-email-input" class="col-sm-2 col-form-label">Confirm Pasword</label>
            <div class="col-sm-10">
              <input class="form-control" v-model="User.password_confirmation" type="text" placeholder="Confirm Pasword"
                id="example-email-input">
            </div>
          </div>
          <!-- end row -->
   
          <!-- end row -->



          <!-- end row -->
          <button class="btn btn-info" @click.prevent="changePassword()">Change</button>

          <!-- end row -->
        </div>
      </div>
    </div> <!-- end col -->

  </div>

    </div>
</template>


<script>
import axios from "axios";
import { useTokenStore } from '@/stores/token';
import Swal from 'sweetalert2'


definePageMeta({
  middleware: 'auth'
  // or middleware: 'auth'
});

export default {

  data() {
    return {
      User: {

        old_password: "",
        password: "",
        password_confirmation:"",
      
    

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

   
    changePassword() {



      //alert('hello');

      this.isLoading = true;

      this.isLoadingTitle = "Saving....";


      axios.post("http://127.0.0.1:8000/api/change/password", this.User, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${useTokenStore().getToken}`,
          },
        })
        .then(res => {

            // sweet alert.....
            Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Password Change successfully!",
            showConfirmButton: false,
            timer: 1500
          });
          //alert('Password Change Succesfully');
          console.log("Password_Change:", res);
          this.User.old_password = "";
          this.User.password = "";
          this.User.password_confirmation="",

          this.isLoading = false;

          this.isLoadingTitle = "loading....";


        });


    }


  }
}


</script>


<style lang="scss" scoped>

</style>