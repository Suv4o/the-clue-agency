<template>
  <div>
    <SectionIndividualPostLogic />
  </div>
</template>

<script>
import SectionIndividualPostLogic from "@/components/insights/individual/section-individual-post/section-logic-individual-post";
import Prismic from "prismic-javascript";

export default {
  layout: "theRest",
  components: {
    SectionIndividualPostLogic
  },
  async asyncData({ store }) {
    var apiEndpoint = "https://theclue.cdn.prismic.io/api/v2";
    await Prismic.getApi(apiEndpoint)
      .then(function(api) {
        return api.query("");
      })
      .then(
        function(response) {
          var documentPosts = JSON.stringify(response.results);
          store.commit("blogPosts/UPDATE_DOCUMENT_POSTS", documentPosts);
        },
        function(err) {
          console.log("Something went wrong: ", err);
        }
      );
  }
};
</script>

<style scoped></style>
