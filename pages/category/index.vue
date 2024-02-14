<template>
    <br>
    <br>



    <div class="row">
        <div class="col-md-3">

        </div>


        <div class="col-md-7 mb-3">

            <!-- loader -->

            <!-- <div v-if="isLoading" class="spinner-border text-info" role="status">
                <span class="visually-hidden">Loading...</span>
            </div> -->
            <!-- end loader -->


            <div  class="card ml-4">
                <div class="card-body ml-3">
                    <h4 class="card-title"> Table</h4>


                    <div class="table-responsive">
                        <table class="table mb-0">

                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Role Name</th>
                                    <th>Permission</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row"> 12</th>
                                    <td> electronic</td>
                                    <td> img </td>

                                    <td>


                                        <nuxt-link   to="" class="btn btn-success"> <i class='far fa-edit'></i> </nuxt-link>
                                        <!-- <a href="" class="btn btn-danger">Delete</a> -->

                                        <button @click.prevent="" class="btn btn-danger"><i class="fa fa-trash"></i></button>



                                    </td>
                                </tr>


                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
        </div>
        <div class="col-md-3">

        </div>

    </div>
    <!-- end row -->
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>