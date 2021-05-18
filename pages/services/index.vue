<template>
  <div>
    <SectionTop />
    <SectionServiceLeft url="/services/brand-identity-design" img="/services-imgs/01.jpg" color="yellow">
      <template v-slot:title>
        —Brand Identity Design
      </template>
      <template v-slot:text>
        Defining the identity is the first step towards building a brand. We help your business find the cause that speaks the customer’s language, and help you determine your purpose and positioning.
      </template>
      <template v-slot:link>
        LEARN MORE ABOUT BRAND IDENTITY DESIGN
      </template>
    </SectionServiceLeft>

    <SectionServiceRight url="/services/product-identity-design" img="/services-imgs/02.jpg" color="yellow">
      <template v-slot:title>
        —Product Identity Design
      </template>
      <template v-slot:text>
        Product identity illustrates how the product relates to the customer’s perception. Our goal is to create an appealing image of your brand that speaks to your clients.
      </template>
      <template v-slot:link>
        LEARN MORE ABOUT BRAND IDENTITY DESIGN
      </template>
    </SectionServiceRight>

    <SectionServiceLeft url="/services/brand-strategy" img="/services-imgs/03.jpg" color="yellow">
      <template v-slot:title>
        —Brand Strategy 
      </template>
      <template v-slot:text>
        When developing a brand strategy, we focus on three components: purpose, consistency and emotional impact. Determining what your brand’s objectives are will help increase effectiveness.
      </template>
      <template v-slot:link>
        LEARN MORE ABOUT BRAND STRATEGY
      </template>
    </SectionServiceLeft>

    <SectionServiceRight url="/services/branding-campaigns" img="/services-imgs/04.jpg" color="yellow">
      <template v-slot:title>
        —Branding Campaigns 
      </template>
      <template v-slot:text>
        A brand has higher value of recognition when the consumer connects certain attributes with it. We’re here to help you build an effective and consistent branding strategy that promises lasting results.
      </template>
      <template v-slot:link>
        LEARN MORE ABOUT BRANDING CAMPAIGNS
      </template>
    </SectionServiceRight>

    <SectionServiceLeft url="/services/online-brand-experience" img="/services-imgs/05.jpg" color="yellow">
      <template v-slot:title>
        —Online Brand Experience  
      </template>
      <template v-slot:text>
        Online brand experience signifies how a customer perceives the brand in the digital world. Our goal is to influence the emotions of the consumer, creating long-lasting links that help them to clearly understand your concept, and immediately link to it.
      </template>
      <template v-slot:link>
        LEARN MORE ABOUT ONLINE BRAND EXPERIENCE
      </template>
    </SectionServiceLeft>

    <SectionServiceRight url="/services/brand-photography" img="/services-imgs/06.jpg" color="yellow">
      <template v-slot:title>
        —Brand Photography 
      </template>
      <template v-slot:text>
        Branding photography is a clear statement of what your business represents. Well-crafted photos will make your company look appreciable and serious across your marketing materials.
      </template>
      <template v-slot:link>
        LEARN MORE ABOUT BRAND PHOTOGRAPHY
      </template>
    </SectionServiceRight>
  </div>
</template>

<script>
import SectionServiceLeft from "@/components/services/index/02-services/service-left";
import SectionServiceRight from "@/components/services/index/02-services/service-right";
import SectionTop from "@/components/services/index/01-top/section-top";
export default {
  layout: "theRest",
  components: {
    SectionTop,
    SectionServiceLeft,
    SectionServiceRight
  }
};
</script>

<style></style>
