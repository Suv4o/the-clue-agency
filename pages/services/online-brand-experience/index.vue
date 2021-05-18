<template>
  <div>
    <SectionTop>
      <template v-slot:title>
         — Online Brand Experience
      </template>
      <template v-slot:text>
        Online brand experience signifies how a customer perceives the brand in the digital world. Our goal is to influence the emotions of the consumer, creating long-lasting links that help them to clearly understand your concept, and immediately link to it.
      </template>
    </SectionTop>

    <SectionContentLeft img="/services-imgs/online-brand-experience/01.jpg">
      <template v-slot:title>
        <span class="w3-text-white">Website Design and Development</span>
      </template>
      <template v-slot:text>
        <span class="w3-text-white">Building a system that is fast, secure and easy to navigate is a must. Our approach is simple, delivering effectiveness and bring your customers closer to your business.</span>
      </template>
      <template v-slot:number>
        01
      </template>
    </SectionContentLeft>

    <SectionContentRight img="/services-imgs/online-brand-experience/02.jpg">
      <template v-slot:title>
        <span class="w3-text-white">Website Maintenance</span>
      </template>
      <template v-slot:text>
        <span class="w3-text-white">The website is the window of your business. Imagine the website as something that needs to be checked and oiled often. With regular updates and testing also fixing and improvements your website can attract new customers and lead you towards growth.</span>
      </template>
      <template v-slot:number>
        02
      </template>
    </SectionContentRight>

    <SectionAllServicesLink />


  </div>
</template>

<script>
import SectionTop from "@/components/services/individual-components/section-top";
import SectionContentLeft from "@/components/services/individual-components/section-content-left";
import SectionContentRight from "@/components/services/individual-components/section-content-right";
import SectionAllServicesLink from "@/components/services/individual-components/section-back-to-all-services";
export default {
  layout: "theRest",
  components: {
    SectionTop,
    SectionContentLeft,
    SectionContentRight,
    SectionAllServicesLink
  }
};
</script>

<style scoped></style>
