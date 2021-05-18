<template>
  <section v-view="isVisibleGrow" id="sectionTop">
    <div class="w3-display-container">

      <div class="w3-white the-clue-title-section-size">
        <p
          class="moving-text the-clue-absolute"
          :class="classMovingText"
          :style="scrollObjectMovingText"
        >
          INSIGHTS
        </p>
      </div>

      <div class="d-flex justify-content-center flex-size padding-top-bottom post-position">
          <div>
            <div class="blog-title img-size padding-top-bottom-title" :class="classTitle">What to look for in a branding agency?</div>
            <img v-view="isVisibleImgTitle" class="img-size" src="/insights-imgs/what-to-look-for-in-a-branding-agency/01.jpg" :class="classImage" alt="blog post image" />
            <div v-view="isVisibleImgText" class="capture-text margin-top-bottom-capture" :class="classText">
            Branding is a big part of every business. It is no wonder that when it comes to choosing an innovative branding agency to help you share your story with the world, there are so many options. Hiring a creative agency is a significant investment. And the return on that investment won’t be instant, but it’s a step worth making for sure. </br>
            If you decide to invest in your company’s branding, you need to consider that it’s a specialized field that can be difficult to navigate. Choosing the right branding agency should not only solve an immediate business need but can also change the way you look at your company. There are a variety of things to look for when selecting a branding agency, but underneath we highlight some of the most relevant. </br></br>

            <strong>1. Start with the visuals</strong> </br></br>
            While your brand strategy should be broader than a simple logo, it’s clear that your brand’s visuals need to be bright and distinctive. Or to put things another way, choosing a branding company with good artistic instincts isn’t enough, but you should find a designer who’ll give you the look you want to achieve. </br></br>

            <strong>2. Choose stability</strong> </br></br>
            When a brand evolves beautifully, it’s generally because there’s an alignment of three important elements: the company’s personality and its executives, the creative team’s attitude, and the target market’s understanding. If any of these are in conflict brands tend to go off track very quickly. </br></br>

            <strong>3. Regular communication</strong> </br></br>
            Communication can come in the form of updates, reports or check-ins, but should be constructive and positive at all times. Communication with the client should also include a thorough explanation of long-term goals, short-term objectives and a description of how their team aims to accomplish them. You should connect so well with the branding agency you choose that they feel like an extension of your team. </br></br>

            <strong>4. Well defined process</strong> </br></br>
            Successful branding strategies rely on tested, evidence-based methods for generating persuasive content and authenticating the mark. Without a well-defined branding process, the agency you hire maybe won’t be capable of bringing the results you need. Find a creative company that has a way of a specifically guided process of working, and guide you through it. </br></br>

            <strong>5. Successful portfolio</strong> </br></br>
            A branding agency should be more than willing to demonstrate its success and grow its expertise. Search for measurable outcomes such as data metrics, insights, and studies. Case studies also provide insight into the strategies that the department values the most, mainly based on the calculated metrics. Can the branding agency meet your goals? This will help you determine what their past results have been like, as a whole, and will also give you insight into what the agency finds most important. </br></br>

            <strong>6. Long term goals</strong> </br></br>
            It’s important to find a branding agency who understands your business ‘ complexities and can convert them into a message that separates you from your competition, and that’s what branding is about. Consider whether the agency will be able to work with you in collaboration beyond the current project’s short-term goal. Could they help with your daily marketing activities, e.g. by monitoring your social media presence? Do they have a range of services that could benefit your company as the business grows? How about their communication – is it easy to get on a call with them when you need to? </br></br>

            </div>
            <div class="w3-border-bottom w3-border-black img-size" :class="classText"></div>
            <div class="d-flex justify-content-between img-size" :class="classText">
              <div class="padding-top-bottom-date-share blog-post-date">February 12th, 2020 at 2:54 PM</div>
              <div class="padding-top-bottom-date-share blog-post-date">
                share: <a :href="'https://www.facebook.com/sharer.php?u=' + currentUrl" target="_blank" class="the-clue-text-black the-clue-hover-underline-text-yellow">Facebook</a> — 
                <a :href="'https://twitter.com/intent/tweet?url=' + currentUrl" target="_blank" class="the-clue-text-black the-clue-hover-underline-text-yellow">Twitter</a> — 
                <a :href="'https://www.linkedin.com/shareArticle?mini=true&url=' + currentUrl" target="_blank" class="the-clue-text-black the-clue-hover-underline-text-yellow">Linkedin</a>
              </div>
            </div>
            <div v-view="isVisibleSeeAll" class="d-flex justify-content-center margin-top-bottom-see-all-insights img-size" :class="classSeeAll">
                <nuxt-link to="/insights" class="the-clue-underline-text-gray-yellow w3-text-black animated pulseHover"><div class="see-all-insights">see all insights</div></nuxt-link>
            </div>

            <!-- <div v-view="isVisibleSeeMore" class="d-flex justify-content-center img-size" :class="classMoreInsights">
                <div class="more-insights">MORE INSIGHTS</div>
            </div> -->

            <!-- <SectionRelatedPosts url="/insights/post1" img="/insights-imgs/test-insights.jpg">
                <template v-slot:title>
                    Building trust, one of the key factors.
                </template>
                <template v-slot:capture>
                    Customer engagement is about inspiring your customers to interact with your brand and willingly take part in the experiences you’re creating for them.
                </template>
            </SectionRelatedPosts>
            <SectionRelatedPosts url="/insights/post2" img="/insights-imgs/test-insights.jpg">
                <template v-slot:title>
                    Building trust, one of the key factors.
                </template>
                <template v-slot:capture>
                    Customer engagement is about inspiring your customers to interact with your brand and willingly take part in the experiences you’re creating for them.
                </template>
            </SectionRelatedPosts>
            <SectionRelatedPosts url="/insights/post2" img="/insights-imgs/test-insights.jpg">
                <template v-slot:title>
                    Building trust, one of the key factors.
                </template>
                <template v-slot:capture>
                    Customer engagement is about inspiring your customers to interact with your brand and willingly take part in the experiences you’re creating for them.
                </template>
            </SectionRelatedPosts> -->
          </div>
      </div>

      </p>
    </div>
  </section>
