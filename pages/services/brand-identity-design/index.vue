<template>
  <div>
    <SectionTop>
      <template v-slot:title>
         — Brand Identity Design
      </template>
      <template v-slot:text>
        Defining the identity is the first step towards building a brand. We help businesses find their cause that speaks the customer’s language, also help them determine their purpose and positioning.
      </template>
    </SectionTop>

    <SectionContentLeft img="/services-imgs/brand-identity-design/01.jpg">
      <template v-slot:title>
        Logo Design and Branding Elements
      </template>
      <template v-slot:text>
        Designing a great logo involves distilling a brand’s identity down to its essence in order to create a visual statement that sets the tone of the brand. The logo should remind your customers why the brand matters to them.
      </template>
      <template v-slot:number>
        01
      </template>
    </SectionContentLeft>

    <SectionContentRight img="/services-imgs/brand-identity-design/02.jpg">
      <template v-slot:title>
        Stationery Set
      </template>
      <template v-slot:text>
        The spirit of a brand can be reflected in multiple forms and the stationary set is one of the most important. We express your brand through business cards, letterheads and envelope designs.
      </template>
      <template v-slot:number>
        02
      </template>
    </SectionContentRight>

    <SectionContentLeft img="/services-imgs/brand-identity-design/03.jpg">
      <template v-slot:title>
        Brand Identity Management
      </template>
      <template v-slot:text>
        Brand identity management is the process of managing and being in control of all relevant visual features. That means ensuring that employees have access to the correct logos, fonts, and images with the style guide document you get in the package and constant updates in the library.
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
