<template>
  <div>
    <SectionTop>
      <template v-slot:title>
         — Brand Photography
      </template>
      <template v-slot:text>
          Defining the identity is the first step towards building
          a brand. We help businesses find their cause that
          speaks the customer’s language, also help them
          determine their purpose and positioning.
      </template>
    </SectionTop>

    <SectionContentLeft img="/services-imgs/brand-photography/01.jpg">
      <template v-slot:title>
        <span class="w3-text-white">Commercial Photography</span>
      </template>
      <template v-slot:text>
        <span class="w3-text-white">A commercial photograph can tell a story or capture an emotion. It will visually tell your brand’s story. With consistency in your photos, you’ll set an attitude you want to present to your customers.</span>
      </template>
      <template v-slot:number>
        01
      </template>
    </SectionContentLeft>

    <SectionContentRight img="/services-imgs/brand-photography/02.jpg">
      <template v-slot:title>
        <span class="w3-text-white">Corporate Photography</span>
      </template>
      <template v-slot:text>
        <span class="w3-text-white">This type of photography will say a lot about your brand’s image. Whether it is a portrait or team photo, authentic and dynamic shots will elevate your business.</span>
      </template>
      <template v-slot:number>
        02
      </template>
    </SectionContentRight>

    <SectionContentLeft img="/services-imgs/brand-photography/03.jpg">
      <template v-slot:title>
        <span class="w3-text-white">Corporate Event Photography</span>
      </template>
      <template v-slot:text>
        <span class="w3-text-white">The most captivating images are those who make the viewer feel like they were part of the event. These photos will be an extension of your branding and will make your business significant and influential.</span>
      </template>
      <template v-slot:number>
        03
      </template>
     </SectionContentLeft>

    <SectionContentRight img="/services-imgs/brand-photography/04.jpg">
      <template v-slot:title>
        <span class="w3-text-white">Stock Photography Curation</span>
      </template>
      <template v-slot:text>
        <span class="w3-text-white">Carefully and exclusively chosen collection of great content that will point out your brand’s story, and will surely leave a notable mark in your client’s visual perception.</span>
      </template>
      <template v-slot:number>
        04
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