</template>

<script>
import SectionRelatedPosts from "@/components/insights/individual/section-related-posts";
export default {
  components: {
    SectionRelatedPosts
  },
  data() {
    return {
      classTitle: "animated slow delay-1s fadeInLeft",
      classImage: "animated slow fadeInLeft",
      classText: "animated fadeIn",
      classSeeAll: "fadeInLeft",
      classMoreInsights: "fadeInRight",
      classMovingText: "",
      classTextAnimation: "animated bounceInRight",
      scrollObjectMovingText: {
        top: "5%",
        left: "0%"
      },
      scrollObjectMovingTextValue: {
        top: 5,
        left: 0
      },
      scrollPercentTop: "",
      scrollSubstractor: true,
      scrollSubstractorNumber: "",
      currentUrl: ""
    };
  },
  created() {
    if (process.client) {
      window.addEventListener("scroll", this.onScroll);
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener("scroll", this.onScroll);
    }
  },
  mounted() {
    this.currentUrl = window.location.href;
  },
  methods: {
    isVisibleSeeMore(e) {
      if (e.percentTop < 0.1) {
        this.classMoreInsights = "animated fadeOutLeft";
      }
      if (e.percentTop > 0.1 && e.percentTop < 0.9) {
        this.classMoreInsights = "animated fadeInRight";
      }

      if (e.percentTop > 1) {
        this.classMoreInsights = "animated fadeOutLeft";
      }
    },

    isVisibleSeeAll(e) {
      if (e.percentTop < 0.1) {
        this.classSeeAll = "animated fadeOutRight";
      }
      if (e.percentTop > 0.1 && e.percentTop < 0.9) {
        this.classSeeAll = "animated fadeInLeft";
      }

      if (e.percentTop > 1) {
        this.classSeeAll = "animated fadeOutRight";
      }
    },

    isVisibleImgTitle(e) {
      if (e.percentTop < 0.05) {
        this.classTitle = "animated slow fadeOutLeft";
        this.classImage = "animated slow fadeOutLeft";
      }
      if (e.percentTop > 0.05 && e.percentTop < 0.9) {
        this.classTitle = "animated slow delay-1s fadeInLeft";
        this.classImage = "animated slow fadeInLeft";
      }

      if (e.percentTop > 1) {
        this.classTitle = "animated slow fadeOutLeft";
        this.classImage = "animated slow fadeOutLeft";
      }
    },
    isVisibleImgText(e) {
      if (e.percentTop < 0.1) {
        this.classText = "animated fadeOut";
      }
      if (e.percentTop > 0.1 && e.percentTop < 0.9) {
        this.classText = "animated fadeIn";
      }

      if (e.percentTop > 1) {
        this.classText = "animated fadeOut";
      }
    },
    isVisibleGrow(e) {
      this.scrollPercentTop = e.percentTop;
      if (e.percentTop < 0.2) {
        this.classTextAnimation = "animated bounceOutRight";
      }
      if (e.percentTop > 0.2) {
        this.classTextAnimation = "animated bounceInRight";
      }
    },
    onScroll() {
      var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;

      var div = document.getElementById("sectionTop");
      var rect = div.getBoundingClientRect();
      var yTop = rect.top;
      var yBottom = rect.bottom;

      if (this.scrollPercentTop < 1 && this.scrollPercentTop > 0) {
        if (this.scrollSubstractor) {
          this.scrollSubstractorNumber = scrolled;
          this.scrollSubstractor = false;
        }
        var increaseRate = scrolled - this.scrollSubstractorNumber;

        this.scrollObjectMovingTextValue = 0 + increaseRate * 2;
        this.scrollObjectMovingText.left =
          this.scrollObjectMovingTextValue + "%";
      }
    }
  }
};
</script>

