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

          <h4 class="card-title"> User Profile</h4>


          <div class="row mb-3">
            <label for="example-text-input" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
              <input class="form-control" v-model="User.name" type="text" placeholder="Artisanal kale"
                id="example-text-input">
            </div>
          </div>
          <!-- end row -->


 

          <div class="row mb-3">
            <label for="example-email-input" class="col-sm-2 col-form-label">Phone</label>
            <div class="col-sm-10">
              <input class="form-control" v-model="User.phone" type="number" placeholder="+880..."
                id="example-email-input">
            </div>
          </div>
          <!-- end row -->


          <!-- <div class="row mb-3">
            <label for="image" class="col-sm-2 col-form-label">Photo</label>
            <div class="col-sm-10">
              <input class="form-control"  type="file" 
                id="image">
            </div>
          </div> -->
          <!-- end row -->
   
          <!-- end row -->



          <!-- end row -->
          <button class="btn btn-info" @click.prevent="profileUpdate()">Update</button>

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
  middleware: 'auth'
  // or middleware: 'auth'
});

export default {

  data() {
    return {
      User: {

        name: "",
        phone: "",
  
      },
      UserId: "",


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


  mounted() {
  
  this.UserId = this.$route.params.id;

  //alert(this.UserId);

//this.profileUpdate(this.UserId);

},

  methods: {

    profileUpdate() {



      alert('hello');

      this.isLoading = true;

      this.isLoadingTitle = "Saving....";


      axios.post(`http://127.0.0.1:8000/api/profile/update/${UserId}`)
        .then(res => {

          alert('User Create Succesfully');
          console.log("UserInfo:", res);
          this.User.name = "";
          this.User.phone = "";

          this.isLoading = false;

          this.isLoadingTitle = "loading....";


        });


    }


  }
}


</script>


<style lang="scss" scoped>

</style>