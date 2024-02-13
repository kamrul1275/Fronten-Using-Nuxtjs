<template>
    <br>
    <br>


    <h1>Permission page</h1>


    <div class="row">
        <div class="col-md-3">

        </div>


        <div class="col-md-7 mb-3">


                              <!-- loader -->

                                <!-- <div v-if="isLoading" class="spinner-border text-info" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                    </div> -->
                                    <!-- end loader -->


            <div  class="card ml-4">
                <div class="card-body ml-3">
                    <h4 class="card-title"> Table</h4>


                    <div class="table-responsive">
                        <table  class="table mb-0">

                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Permission Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(permission, index)  in  permissions.data" :key="index">
                                    <th scope="row">{{ permission.id }}</th>
                                    <td> {{ permission.name }}</td>
                                
                                    <td>

                               
<nuxt-link :to="`/user/${permission.id}`" class="btn btn-success">  <i class='far fa-edit'></i> </nuxt-link>
<!-- <a href="" class="btn btn-danger">Delete</a> -->

<button  @click.prevent="deleteUser(permission.id)" class="btn btn-danger" ><i class="fa fa-trash"></i></button>



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
import Swal from 'sweetalert2'


definePageMeta({
  middleware: 'auth'
  // or middleware: 'auth'
});


export default {

 data() {
  return {
    permissions:{

    },
      isLoading:true,
      isLoadingTitle:'Loading...',
     

  };
 },



 mounted(){

this.getPermissions();

 },

 methods:{

// gete data
  getPermissions(){

    this.isLoading=true;
    axios.get(`http://127.0.0.1:8000/api/permissions`)
        .then(res=>{


          this.isLoading=false;

          this.permissions = res.data;
           console.log("All permission:",this.permissions);
  


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