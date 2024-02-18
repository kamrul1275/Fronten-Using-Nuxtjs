<template>
    <div class="vertical-menu">
    
    <div data-simplebar class="h-100">

        <!-- User details -->
        <div class="user-profile text-center mt-3">
            <div class="">
                <img src="assets/images/users/avatar-1.jpg" alt="" class="avatar-md rounded-circle">
            </div>
            <div class="mt-3">
                <h4 class="font-size-16 mb-1">{{ auth.getUser.name }}</h4>
                <span class="text-muted"><i class="ri-record-circle-line align-middle font-size-14 text-success"></i> Online</span>
            </div>
        </div>

        <!--- Sidemenu -->
        <div id="sidebar-menu">
            <!-- Left Menu Start -->
            <ul class="metismenu list-unstyled" id="side-menu">
                <li class="menu-title">Menu</li>

                <li>
                    <nuxt-link to="/dashboard" class="waves-effect">
                        <i class="ri-dashboard-line"></i><span class="badge rounded-pill bg-success float-end">3</span>
                        <span>Dashboard</span>
                    </nuxt-link>
                </li>

             
    
               <li>
                    <a href="" class="has-arrow waves-effect">
                        <i class="ri-account-circle-line"></i>
                        <span>User</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li> <nuxt-link to="/user/create">Create </nuxt-link> </li>
                        <li> <nuxt-link to="/user">All User</nuxt-link> </li>
                    </ul>
                </li>

                <li>
                    <a href="" class="has-arrow waves-effect">
                        <i class="ri-layout-3-line"></i>
                        <span>Role</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li> <nuxt-link to="/role/create">Create </nuxt-link> </li>
                        <li> <nuxt-link to="/role">All Role</nuxt-link> </li>
                    </ul>
                </li>



                <li>
                    <a href="" class="has-arrow waves-effect">
                        <i class="ri-mail-send-line"></i>
                        <span>Permission</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li> <nuxt-link to="/permission/create">Create permission </nuxt-link> </li>
                        <li> <nuxt-link to="/permission">All permission</nuxt-link> </li>
                    </ul>
                </li> 


<!-- 
                <li>
                    <a href="" class="has-arrow waves-effect">
                        <i class="ri-mail-send-line"></i>
                        <span>Permission</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li> <nuxt-link to="/permission/create">Create permission </nuxt-link> </li>
                        <li> <nuxt-link to="/permission">All permission</nuxt-link> </li>
                    </ul>
                </li> -->




                <li>
                    <a href="javascript: void(0);" class="waves-effect">
                        <i class="ri-eraser-fill"></i>
                        <span>Category</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><nuxt-link to="/category/create"> Create Category </nuxt-link> </li>
                        <li><nuxt-link to="/category"> All Category </nuxt-link> </li>
                      
                    </ul>
                </li>



                <li>
                    <a href="javascript: void(0);" class="waves-effect">
                        <i class="ri-share-line"></i>
                        <span>Sub Category</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><nuxt-link to="/subcategory/create" >Create SubCategory </nuxt-link> </li>
                        <li><nuxt-link to="/subcategory">All SubCategory </nuxt-link> </li>
                      
                    </ul>
                </li>


                <li>
                    <a href="javascript: void(0);" class="has-arrow waves-effect">
                        <i class="ri-table-2"></i>
                        <span>Brand</span>
                    </a>

                    <ul class="sub-menu" aria-expanded="false">
                        <li><nuxt-link to="/brand/create" >Create Brand</nuxt-link></li>
                        <li><nuxt-link to="/brand">All Brand</nuxt-link></li>
                    </ul>
                </li>





                <li>
                    <a href="" class="has-arrow waves-effect">
                        <i class="ri-mail-send-line"></i>
                        <span>Product</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li> <nuxt-link to="/product/create">Create Product </nuxt-link> </li>
                        <li> <nuxt-link to="/product">All Product</nuxt-link> </li>
                    </ul>
                </li>






                <li>
                    <a href="javascript: void(0);" class="has-arrow waves-effect">
                        <i class="ri-bar-chart-line"></i>
                        <span>Charts</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><a href="charts-apex.html">Apex Charts</a></li>
                        <li><a href="charts-chartjs.html">Chartjs Charts</a></li>
                        <li><a href="charts-flot.html">Flot Charts</a></li>
                        <li><a href="charts-knob.html">Jquery Knob Charts</a></li>
                        <li><a href="charts-sparkline.html">Sparkline Charts</a></li>
                    </ul>
                </li>


                <li>
                    <a href="javascript: void(0);" class="has-arrow waves-effect">
                        <i class="ri-brush-line"></i>
                        <span>Icons</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><a href="icons-remix.html">Remix Icons</a></li>
                        <li><a href="icons-materialdesign.html">Material Design</a></li>
                        <li><a href="icons-dripicons.html">Dripicons</a></li>
                        <li><a href="icons-fontawesome.html">Font awesome 5</a></li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow waves-effect">
                        <i class="ri-map-pin-line"></i>
                        <span>Maps</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><a href="maps-google.html">Google Maps</a></li>
                        <li><a href="maps-vector.html">Vector Maps</a></li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow waves-effect">
                        <i class="ri-share-line"></i>
                        <span>Multi Level</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="true">
                        <li><a href="javascript: void(0);">Level 1.1</a></li>
                        <li><a href="javascript: void(0);" class="has-arrow">Level 1.2</a>
                            <ul class="sub-menu" aria-expanded="true">
                                <li><a href="javascript: void(0);">Level 2.1</a></li>
                                <li><a href="javascript: void(0);">Level 2.2</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>

            </ul>
        </div>
        <!-- Sidebar -->
    </div>
</div>
</template>

<script setup>

const token = useTokenStore();
const auth = useAuthStore();

</script>

<style>


#sidebar-menu{

    height: 71vh;
    overflow: auto;
    /* border: 1px solid; */

}



</style>