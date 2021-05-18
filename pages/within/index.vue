<template>
  <div>
    <SectionTop />
    <SectionText />

    <SectionPeople color="light" img1="/within-imgs/01.jpg" img2="/within-imgs/02.jpg">
      <template v-slot:title1>
        Aleksandar Zaceski
      </template>
      <template v-slot:text1>
        Founder & CEO
      </template>
      <template v-slot:title2>
        Blagoj Kuzevski
      </template>
      <template v-slot:text2>
        Creative Director & Project Manager
      </template>
    </SectionPeople>

    <SectionPeople color="light" img1="/within-imgs/03.jpg" img2="/within-imgs/04.jpg">
      <template v-slot:title1>
        Kiril Gagachev
      </template>
      <template v-slot:text1>
        Senior Graphic Designer
      </template>
      <template v-slot:title2>
        Dimitar Tutkovski
      </template>
      <template v-slot:text2>
        UI/UX & Graphic Designer
      </template>
    </SectionPeople>

    <SectionPeople color="light" img1="/within-imgs/05.jpg" img2="/within-imgs/06.jpg">
      <template v-slot:title1>
        Katerina Mukoska
      </template>
      <template v-slot:text1>
        Web Developer
      </template>
      <template v-slot:title2>
        Milcho Pipin
      </template>
      <template v-slot:text2>
        UI, Graphic Designer & Photographer
      </template>
    </SectionPeople>

    <SectionPeople color="light" img1="/within-imgs/07.jpg" img2="/within-imgs/08.jpg">
      <template v-slot:title1>
        Ilche Miloshevski
      </template>
      <template v-slot:text1>
        Intern Graphic Designer
      </template>
      <template v-slot:title2>
        Sofija Kostovska
      </template>
      <template v-slot:text2>
        Social Media Marketing & Content Writer
      </template>
    </SectionPeople>

    <SectionGap />
  </div>
</template>

<script>
import SectionTop from "@/components/within/index/01-top/section-top";
import SectionText from "@/components/within/index/02-text/section-text";
import SectionPeople from "@/components/within/index/03-people/section-people";
import SectionGap from "@/components/within/index/03-people/section-gap";
export default {
  layout: "theRest",
  components: {
    SectionTop,
    SectionText,
    SectionPeople,
    SectionGap
  }
};
</script>

<style></style>
