<template>
  <div class="wrapper-page">
    <div class="container-fluid p-0">
      <div class="card">
        <div class="card-body">
          <div class="text-center mt-4">
            <div class="mb-3">
              <a href="index.html" class="auth-logo">
                <img
                  src="assets/images/logo-dark.png"
                  height="30"
                  class="logo-dark mx-auto"
                  alt=""
                />
                <img
                  src="assets/images/logo-light.png"
                  height="30"
                  class="logo-light mx-auto"
                  alt=""
                />
              </a>
            </div>
          </div>


          
          <!-- <span v-if="errors.message" class="text-danger">{{
                  errors.message[0]
                }}</span> -->
          
          <h4 class="text-muted text-center font-size-18"><b>Sign In</b></h4>

          <div class="p-3">
            <form class="form-horizontal mt-3" @submit.prevent="handleSubmite()">
              <div class="form-group mb-3 row">
                <div class="col-12">
                  <input class="form-control" v-model="user.email" type="text" />
                </div>
                <span v-if="errors.email" class="text-danger">{{
                  errors.email[0]
                }}</span>
              </div>
            

              <div class="form-group mb-3 row">
                <div class="col-12">
                  <input class="form-control" v-model="user.password" type="password" />
                </div>
                <span v-if="errors.password" class="text-danger">{{
                  errors.password[0]
                }}</span>
              </div>

              <div class="form-group mb-3 row">
                <div class="col-12">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customCheck1"
                    />
                    <label class="form-label ms-1" for="customCheck1"
                      >Remember me</label
                    >
                  </div>
                </div>
              </div>

              <div class="form-group mb-3 text-center row mt-3 pt-1">
                <div class="col-12">
                  <button
                    class="btn btn-info w-100 waves-effect waves-light"
                    type="submit"
                  >
                    Log In
                  </button>
                </div>
              </div>

              <div class="form-group mb-0 row mt-2">
                <div class="col-sm-7 mt-3">
                  <nuxt-link to="/auth/reset_password" class="text-muted"><i class="mdi mdi-lock"></i> Forgot your password</nuxt-link>
                </div>
                <div class="col-sm-5 mt-3">
                  <nuxt-link to="/auth/register" class="text-muted"
                    ><i class="mdi mdi-account-circle"></i> Create an account</nuxt-link
                  >
                </div>
              </div>
            </form>
          </div>
          <!-- end -->
        </div>
        <!-- end cardbody -->
      </div>
      <!-- end card -->
    </div>
    <!-- end container -->
  </div>
</template>

<script setup>
import Swal from 'sweetalert2'

const auth = useAuthStore();
const token = useTokenStore();

definePageMeta({
  middleware: "guest",
  // or middleware: 'auth'
});

definePageMeta({
  layout: "custom",
});

const user = reactive({
  email: "",
  password: "",
});

const errors = ref([]);

const handleSubmite = async () => {
  // alert(user.email);
  try {
    await auth.login(user);


    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "User created successfully!",
      showConfirmButton: false,
      timer: 1500
    });

    // return navigateTo("/dashboard");
    //console.log(auth.login);;
  } catch (error) {
    //console.log(error.data.errors);
   errors.value = error.data.errors;

    //throw errors;
   
  }
};
</script>

<style lang="scss" scoped></style>
