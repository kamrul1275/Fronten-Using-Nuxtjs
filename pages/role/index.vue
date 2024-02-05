<template>
    <br>
    <br>


    <h1>User page</h1>


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
                                    <th>Role Name</th>
                                    <th>Permission</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(role, index)  in  roles.data" :key="index">
                                    <th scope="row">1</th>
                                    <td> {{ role.name }}</td>
                                   <td> permissions name </td> 
            
                                    <td>

                               
<nuxt-link :to="`/user/${role.id}`" class="btn btn-success">  Edit </nuxt-link>
<!-- <a href="" class="btn btn-danger">Delete</a> -->

<button  @click.prevent="deleteUser(role.id)" class="btn btn-danger" >Delete</button>



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



definePageMeta({
  middleware: 'auth'
  // or middleware: 'auth'
});


export default {

 data() {
  return {
    Users:{

    },
      isLoading:true,
      isLoadingTitle:'Loading...',
      roles:"",

  };
 },



 mounted(){

this.getUsers();

 },

 methods:{

// gete data
  getUsers(){

    this.isLoading=true;
    axios.get(`http://127.0.0.1:8000/api/roles`)
        .then(res=>{


          this.isLoading=false;

          this.roles = res.data;
           console.log("All Roles",this.roles);
  


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