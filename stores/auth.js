import { defineStore } from 'pinia'
import { useTokenStore } from './token';

export const useAuthStore = defineStore('auth', {

  state: () => ({
    user: {},
    permissions:[],

  }),
  // user save
  persist: {
    paths: ['user','permissions'],
  },

  persist: true,

  getters: {
    getUser: (state) => state.user,
    getPermission: (state) => state.permissions,
  },

  actions: {


    // login
    async login(userData) {

      const token = useTokenStore();
      try {
        const data = await $fetch('http://127.0.0.1:8000/api/login', {
          method: 'POST',
          body: { ...userData },
        });
        console.log("Auth_Store:",data.authorization.token);
        this.user = data.user;
        token.setToken(data.authorization.token);
        this.permissions = data.permissions;
        console.log("Auth_Store:",data.authorization.token);
      //alert("User successfully login");

        return navigateTo("/dashboard");
      } catch (error) {
        throw error;
      }

    },//end login


       // register
      //  async register(userData) {

      //   //alert('oky');

      //   const token = useTokenStore();
      //   try {
      //     const data = await $fetch('http://127.0.0.1:8000/api/register', {
      //       method: 'POST',
      //       body: { ...userData },
      //     });
      //     return navigateTo("/auth/login");
      //   } catch (error) {
      //     throw error;
      //   }
  
      // },
  


    // logout part

    async logout() {

      const token = useTokenStore();
      try {
        const res = await $fetch('http://127.0.0.1:8000/api/logout', {
          method: 'POST',
          headers: {
            Accept: "application/json",
            authorization: `Bearer ${token.getToken}`,

          },

        });
        token.removeToken();
        console.log('auth_store', res);
        return navigateTo("/");

      } catch (error) {
        throw error;
      }

    },







// permission


// permission view ########

async hasViewPremission(){


  let hasCreatePermission = false;
  let tempPremissions = []
  console.log("auth_view:---", this.permissions);
  for (let index = 0; index < this.permissions.length; index++) {
    const element = this.permissions[index];
    tempPremissions.push(element)
    }
  for (let index = 0; index < tempPremissions.length; index++) {
    const element = tempPremissions[index];
    if (element["name"] == "view") {
      hasCreatePermission= true;
      break;
    } else {
      hasCreatePermission= false;
    }
  }
  return hasCreatePermission;
},



//permission Create ########
async hasCreatePremission(){
  let hasCreatePermission = false;
  let tempPremissions = []
  console.log("auth_create:---", this.permissions);
  for (let index = 0; index < this.permissions.length; index++) {
    const element = this.permissions[index];
    tempPremissions.push(element)
    }
  for (let index = 0; index < tempPremissions.length; index++) {
    const element = tempPremissions[index];
    if (element["name"] == "create") {
      hasCreatePermission= true;
      break;
    } else {
      hasCreatePermission= false;
    }
  }
  return hasCreatePermission;
},




// // permission Edit ########
async hasEditPremission(){
  let hasCreatePermission = false;
  let tempPremissions = []
  console.log("auth_edit:---", this.permissions);
  for (let index = 0; index < this.permissions.length; index++) {
    const element = this.permissions[index];
    tempPremissions.push(element)
    }
  for (let index = 0; index < tempPremissions.length; index++) {
    const element = tempPremissions[index];
    if (element["name"] == "edit") {
      hasCreatePermission= true;
      break;
    } else {
      hasCreatePermission= false;
    }
  }
  return hasCreatePermission;
},


//  // permission DELETE ########
async hasDeletePremission(){
  let hasCreatePermission = false;
  let tempPremissions = []
  console.log("auth_delete:---", this.permissions);
  for (let index = 0; index < this.permissions.length; index++) {
    const element = this.permissions[index];
    tempPremissions.push(element)
    }
  for (let index = 0; index < tempPremissions.length; index++) {
    const element = tempPremissions[index];
    if (element["name"] == "delete") {
      hasCreatePermission= true;
      break;
    } else {
      hasCreatePermission= false;
    }
  }
  return hasCreatePermission;
}





},//end action
 })