<template>

    <br>
    <br>
    <br>
    <br>
    
    
         <div class="row">
    
            <div class="col-md-3">  </div>
                                <div class="col-md-7">


<!-- loader -->

<div v-if="isLoading" class="spinner-border text-danger" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                    </div>
                                    <!-- end loader -->




                                    <div v-else class="card">
                                        <div  class="card-body">
    
                                            <h4 class="card-title">Add Role</h4>
                                          
                                    

                                            <div class="row mb-3">
                                            <label class="col-sm-2 col-form-label">Select</label>
                                            <div class="col-sm-10">
                                                <select class="form-select"  aria-label="Default select example">
                                                    <!-- <option selected="">Open this select menu</option> -->
                                                    <option type="text" :value="role.id" id="roles.name" v-for="(role, index) in roles" :key="index">{{ role.name }}</option>
                                                   
                                                    <!-- <option value="3">{{ roles[0].name  }}</option> -->
                                                    </select>
                                            </div>
                                        </div>
                                        <!-- end row -->



                                         <button class="btn btn-info">Submite</button>
                                   
                                            <!-- end row -->
                                        </div>
                                    </div>
                                </div> <!-- end col -->
    
                                  
                            </div>
                            <!-- end row -->
</template>
    



<script>
import { useTokenStore } from "@/stores/token";

import axios from "axios";




export default {
  data() {
    return {
      data: [],
      errors: [],
      roles: [],
      name: "",
      id: "",
      isLoading:true,
    isLoadingTitle:'Loading...',
    };
   
  },

  mounted() {
    try {
      let token = useTokenStore();
      this.isLoading=true;
      const role_permissions = axios
        .get("http://127.0.0.1:8000/api/role_permissions", {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token.getToken}`,
          },
         
        })
        .then((response) => {
          this.role_permissions = response.data;
          this.isLoading=false;
          console.log("permissions Data:", this.role_permissions);
        });
    } catch (error) {
      this.errors.push(error);
      throw error;
    }

    // start role request

    const auth = useAuthStore();
    const token = useTokenStore();
    try {
      const roles = $fetch("http://127.0.0.1:8000/api/roles/", {
        method: "GET",
        headers: {
          Accept: "application/json",
          authorization: `Bearer ${token.getToken}`,
        },
      }).then((response) => {
        this.roles = response.data;
        console.log("roles", this.roles);
      });
      //  console.log('roles', roles.authorization.token);
    } catch (error) {
      this.errors.push(error);
      throw error;
    }
    //end  get role
  },

  // update part
  methods: {
    nameChange(roleName) {
      this.name = roleName;
    },

    roleUpdate() {
      console.log("Form data:", this.roles);
      const auth = useAuthStore();
      const token = useTokenStore();

      //console.log("role id",this.roles.id);

      console.log("Role ID...:", this.roles.find(role => role.name === this.name)?.id);

      try {
        // Assuming there is an API endpoint to handle form submissions
        const auth = useAuthStore();
        const response = axios
          .post(
            `http://127.0.0.1:8000/api/users/${auth.getUser.id}/roles/${this.roles.find(role => role.name === this.name)?.id}`,
            { roles: this.name }
          )
          //console.log('Form submitted successfully:', response)
          .then((response) => {
            this.data = response.data;
            console.log("Form submitted successfully ", response);
          });
      } catch (error) {
        this.errors.push(error);
        throw error;
      }


    },
  },
 };

// end
</script>






    
    <style lang="scss" scoped>
    
    </style>