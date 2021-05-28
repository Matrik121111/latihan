<template>
  <div class="home">
    <Navbar />
    <Sidebar />
    <div class="container py-3">
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Sidebar,
    Footer
  },
};
</script>