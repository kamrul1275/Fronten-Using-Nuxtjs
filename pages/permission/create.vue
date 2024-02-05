<template>
    <br />
    <br />
    <br />
    <br />
    <br />
  
    <div class="row">
      <!-- loader -->
  
      <div class="col-md-3"></div>
      <div class="col-md-7">
        <!-- loader -->
  
        <div v-if="isLoading" class="spinner-border text-danger" role="status">
                                          <span class="visually-hidden">Loading...</span>
                                          </div>
        <!-- end loader -->
  
        <div v-else class="card">
          <div class="card-body">
            <h4 class="card-title">Create Permission</h4>
  
            <div class="row mb-3">
              <label for="example-text-input" class="col-sm-2 col-form-label"
                >Permission Name</label
              >
              <div class="col-sm-10">
                <input  v-model="Permission.name"
                  class="form-control"
                  type="text" required
                  placeholder="writte permission"
                  id="example-text-input"
                />
              </div>
            </div>
  
            <!-- end row -->
          
  
            <button class="btn btn-info" @click.prevent="submitePermission()">Submite</button>
  
            <!-- end row -->
          </div>
        </div>
      </div>
      <!-- end col -->
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
        Permission: {

        name: "",
       


      },


      isLoading:false,
      isLoadingTitle:'Loading...',
    };
  },



  methods: {

    submitePermission() {

        //alert('hello');
    
        this.isLoading=true;

        this.isLoadingTitle="Saving....";


        axios.post('http://127.0.0.1:8000/api/permissions',this.Permission)
        .then(res=>{

          alert('Permission Create Succesfully');
           console.log("Permission_Info:",res);
           this.Permission.name="";
        


           this.isLoading=false;

          this.isLoadingTitle="loading....";


        });


  }


}
}


</script>

<style lang="scss" scoped>

</style>