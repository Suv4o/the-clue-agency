<template>
  <div>
    <SectionTop>
      <template v-slot:title>
         — Product Identity Design
      </template>
      <template v-slot:text>
        Product identity illustrates how the product relates to the customer’s perception. Our goal is to create an appealing image of your brand that speaks to your clients.
      </template>
    </SectionTop>

    <SectionContentLeft img="/services-imgs/product-identity-design/02.jpg">
      <template v-slot:title>
        Packaging Design
      </template>
      <template v-slot:text>
        Creative and quality packaging is the key to success. Delivering unique designs for taking your business to the next level is our priority.
      </template>
      <template v-slot:number>
        01
      </template>
    </SectionContentLeft>

    <SectionContentRight img="/services-imgs/product-identity-design/01.jpg">
      <template v-slot:title>
        <span class="ml-lg-5">Labels Design</span>
      </template>
      <template v-slot:text>
       <div class="ml-lg-5">Your label design should express what your brand is all about. We seek to create a perfect label design for your brand that extends beyond the screens.</div>
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
