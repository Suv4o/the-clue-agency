<template>
  <div>
    <SectionTop />

    <SectionLogicPost />
  </div>
</template>

<script>
import SectionTop from "@/components/insights/index/01-top/section-top";
import SectionLogicPost from "@/components/insights/index/02-posts/section-logic-posts";
import Prismic from "prismic-javascript";
export default {
  layout: "theRest",
  components: {
    SectionTop,
    SectionLogicPost
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

<style></style>
