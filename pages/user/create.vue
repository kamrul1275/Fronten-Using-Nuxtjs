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

          <h4 class="card-title">Create User</h4>


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
            <label class="col-sm-2 col-form-label">Role</label>
            <div class="col-sm-10">
              <select class="form-select" aria-label="Default select example" v-model="User.role_id">
                <!-- <option selected="">Open this select menu</option> -->
                <option v-for="(role, index) in roles" :key="index" value="1">{{ role.name }} </option>

              </select>
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
          <button class="btn btn-info" @click.prevent="submiteHandle()">Submite</button>

          <!-- end row -->
        </div>
      </div>
    </div> <!-- end col -->

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
      User: {

        name: "",
        email: "",
        role_id: "",
        password: "",


      },
      roles: "",


      isLoading: false,
      isLoadingTitle: 'Loading...',
    };
  },


  // getRole

  mounted() {
    try {
      let token = useTokenStore();
      this.isLoading = true;
      const roles = axios
        .get("http://127.0.0.1:8000/api/roles", {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token.getToken}`,
          },
        })
        .then((response) => {
          this.roles = response.data.data;
          this.isLoading = false;
          console.log("roles_Data..:", this.roles);
        });
    } catch (error) {
      this.errors.push(error);
      throw error;
    }

    //end  get role
  },



  methods: {

    submiteHandle() {



      //alert('hello');

      this.isLoading = true;

      this.isLoadingTitle = "Saving....";


      axios.post('http://127.0.0.1:8000/api/user/create', this.User)
        .then(res => {

          alert('User Create Succesfully');
          console.log("UserInfo:", res);
          this.User.name = "";
          this.User.email = "";
          this.User.role_id = "";
          this.User.password = "";


          this.isLoading = false;

          this.isLoadingTitle = "loading....";


        });


    }


  }
}


</script>

<style lang="scss" scoped></style>