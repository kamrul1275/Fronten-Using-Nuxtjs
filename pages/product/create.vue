<template>
  <br />
  <br />
  <br />
  <br />

  <div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-7">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Create Product</h4>

          <div class="row mb-3">
            <label for="example-text-input" class="col-sm-2 col-form-label"
              >Product Name</label
            >
            <div class="col-sm-10">
              <input
                v-model="Product.product_name"
                class="form-control"
                type="text"
                placeholder="wrttie product"
                id="example-text-input"
              />
            </div>
          </div>
          <!-- end row -->

          <div class="row mb-3">
              <label for="" class="col-sm-2 col-form-label">Brand Name</label>
              <select class="form-select" v-model="Product.selectedBrandId" aria-label="Default select example">
                <option :value="brand.id" v-for="(brand, index) in brands" :key="index">{{ brand.brand_name }}</option>

                                                   
                                                 
               </select>
            </div> 
           
  



            <div class="row mb-3">
              <label for="" class="col-sm-2 col-form-label">Category Name</label>
              <select class="form-select" v-model="Product.selectedCategoryId" aria-label="Default select example">
                <option :value="category.id" v-for="(category, index) in categories" :key="index">{{ category.category_name }}</option>

                                                   
                                                 
               </select>
            </div>


            <!-- end row -->
  



           <!-- <div class="row mb-3">
              <label for="" class="col-sm-2 col-form-label">SubCategory Name</label>
              <select class="form-select" v-model="Product.selectedSubCategoryId" aria-label="Default select example">
                <option :value="1" v-for="(subcategory, index) in subcategories" :key="index">{{ subcategory.subcategory_name }}</option>

                                                   
                                                 
               </select>
            </div>  -->
            <!-- end row -->
  

          <div class="row mb-3">
            <label for="example-email-input" class="col-sm-2 col-form-label"
              >Product Code</label
            >
            <div class="col-sm-10">
              <input
                v-model="Product.product_code"
                autocomplete="off"
                class="form-control"
                type="text"
                placeholder="code..."
                id="example-email-input"
              />
            </div>
          </div>
          <!-- end row -->

          <div class="row mb-3">
            <label for="example-email-input" class="col-sm-2 col-form-label"
              >Product qty</label
            >
            <div class="col-sm-10">
              <input
                v-model="Product.product_qty"
                autocomplete="off"
                class="form-control"
                type="text"
                placeholder="quntay..."
                id="example-email-input"
              />
            </div>
          </div>
          <!-- end row -->

          <div class="row mb-3">
            <label for="example-email-input" class="col-sm-2 col-form-label"
              >Product tags</label
            >
            <div class="col-sm-10">
              <input
                v-model="Product.product_tags"
                autocomplete="off"
                class="form-control"
                type="text"
                placeholder="tags..."
                id="example-email-input"
              />
            </div>
          </div>
          <!-- end row -->

          <div class="row mb-3">
            <label for="example-email-input" class="col-sm-2 col-form-label"
              >Product Size</label
            >
            <div class="col-sm-10">
              <input
                v-model="Product.product_size"
                autocomplete="off"
                class="form-control"
                type="text"
                placeholder="size..."
                id="example-email-input"
              />
            </div>
          </div>
          <!-- end row -->

          <div class="row mb-3">
            <label for="example-email-input" class="col-sm-2 col-form-label"
              >Product Color</label
            >
            <div class="col-sm-10">
              <input
                v-model="Product.product_color"
                autocomplete="off"
                class="form-control"
                type="text"
                placeholder="color..."
                id="example-email-input"
              />
            </div>
          </div>
          <!-- end row -->




          <div class="row mb-3">
            <label for="example-email-input" class="col-sm-2 col-form-label"
              >Product Description</label
            >
            <div class="col-sm-10">
              <textarea
                v-model="Product.short_descp"
                autocomplete="off"
                class="form-control"
                type="text"
                placeholder="description..."
                id="example-email-input"
              />
            </div>
          </div>
          <!-- end row -->

          <div class="row mb-3">
            <label for="example-email-input" class="col-sm-2 col-form-label"
              >Product Long Description</label
            >
            <div class="col-sm-10">
              <textarea
                v-model="Product.long_descp"
                autocomplete="off"
                class="form-control"
                type="text"
                placeholder="long description..."
                id="example-email-input"
              />
            </div>
          </div>
          <!-- end row -->








          <div class="row mb-3">
            <label for="example-email-input" class="col-sm-2 col-form-label"
              >Selling Price </label
            >
            <div class="col-sm-10">
              <input
                class="form-control"
                type="email"  v-model="Product.selling_price"
                placeholder="selling price"
                id="example-email-input"
              />
            </div>
          </div>
          <!-- end row -->
          <div class="row mb-3">
            <label for="example-url-input" class="col-sm-2 col-form-label">Dis_Price</label>
            <div class="col-sm-10">
              <input
                class="form-control" v-model="Product.discount_price"
                type="url"
                placeholder="discount price"
                id="example-url-input"
              />
            </div>
          </div>

          <div class="row mb-3">
            <label for="example-email-input" class="col-sm-2 col-form-label">Image</label>
            <div class="col-sm-10">
              <input type="file" class="form-control" @change="handleImageUpload" />
            </div>
          </div> 
          <!-- end row -->


          

          <button class="btn btn-info" @click.prevent="submitProduct()">Submite</button>

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
import Swal from "sweetalert2";