<style scoped>
.moving-text {
  width: 966px;
  height: 217px;
  font-family: Montserrat;
  font-size: 300px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.27;
  letter-spacing: -18px;
  text-align: right;
  color: #e5e5e5;
}

.the-clue-title-section-size {
  height: 200vw;
}

.flex-size {
  width: 100%;
}

.post-position {
  position: absolute;
  top: 6vw;
  left: 0vw;
}

.padding-top-bottom {
  padding-top: 5vw;
  padding-bottom: 5vw;
}

.img-size {
  width: 60vw;
}

.blog-title {
  width: 54vw;
  font-family: Montserrat;
  font-size: 2.26vw;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.11;
  letter-spacing: normal;
  text-align: justify;
  color: #161616;
}

.padding-top-bottom-title {
  padding-top: 0vw;
  padding-bottom: 1vw;
}

.capture-text {
  width: 60vw;
  font-family: Montserrat;
  font-size: 1.37vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.65;
  letter-spacing: normal;
  text-align: justify;
  color: #161616;
}

.margin-top-bottom-capture {
  margin-top: 3vw;
  margin-bottom: 3vw;
}

.blog-post-date {
  font-family: Montserrat;
  font-size: 0.9vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.25;
  letter-spacing: 0.8px;
  text-align: justify;
  color: #161616;
}

.padding-top-bottom-date-share {
  padding-top: 0.7vw;
  padding-bottom: 0.7vw;
}

.see-all-insights {
  font-family: Montserrat;
  font-size: 2.5vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: 1.05px;
  text-align: left;
  color: #000000;
}

.margin-top-bottom-see-all-insights {
  margin-top: 6vw;
  margin-bottom: 10vw;
}

.more-insights {
  font-family: Montserrat;
  font-size: 2.4vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: 1px;
  text-align: left;
  color: #000000;
}

@media only screen and (max-width: 1400px) {
  /* - 20% */

  .moving-text {
    width: 773px;
    height: 174px;
    font-family: Montserrat;
    font-size: 240px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.27;
    letter-spacing: -13px;
    text-align: right;
    color: #e5e5e5;
  }
}

@media only screen and (max-width: 992px) {
  /* +40% */
  .the-clue-title-section-size {
    height: 280vw;
  }

  .post-position {
    position: absolute;
    top: 8.4vw;
    left: 0vw;
  }

  .padding-top-bottom {
    padding-top: 7vw;
    padding-bottom: 7vw;
  }

  .img-size {
    width: 84vw;
  }

  .blog-title {
    width: 76vw;
    font-family: Montserrat;
    font-size: 3.16vw;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.11;
    letter-spacing: normal;
    text-align: justify;
    color: #161616;
  }

  .padding-top-bottom-title {
    padding-top: 0vw;
    padding-bottom: 1.4vw;
  }

  .capture-text {
    width: 84vw;
    font-family: Montserrat;
    font-size: 1.92vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.65;
    letter-spacing: normal;
    text-align: justify;
    color: #161616;
  }

  .margin-top-bottom-capture {
    margin-top: 4.2vw;
    margin-bottom: 4.2vw;
  }

  .blog-post-date {
    font-family: Montserrat;
    font-size: 1.26vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.25;
    letter-spacing: 0.8px;
    text-align: justify;
    color: #161616;
  }

  .padding-top-bottom-date-share {
    padding-top: 1vw;
    padding-bottom: 1vw;
  }

  .see-all-insights {
    font-family: Montserrat;
    font-size: 3.5vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: 1.05px;
    text-align: left;
    color: #000000;
  }

  .margin-top-bottom-see-all-insights {
    margin-top: 8.4vw;
    margin-bottom: 14vw;
  }

  .more-insights {
    font-family: Montserrat;
    font-size: 3.36vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: 1px;
    text-align: left;
    color: #000000;
  }
}

@media only screen and (max-width: 1100px) {
  /* - 20% */

  .moving-text {
    width: 618px;
    height: 139px;
    font-family: Montserrat;
    font-size: 192px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.27;
    letter-spacing: -10px;
    text-align: right;
    color: #e5e5e5;
  }
}

@media only screen and (max-width: 880px) {
  /* - 20% */

  .moving-text {
    width: 494px;
    height: 111px;
    font-family: Montserrat;
    font-size: 154px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.27;
    letter-spacing: -6px;
    text-align: right;
    color: #e5e5e5;
  }
}

@media only screen and (max-width: 710px) {
  /* - 30% */
  .moving-text {
    width: 346px;
    height: 78px;
    font-family: Montserrat;
    font-size: 108px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.27;
    letter-spacing: -5px;
    text-align: right;
    color: #e5e5e5;
  }
}

@media only screen and (max-width: 540px) {
  .moving-text {
    width: 277px;
    height: 62px;
    font-family: Montserrat;
    font-size: 73px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.27;
    letter-spacing: -3px;
    text-align: right;
    color: #e5e5e5;
  }
}

@media only screen and (max-width: 350px) {
}
</style>
