export default defineNuxtConfig({
  // Your Nuxt configuration options here
  css: ["assets/css/bootstrap.min.css",

  "assets/css/app.css",
  "assets/css/icons.min.css",
  "assets/css/app-rtl.min.css",     
  "assets/css/app.min.css", 
 
],

// js:["assets/js/bootstrap.bundle.min.js"],

app: {
  head: {
    script: [

      {
        src: "https://code.jquery.com/jquery-3.7.1.min.js" ,
         },
   

      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
        type: "text/javascript",
      },

    


{
    src:"assets/js/bootstrap.bundle.min.js",
   
},

{
  src:"assets/js/app.js",
}

    ],
  },
},

});




 