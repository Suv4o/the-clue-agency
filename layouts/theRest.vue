<template>
  <div>
    <header>
      <NavBarLight />
    </header>

    <main>
      <nuxt />
    </main>

    <footer>
      <footerTheRest />
    </footer>
  </div>
</template>

<script>
import NavBarLight from "@/components/header/navBar/navBarLight";
import footerTheRest from "@/components/footer/footerDefault/footerDefault";
import Prismic from "prismic-javascript";
export default {
  components: {
    NavBarLight,
    footerTheRest
  },
  beforeCreate() {
    // let self = this;
    // var apiEndpoint = "https://theclue.cdn.prismic.io/api/v2";
    // Prismic.getApi(apiEndpoint)
    //   .then(function(api) {
    //     return api.query("");
    //   })
    //   .then(
    //     function(response) {
    //       //   console.log("Documents: ", response.results);
    //       var documentPosts = JSON.stringify(response.results);
    //       self.$store.commit("blogPosts/UPDATE_DOCUMENT_POSTS", documentPosts);
    //     },
    //     function(err) {
    //       console.log("Something went wrong: ", err);
    //     }
    //   );
  }
};
</script>

<style></style>
