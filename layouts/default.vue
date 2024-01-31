<template>
  
          
  
      <body data-topbar="dark">
      
      <!-- <body data-layout="horizontal" data-topbar="dark"> -->
  
          <!-- Begin page -->
          <div id="layout-wrapper">
  
          <Header></Header>
  
              <!-- ========== Left Sidebar Start ========== -->
              <div class="vertical-menu">
  
                  <div data-simplebar class="h-100">
  
                      <!-- User details -->
                      <div class="user-profile text-center mt-3">
                          <div class="">
                              <img src="assets/images/users/avatar-1.jpg" alt="" class="avatar-md rounded-circle">
                          </div>
                          <div class="mt-3">
                              <h4 class="font-size-16 mb-1">Julia Hudda</h4>
                              <span class="text-muted"><i class="ri-record-circle-line align-middle font-size-14 text-success"></i> Online</span>
                          </div>
                      </div>
  
                      <!--- Sidemenu -->
                      


<Saidbar></Saidbar>





                      <!-- Sidebar -->
                  </div>
              </div>
              <!-- Left Sidebar End -->
  
              
  
              <!-- ============================================================== -->
              <!-- Start right Content here -->
              <!-- ============================================================== -->
            


<slot/>



              <!-- end main content-->
  <Footer></Footer>
          </div>
          <!-- END layout-wrapper -->
  
          <!-- Right Sidebar -->
          <div class="right-bar">
              <div data-simplebar class="h-100">
                  <div class="rightbar-title d-flex align-items-center px-3 py-4">
              
                      <h5 class="m-0 me-2">Settings</h5>
  
                      <a href="javascript:void(0);" class="right-bar-toggle ms-auto">
                          <i class="mdi mdi-close noti-icon"></i>
                      </a>
                  </div>
  
                  <!-- Settings -->
                  <hr class="mt-0" />
                  <h6 class="text-center mb-0">Choose Layouts</h6>
  
                  <div class="p-4">
                      <div class="mb-2">
                          <img src="assets/images/layouts/layout-1.jpg" class="img-fluid img-thumbnail" alt="layout-1">
                      </div>
  
                      <div class="form-check form-switch mb-3">
                          <input class="form-check-input theme-choice" type="checkbox" id="light-mode-switch" checked>
                          <label class="form-check-label" for="light-mode-switch">Light Mode</label>
                      </div>
      
                      <div class="mb-2">
                          <img src="assets/images/layouts/layout-2.jpg" class="img-fluid img-thumbnail" alt="layout-2">
                      </div>
                      <div class="form-check form-switch mb-3">
                          <input class="form-check-input theme-choice" type="checkbox" id="dark-mode-switch" data-bsStyle="assets/css/bootstrap-dark.min.css" data-appStyle="assets/css/app-dark.min.css">
                          <label class="form-check-label" for="dark-mode-switch">Dark Mode</label>
                      </div>
      
                      <div class="mb-2">
                          <img src="assets/images/layouts/layout-3.jpg" class="img-fluid img-thumbnail" alt="layout-3">
                      </div>
                      <div class="form-check form-switch mb-5">
                          <input class="form-check-input theme-choice" type="checkbox" id="rtl-mode-switch" data-appStyle="assets/css/app-rtl.min.css">
                          <label class="form-check-label" for="rtl-mode-switch">RTL Mode</label>
                      </div>
  
              
                  </div>
  
              </div> <!-- end slimscroll-menu-->
          </div>
          <!-- /Right-bar -->
  
          <!-- Right bar overlay-->
          <div class="rightbar-overlay"></div>
  
       
      </body>

  </template>
  
