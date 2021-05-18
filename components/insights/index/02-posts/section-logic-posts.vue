<template>
  <div>
    <SectionPost
      v-for="(documentPost, index) in documentPosts"
      :key="index"
      :url="'/insights/' + documentPost.uid"
      :img="documentPost.data.image.url"
      :urlSocialMedia="'https://theclue.agency/insights/' + documentPost.uid"
    >
      <template v-slot:date>
        {{ documentPost.data.date_and_time | moment("MMMM Do YYYY, h:mm A") }}
      </template>
      <template v-slot:title>
        {{ documentPost.data.blog_title[0].text }}
      </template>
      <template v-slot:capture>
        {{ documentPost.data.text[0].text.substring(0, 350) }}. . .
      </template>
    </SectionPost>

    <!-- <SectionPost
      url="/insights/what-to-look-for-in-a-branding-agency/"
      img="/insights-imgs/what-to-look-for-in-a-branding-agency/01.jpg"
      urlSocialMedia="https://theclue.agency/insights/what-to-look-for-in-a-branding-agency/"
    >
      <template v-slot:date>
        February 12th, 2020 at 2:54 PM
      </template>
      <template v-slot:title>
        What to look for in a branding agency?
      </template>
      <template v-slot:capture>
        Branding is a big part of every business. It is no wonder that when it
        comes to choosing an innovative branding agency to help you share your
        story with the world, there are so many options. Hiring a creative
        agency is a significant investment. And the return on that investment
        won’t be instant, but it’s a step worth making for sure.
      </template>
    </SectionPost> -->
  </div>
</template>

<script>
import SectionPost from "@/components/insights/index/02-posts/section-post";
export default {
  components: {
    SectionPost
  },
  computed: {
    documentPosts() {
      return this.$store.state.blogPosts.documentPosts;
    }
  }
};
</script>

<style></style>
