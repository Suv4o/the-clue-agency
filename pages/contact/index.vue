<template>
  <div>
    <SectionTop/>
    <NuxtChild />
  </div>
</template>

<script>
import SectionTop from "@/components/contact/01-top/section-top";
export default {
  layout: "theRest",
  components: {
    SectionTop
  },
  mounted() {
    this.$router.push("/contact/new-project");
  }
};
</script>

<style></style>