definePageMeta({
  middleware: "auth",
  // or middleware: 'auth'
});

export default {
  data() {
    return {
      Product: {
        selectedCategoryId:"",
        selectedBrandId:"",
        selectedSubCategoryId:"",

        product_name:"",
        brand_id:"",
       
        category_id:"",
        product_code:"",
        product_tags:"",
        product_size:"",
        product_color:"",
        selling_price:"",
        discount_price:"",
        short_descp:"",
        long_descp:"",
        status:"",
      },
            
          

            brands:{},
            categories:{},
            subcategories:{},

      isLoading: false,
      isLoadingTitle: "Loading...",
    };
  },





  mounted() {


this.getBrand();
this.getCategory();
this.getSubCategory();

},

  methods: {




// get Brand



getBrand() {

this.isLoading = true;
axios.get(`http://127.0.0.1:8000/api/brands`)
    .then(res => {


        this.isLoading = false;

        this.brands = res.data.data;
        console.log(" getBrands", this.brands);



    });



    

},




       // gete Category
       getCategory() {

this.isLoading = true;
axios.get(`http://127.0.0.1:8000/api/categories`)
    .then(res => {


        this.isLoading = false;

        this.categories = res.data.data;
        console.log(" getCategory", this.categories);



    });



    

},




       // gete SubCategory
       getSubCategory() {

this.isLoading = true;
axios.get(`http://127.0.0.1:8000/api/subcategories`)
    .then(res => {


        this.isLoading = false;

        this.subcategories = res.data.data;
        console.log(" getSubCategory", this.subcategories);



    });



    

},


// 






submitProduct() {
      this.isLoading = true;
      this.isLoadingTitle = "Saving....";

      // Check if an image file is selected
      if (!this.imageFile) {
        // Handle the case where no image file is selected
        console.error("No image file selected");
        return; // Abort the submission process
      }

      // Create FormData object to handle file upload
      let formData = new FormData();
      formData.append("image", this.imageFile); // Assuming 'this.imageFile' is the selected file
      formData.append("product_name", this.Product.product_name);
      formData.append("brand_id", this.Product.brand_id); 
       formData.append("category_id", this.Product.category_id); 
        formData.append("product_code", this.Product.product_code);  
        formData.append("product_qty", this.Product.product_qty);  
        formData.append("product_tags", this.Product.product_tags); 
         formData.append("selling_price", this.Product.selling_price); 
        formData.append("discount_price", this.Product.discount_price); // Assuming 'price' 
        formData.append("short_descp", this.Product.short_descp);
        formData.append("long_descp", this.Product.long_descp);

      // Make a POST request to upload the image and product details
      axios
        .post("http://127.0.0.1:8000/api/products", formData)
        .then((res) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product created successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          this.product_name="";
        this.brand_id="";
       
        this.category_id="";
        this.product_code="";
        this.product_tags="";
        this.product_size="";
        this.product_color="";
        this.selling_price="";
        this.discount_price="";
        this.short_descp="";
        this.long_descp="";
     
          this.isLoading = false;
          this.isLoadingTitle = "Loading....";
        })
        .catch((error) => {
          console.error("Error creating product:", error);
          // Handle error if product creation fails
        });
    },

    handleImageUpload(event) {
      // Get the selected file from the input field
      this.imageFile = event.target.files[0];
    },
  },
};
</script>

<style lang="scss" scoped></style>
