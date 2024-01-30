// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["assets/css/bootstrap.min.css",
  "assets/css/icons.min.css",

  "assets/css/app.css",

 
  ],

  script: [
    { src: "assets/libs/jquery/jquery.min.js"},
    { src: "js/bootstrap.js" }, 
    { src: "assets/js/app.js" },
  ],

  
})