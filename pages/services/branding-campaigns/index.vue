<template>
  <div>
    <SectionTop>
      <template v-slot:title>
         — Branding Campaigns
      </template>
      <template v-slot:text>
        A brand has higher value of recognition when the consumer connects certain attributes with it. We’re here to help you build an effective and consistent branding strategy that promises lasting results.
      </template>
    </SectionTop>

    <SectionContentLeft img="/services-imgs/branding-campaigns/01.jpg">
      <template v-slot:title>
        Brand Awareness Strategy
      </template>
      <template v-slot:text>
        Establishing brand awareness is valuable when you want to promote your company,especially in the early stages of its growth. With our innovative strategies, our goal is to increase brand awareness and help your business thrive.
      </template>
      <template v-slot:number>
        01
      </template>
    </SectionContentLeft>

    <SectionContentRight img="/services-imgs/branding-campaigns/02.jpg">
      <template v-slot:title>
        Branded Content
      </template>
      <template v-slot:text>
        The most important thing we want to achieve is to connect with your audience and try to impact them in creative ways, and that includes driving real engagement through quality content.
      </template>
      <template v-slot:number>
        02
      </template>
    </SectionContentRight>

    <SectionContentLeft img="/services-imgs/branding-campaigns/03.jpg">
      <template v-slot:title>
        Promotional Design
      </template>
      <template v-slot:text>
        Promotional design can range from brochures to flyers and posters. Its purpose is to attract new customers and build new opportunities for your business. Having a promotional design means that your message can be seen by anyone.
      </template>
      <template v-slot:number>
        03
      </template>
     </SectionContentLeft>

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
