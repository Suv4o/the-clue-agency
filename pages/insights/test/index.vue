<template>
  <div>
    <SectionIndividualPost />
  </div>
</template>

<script>
import SectionIndividualPost from "@/components/insights/individual/what-to-look-for-in-a-branding-agency";
export default {
  head() {
    return {
      title: "What to look for in a branding agency?",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Branding is a big part of every business. It is no wonder that when it comes to choosing an innovative branding agency to help you share your story with the world, there are so many options. Hiring a creative agency is a significant investment. And the return on that investment won’t be instant, but it’s a step worth making for sure."
        }
      ]
    };
  },
  layout: "theRest",
  components: {
    SectionIndividualPost
  }
};
</script>

<style scoped></style>
