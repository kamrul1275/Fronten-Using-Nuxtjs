<template>
    <br />
    <br />
    <br />
    <br />
    <br />
  
    <div class="row">
      <!-- loader -->
  
      <div class="col-md-3"></div>
  <!-- 
      <div isLoading  class="spinner-border text-danger" role="status">
                                          <span class="visually-hidden">Loading...</span>
                                          </div> -->
  
      <div  class="col-md-7">
        <!-- loader -->
  
         <!-- loader -->
  
         <div v-if="isLoading" class="spinner-border text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <!-- end loader -->
       
  
        <div v-else class="card" >
          <div  class="card-body">
            <h4 class="card-title">Update Role</h4>
  
            <div class="row mb-3">
              <label for="example-text-input" class="col-sm-2 col-form-label"
                >Role Name</label
              >
              <div class="col-sm-10">
                <input v-model="Role.name"
                  class="form-control"
                  type="text"
                  placeholder="writte permission"
                  id="example-text-input"
                />
              </div>
            </div>
  
            <!-- end row -->
            <label for="example-text-input" class="col-sm-2 col-form-label"
              >Permissions Name:</label
            >
  
            <div
              class="form-check mb-3"
              v-for="(permission, index) in permissions"
              :key="index"
            >
              <input class="form-check-input" v-model="Role.selectedPermissions" :value="permission.id" type="checkbox" id="formCheck1" />
              <label class="form-check-label" for="formCheck1">
                {{ permission.name }}
              </label>
            </div>
  
            <button class="btn btn-info" @click.prevent="submiteRole()">Update Role</button>
  
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
  import Swal from 'sweetalert2'
  
  definePageMeta({
    middleware: "auth",
    // or middleware: 'auth'
  });
  
  export default {
    data() {
      return {
        Role: {
          name: "",
          
          selectedPermissions: [],
       
        },
        RoleId:"",



        permissions: "",
  
        isLoading: false,
        isLoadingTitle: "Loading...",
      };
    },
  
    mounted() {
      try {
        let token = useTokenStore();
        this.isLoading = true;
        const permissions = axios
          .get("http://127.0.0.1:8000/api/permissions", {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token.getToken}`,
            },
          })
          .then((response) => {
            this.permissions = response.data.data;
            this.isLoading = false;
            console.log("permissions_Data..:", this.permissions);
          });
      } catch (error) {
        this.errors.push(error);
        throw error;
      }
  





// role id

this.RoleId = this.$route.params.id;
this.getRole(this.RoleId);
  
      //end  get role
    },
  
    methods: {
          submiteRole() {
              //alert('hello');
              // console.log(this.Role);
              // this.isLoading=true;
              // this.isLoadingTitle="Saving....";
              let data = {
                name: this.Role.name,
                selectedPermissionsValues:  Object.values(this.Role.selectedPermissions)
  
              }
              console.log(data)
              axios.post('http://127.0.0.1:8000/api/roles',data)
              .then(res=>{
  // sweet alert.....
              Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User created successfully!",
              showConfirmButton: false,
              timer: 1500
            });
               // alert('Role Create Succesfully');
                 console.log("Role & Permission:",res);
                 this.Role.name="";
                 this.Role.permission="";
                 this.isLoading=false;
                this.isLoadingTitle="loading....";
              });
        },

//    get role name


getRole(RoleId){

// alert('oky');

axios.get(`http://127.0.0.1:8000/api/roles/edit/${RoleId}`)
  .then(res=>{


    // this.isLoading=false;

    this.Role = res.data.data;
     console.log("Get Role Name Edit:",this.Role);



  });
},


    },
  };
  </script>
  