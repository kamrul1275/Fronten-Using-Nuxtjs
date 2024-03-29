import { Link } from "#build/components";

export default defineNuxtConfig({
  // Your Nuxt configuration options here
css: [
  "assets/css/bootstrap.min.css",
  "assets/css/app.css",
  "assets/css/icons.min.css",
  "assets/css/app-rtl.min.css",     
  "assets/css/app.min.css",
  "assets/libs/bootstrap-datepicker/css/bootstrap-datepicker.min.css",
],

// <link rel= "stylesheet" href= "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" >



script : [
  {
    src:"assets/libs/jquery/jquery.min.js",
  },

  {
  src:"assets/libs/bootstrap/js/bootstrap.bundle.min.js",
  },

  {
  src:"assets/libs/metismenu/metisMenu.min.js",
  },

  {
  src:"assets/libs/simplebar/simplebar.min.js",
  },


  {
  src:"assets/libs/node-waves/waves.min.js",
  },
  {
  src:"assets/libs/apexcharts/apexcharts.min.js",
  },

  {
  src:"assets/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.min.js",
  },


  {
  src:"assets/libs/datatables.net/js/jquery.dataTables.min.js",
  },



  {
  src:"assets/libs/datatables.net-responsive/js/dataTables.responsive.min.js",
  },

  {
  src:"assets/libs/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js",
  },


  {
  src:"assets/js/pages/dashboard.init.js",
  },

  {
  src:"assets/js/app.js",
  },

  {
     src:"assets/libs/bootstrap-datepicker/js/bootstrap-datepicker.min.js",
  },
],

// js:["assets/js/bootstrap.bundle.min.js"],

app: {
  head: {

    // <link rel= "stylesheet" href= "https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css" >
    link: [
  
      {rel: 'stylesheet',  href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" }
    ],

    script: [

      {
        src: "https://code.jquery.com/jquery-3.7.1.min.js" ,
      },

      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
        type: "text/javascript",
      },


      
    ],
  },
},

modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', "@nuxt/image"],



build: {
  transpile: ['pinia-plugin-persistedstate'],
},


plugins: [
  { src: '~/plugins/sweetalert', mode: 'client' }
],
content: {
  experimental: {
    search: true
  }
}


});