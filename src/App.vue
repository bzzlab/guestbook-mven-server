<template>
  <div id="app">
    <link rel="shortcut icon" type="image/png" href="assets/favicon.png"/>
    <Navbar />
    <main role="main" class="container">
      <div class="starter-template">
        <router-view />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
  import Navbar from "./components/Navbar.vue";
  import Footer from "./components/Footer.vue";
  export default {
    name: 'app',
    components: {
      Navbar,
      Footer
    },
    /*  important statement in order to keep and show the logged in user
        even if the page is refreshed. Prerequisite is a stored token in
        the local storage.
    */
    beforeCreate: function(){
      this.$store.dispatch('authenticate');
    }
  }
</script>
