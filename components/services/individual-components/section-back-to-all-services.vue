<template>
    <section class="background-color" v-view="isVisibleSection">
        <div class="d-flex justify-content-center padding-top-bottom">
            <p class="animated pulseHover"><nuxt-link to="/services" class="text-link the-clue-underline-text-gray-yellow" :class="classTextFadeInOut">back to all services</nuxt-link></p>
        </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      classTextFadeInOut: "animated fast fadeOut"
    };
  },
  methods: {
    isVisibleSection(e) {
      // Image
      if (e.percentTop < 0.2) {
        // this.classTextFadeInOut = "animated fadeOut";
      }
      if (e.percentTop > 0.2 && e.percentTop < 0.9) {
        this.classTextFadeInOut = "animated slow fadeInLeftModified-10";
      }

      if (e.percentTop > 1) {
        // this.classTextFadeInOut = "animated fadeOut";
      }
    }
  }
};
</script>

<style scoped>
.background-color {
  background-color: #cbcbcb;
}

.text-link {
  font-family: Montserrat;
  font-size: 42px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.67;
  letter-spacing: 1.05px;
  text-align: left;
  color: #000000;
}

.padding-top-bottom {
  padding-top: 100px;
  padding-bottom: 100px;
}

@media only screen and (max-width: 1335px) {
  /* - 20% */
  .text-link {
    font-family: Montserrat;
    font-size: 32px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.67;
    letter-spacing: 1.05px;
    text-align: left;
    color: #000000;
  }

  .padding-top-bottom {
    padding-top: 80px;
    padding-bottom: 80px;
  }
}

@media only screen and (max-width: 1100px) {
  /* 20% */

  .text-link {
    font-family: Montserrat;
    font-size: 26px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.67;
    letter-spacing: 1.05px;
    text-align: left;
    color: #000000;
  }
  .padding-top-bottom {
    padding-top: 64px;
    padding-bottom: 64px;
  }
}

@media only screen and (max-width: 685px) {
  /* - 20% */

  .text-link {
    font-family: Montserrat;
    font-size: 21px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.67;
    letter-spacing: 1.05px;
    text-align: left;
    color: #000000;
  }

  .padding-top-bottom {
    padding-top: 51px;
    padding-bottom: 51px;
  }
}

@media only screen and (max-width: 560px) {
  /* - 20% */

  .text-link {
    font-family: Montserrat;
    font-size: 17px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.67;
    letter-spacing: 1.05px;
    text-align: left;
    color: #000000;
  }

  .padding-top-bottom {
    padding-top: 41px;
    padding-bottom: 41px;
  }
}
</style>