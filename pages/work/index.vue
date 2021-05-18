<template>
  <div>
    <SectionTop />
    <SectionBrands url1="/work/mr-antonio" url2="/work/belini" color="dark" img1="/work-imgs/MrAntonio/01-small.jpg" img2="/work-imgs/Belini/01-small.jpg">
      <template v-slot:title1>
        Mr. Antonio
      </template>
      <template v-slot:text1>
        Brand Strategy, </br>
        Brand Packaging
      </template>
      <template v-slot:title2>
        Belini
      </template>
      <template v-slot:text2>
        Brand Identity
      </template>
    </SectionBrands>

    <SectionBrands url1="/work/dvino" url2="/work/quatro" color="light" img1="/work-imgs/dvino/01-small.jpg" img2="/work-imgs/Quatro/01-small.jpg">
      <template v-slot:title1>
        Dvino
      </template>
      <template v-slot:text1>
        Brand Identity, </br>
        Brand Packaging
      </template>
      <template v-slot:title2>
        Quatro
      </template>
      <template v-slot:text2>
        Brand Identity
      </template>
    </SectionBrands>

    <SectionBrands url1="/work/nj-lawyers" url2="/work/aussie-scout" color="dark" img1="/work-imgs/NJLawyers/01-small.jpg" img2="/work-imgs/AussieScout/01-small.jpg">
      <template v-slot:title1>
        NJ Lawyers
      </template>
      <template v-slot:text1>
      Brand Identity, </br>
      Online Brand Experience
      </template>
      <template v-slot:title2>
        Aussie Scout
      </template>
      <template v-slot:text2>
      Brand Identity, </br>
      Online Brand Experience
      </template>
    </SectionBrands>

    <SectionBrands url1="/work/brand-and" url2="/work/aftr" color="light" img1="/work-imgs/BrandAnd/01-small.jpg" img2="/work-imgs/Aftr/01-small.jpg">
      <template v-slot:title1>
        Brand&
      </template>
      <template v-slot:text1>
      Brand Identity, </br>
      Online Brand Experience
      </template>
      <template v-slot:title2>
        Aftr
      </template>
      <template v-slot:text2>
        Brand Identity
      </template>
    </SectionBrands>

    <SectionBrands url1="/work/grain-of-salt" url2="/work/bamio" color="dark" img1="/work-imgs/GrainOfSalt/01-small.jpg" img2="/work-imgs/Bamio/01-small.jpg">
      <template v-slot:title1>
        Grain of Salt
      </template>
      <template v-slot:text1>
        Brand Identity
      </template>
      <template v-slot:title2>
        Bamio
      </template>
      <template v-slot:text2>
        Brand Identity
      </template>
    </SectionBrands>

    <SectionBrands url1="/work/tiny-timber" url2="/work/avva" color="light" img1="/work-imgs/TinyTimber/01-small.jpg" img2="/work-imgs/Avva/01-small.jpg">
      <template v-slot:title1>
        Tiny Timber
      </template>
      <template v-slot:text1>
        Brand Identity
      </template>
      <template v-slot:title2>
        Avva
      </template>
      <template v-slot:text2>
        Brand Identity
      </template>
    </SectionBrands>

    <SectionBrands url1="/work/pizzetta" url2="/work/full-stop" color="dark" img1="/work-imgs/Pizzetta/01-small.jpg" img2="/work-imgs/FullStop/01-small.jpg">
      <template v-slot:title1>
        Pizzetta
      </template>
      <template v-slot:text1>
        Brand Identity
      </template>
      <template v-slot:title2>
        Full Stop
      </template>
      <template v-slot:text2>
        Brand Identity
      </template>
    </SectionBrands>
  </div>
</template>

<script>
import SectionTop from "@/components/work/index/01-top/section-top";
import SectionBrands from "@/components/work/index/02-brands/brands";
export default {
  layout: "theRest",
  components: {
    SectionTop,
    SectionBrands
  }
};
</script>

<style></style>
