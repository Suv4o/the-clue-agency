<template>
  <div>
    <SectionTop>
      <template v-slot:title>
         — Brand Strategy
      </template>
      <template v-slot:text>
        When developing a brand strategy, we focus on three components: purpose, consistency and emotional impact. Determining what your brand’s objectives are will help increase effectiveness.
      </template>
    </SectionTop>

    <SectionContentLeft img="/services-imgs/brand-strategy/01.jpg">
      <template v-slot:title>
        Defining the Brand Purpose
      </template>
      <template v-slot:text>
        A strong brand purpose sets how a company intends to present themselves on the market. If you want to position your brand in the target consumer’s mind , you need a mission and vision your audience truly connects to.
      </template>
      <template v-slot:number>
        01
      </template>
    </SectionContentLeft>

    <SectionContentRight img="/services-imgs/brand-strategy/02.jpg">
      <template v-slot:title>
        Defining the Brand Personality
      </template>
      <template v-slot:text>
        Every brand has a personality. It’s the voice that allows you to connect with your prospective clients. We provide you with step by step voice and tone guide that you want your brand to speak, and how you should obtain it.
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

<style scoped>
</style>
