<template>
  <div>
    <SectionPost :img="getTheImageByUid" :title="getTheTitleByUid">
      <template v-slot:title>
        {{ getTheTitleByUid }}
      </template>
      <template v-slot:text>
        <div v-html="getHTMLtextByUid"></div>
      </template>
      <template v-slot:date>
        {{ getTheDateByUid | moment("MMMM Do YYYY, h:mm A") }}
      </template>
    </SectionPost>
  </div>
</template>

<script>
import SectionPost from "@/components/insights/individual/section-individual-post/section-post";

export default {
  components: {
    SectionPost
  },
  head() {
    return {
      title: this.getTheTitleByUid,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: this.getTheTextDiscriptionByUid
        }
      ]
    };
  },
  computed: {
    documentPosts() {
      return this.$store.state.blogPosts.documentPosts;
    },
    getHTMLtextByUid() {
      let self = this;

      var thePost;

      if (self.documentPosts == "") {
      } else {
        self.documentPosts.forEach(element => {
          if (element.uid === self.$route.params.post) {
            thePost = element;
          }
        });

        var PrismicDOM = require("prismic-dom");

        var linkResolver = function(doc) {
          // Pretty URLs for known types
          if (doc.type === "blog_posts") return "/insights/" + doc.uid;

          return "/";
        };

        var html = PrismicDOM.RichText.asHtml(thePost.data.text, linkResolver);

        return html;
      }
    },
    getTheDocumentByUid() {
      let self = this;

      var thePost;

      if (self.documentPosts == "") {
        thePost = { data: { text: [{ text: "" }] } };
        return thePost;
      } else {
        self.documentPosts.forEach(element => {
          if (element.uid === self.$route.params.post) {
            thePost = element;
          }
        });

        return thePost;
      }
    },
    getTheImageByUid() {
      let self = this;

      var thePost;

      if (self.documentPosts == "") {
        thePost = { data: { img: { url: "" } } };
        return thePost;
      } else {
        self.documentPosts.forEach(element => {
          if (element.uid === self.$route.params.post) {
            thePost = element;
          }
        });

        return thePost.data.image.url;
      }
    },
    getTheTitleByUid() {
      let self = this;

      var thePost;

      if (self.documentPosts == "") {
        thePost = { data: { blog_title: [{ text: "" }] } };
        return thePost;
      } else {
        self.documentPosts.forEach(element => {
          if (element.uid === self.$route.params.post) {
            thePost = element;
          }
        });

        return thePost.data.blog_title[0].text;
      }
    },
    getTheTextDiscriptionByUid() {
      let self = this;

      var thePost;

      if (self.documentPosts == "") {
        thePost = { data: { text: [{ text: "" }] } };
        return thePost;
      } else {
        self.documentPosts.forEach(element => {
          if (element.uid === self.$route.params.post) {
            thePost = element;
          }
        });

        return thePost.data.text[0].text.substring(0, 400);
      }
    },
    getTheDateByUid() {
      let self = this;

      var thePost;

      if (self.documentPosts == "") {
        thePost = { data };
        return thePost;
      } else {
        self.documentPosts.forEach(element => {
          if (element.uid === self.$route.params.post) {
            thePost = element;
          }
        });

        return thePost.data.date_and_time;
      }
    }
  }
};
</script>

<style scoped></style>
