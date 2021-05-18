<template>
  <div>
    <SectionTop />
    <SectionOne />
    <SectionGrow />
    <SectionStrategy />
  </div>
</template>

<script>
import SectionTop from "@/components/home/01-top/section-top";
import SectionOne from "@/components/home/02-one/section-one";
import SectionGrow from "@/components/home/03-grow/section-grow";
import SectionStrategy from "@/components/home/04-strategy/section-strategy";
export default {
  components: {
    SectionTop,
    SectionOne,
    SectionGrow,
    SectionStrategy
  }
};
</script>

<style></style>
