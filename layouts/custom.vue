<template>


<slot/>

</template>

<script setup>



const user = reactive({
  email: "",
  password: "",
});

const auth = useAuthStore();
const token = useTokenStore();

const errors = ref([]);

const handleSubmite = async () => {

    // alert(user.email);
  try {

    await auth.login(user);


    // return navigateTo("/dashboard");
    //console.log(auth.login);;
  } catch (error) {
console.log(error.data.errors);
    // errors.value = error.data.errors;
  };
};









</script>


<style lang="scss" scoped>

</style>
