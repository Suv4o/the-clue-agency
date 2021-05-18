<template>
  <section>
    <div class="d-lg-flex flex-lg-row justify-content-center mb-3">
      <div class="d-flex justify-content-center">
        <div class="size-width-input margin-right-flex">
          <input
            :class="classesStyle.classInputName"
            placeholder="name"
            type="text"
            name="inputName"
            v-model="inputs.name"
            v-validate="'required|alpha_spaces'"
            data-vv-as="Name"
          />
          <input
            :class="classesStyle.classInputPhone"
            placeholder="phone"
            type="text"
            name="inputPhone"
            v-model="inputs.phone"
            v-validate="'required|numeric'"
            data-vv-as="Phone"
          />
          <input
            :class="classesStyle.classInputEmail"
            placeholder="email"
            type="text"
            name="inputEmail"
            v-model="inputs.email"
            v-validate="'required|email'"
            data-vv-as="Email"
          />
          <input
            :class="classesStyle.classInputCompany"
            placeholder="company"
            type="text"
            name="inputCompany"
            v-model="inputs.company"
          />
          <input
            :class="classesStyle.classInputWebsite"
            placeholder="current website"
            type="text"
            name="inputWebsite"
            v-model="inputs.website"
          />
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div class="size-width-input margin-left-flex">
          <div :class="classesStyle.classInputProjectDetailsTitle">project details</div>
          <textarea
            :class="classesStyle.classInputProjectDetails"
            placeholder="— TYPE HERE —"
            type="text"
            name="inputProjectDetails"
            v-model="inputs.projectDetails"
            v-validate="'required'"
            data-vv-as="Project Details"
          ></textarea>
          <div :class="classesStyle.classInputProjectBudgetTitle">project budget</div>
          <select
            class="w3-white select-placeholder height-size-input"
            name="inputProjectBudget"
            v-model="inputs.projectBudget"
          >
            <option value="" disabled selected>— SELECT AN OPTION —</option>
            <option value="Less than $2,000 AUD">Less than $2,000 AUD</option>
            <option value="$2,000 - $5,000 AUD">$2,000 - $5,000 AUD</option>
            <option value="$5,000 - 10K AUD">$5,000 - 10K AUD</option>
            <option value="More than 10K AUD">More than 10K AUD</option>
          </select>
          <div :class="classesStyle.classTimeframeTitle">timeframe</div>
          <select class="w3-white select-placeholder"
            name="timeframe"
            v-model="inputs.timeframe"
          >
            <option value="" disabled selected>— SELECT AN OPTION —</option>
            <option value="1 week">1 week</option>
            <option value="2 weeks">2 weeks</option>
            <option value="3 weeks">3 weeks</option>
            <option value="1 month">1 month</option>
            <option value="2 month">2 month</option>
            <option value="3 month">3 month</option>
            <option value="4 month">4 month</option>
            <option value="5 month">5 month</option>
            <option value="6 month">6 month</option>
            <option value="More than 7 months">More than 7 months</option>
          </select>
          <div :class="classesStyle.classHowDidYouHearTitle">
            how did you hear about us?
          </div>
          <select class="w3-white select-placeholder" 
            name="howDidYouHear"
            v-model="inputs.howDidYouHear"
          >
            <option value="" disabled selected>— SELECT AN OPTION —</option>
            <option value="Google">Google</option>
            <option value="Facebook">Facebook</option>
            <option value="Instagram">Instagram</option>
            <option value="Behance">Behance</option>
            <option value="Linked In">Linked In</option>
            <option value="Friend">A Friend</option>
            <option value="Other">Other</option>
          </select>
          <div
            :class="classesStyle.classProjectRequirementsTitle"
          >
            project requirements
          </div>
          <button
            @click="switchButtonOnOff(0)"
            :class="[
              buttonsOnOff.isOnBranding
                ? classesStyle.classButtonOn
                : classesStyle.classButtonOff
            ]"
          >
            BRANDING
          </button>
          <button
            @click="switchButtonOnOff(1)"
            :class="[
              buttonsOnOff.isOnStrategy
                ? classesStyle.classButtonOn
                : classesStyle.classButtonOff
            ]"
          >
            STRATEGY
          </button>
          <button
            @click="switchButtonOnOff(2)"
            :class="[
              buttonsOnOff.isOnMarketing
                ? classesStyle.classButtonOn
                : classesStyle.classButtonOff
            ]"
          >
            MARKETING
          </button>
          <button
            @click="switchButtonOnOff(3)"
            :class="[
              buttonsOnOff.isOnWebsite
                ? classesStyle.classButtonOn
                : classesStyle.classButtonOff
            ]"
          >
            WEBSITE
          </button>
          <button
            @click="switchButtonOnOff(4)"
            :class="[
              buttonsOnOff.isOnApp
                ? classesStyle.classButtonOn
                : classesStyle.classButtonOff
            ]"
          >
            APP
          </button>
          <button
            @click="switchButtonOnOff(5)"
            :class="[
              buttonsOnOff.isOnSocialMedian
                ? classesStyle.classButtonOn
                : classesStyle.classButtonOff
            ]"
          >
            SOCIAL MEDIA
          </button>
          <button
            @click="switchButtonOnOff(6)"
            :class="[
              buttonsOnOff.isOnEmailMarketing
                ? classesStyle.classButtonOn
                : classesStyle.classButtonOff
            ]"
          >
            EMAIL MARKETING
          </button>
          <button
            @click="switchButtonOnOff(7)"
            :class="[
              buttonsOnOff.isOnOther
                ? classesStyle.classButtonOn
                : classesStyle.classButtonOff
            ]"
          >
            OTHER
          </button>
          <div class="bottom-field-margin2"></div>
          <button
            @click="sendEnquire"
            class="button-send button-text-send the-clue-underline-text-gray-yellow animated pulseHover"
          >
            SEND ENQUIRY
          </button>
        </div>
      </div>
    </div>
    <div class="top-field-margin1"></div>
    <div class="d-flex justify-content-center">
      <div class="error-font">{{ messages.success }}</div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="w3-text-red error-font">{{ messages.error }}</div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="w3-text-red error-font">{{ messages.errorName }}</div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="w3-text-red error-font">{{ messages.errorPhone }}</div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="w3-text-red error-font">{{ messages.errorEmail }}</div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="w3-text-red error-font">{{ messages.errorWebsite }}</div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="w3-text-red error-font">{{ messages.errorProjectDetails }}</div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="w3-text-red error-font">{{ messages.errorProjectBudget }}</div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="w3-text-red error-font">{{ messages.errorTimeframe }}</div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="w3-text-red error-font">{{ messages.errorHowDid }}</div>
    </div>
    <div class="d-flex justify-content-center">
      <div class="w3-text-red error-font">{{ messages.errorProjectRequirements }}</div>
    </div>
    <div class="bottom-field-margin3"></div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      inputs: {
        name: "",
        phone: "",
        email: "",
        company: "",
        website: "",
        projectDetails: "",
        projectBudget: "",
        timeframe: "",
        howDidYouHear: "",
        projectRequirements: {
          branding: "",
          strategy: "",
          marketing: "",
          website: "",
          app: "",
          socialMedia: "",
          emailMarketing: "",
          other: ""
        }
      },
      messages: {
        error: "",
        success: ""
      },
      buttonsOnOff: {
        isOnBranding: false,
        isOnStrategy: false,
        isOnMarketing: false,
        isOnWebsite: false,
        isOnApp: false,
        isOnSocialMedian: false,
        isOnEmailMarketing: false,
        isOnOther: false
      },
      classesStyle: {
        classButtonOff:
          "button-style-white button-text-style-black animated pulseHover",
        classButtonOn:
          "button-style-black button-text-style-white animated pulseHover",
        classInputName: "inputfield1 input-style input-margin-bottom",
        classInputPhone: "inputfield1 input-style input-margin-bottom",
        classInputEmail: "inputfield1 input-style input-margin-bottom",
        classInputCompany: "inputfield1 input-style input-margin-bottom",
        classInputWebsite: "inputfield1 input-style input-margin-bottom",
        classInputProjectDetailsTitle: "input-style",
        classInputProjectDetails:
          "inputfield2 input-style size-height-textarea w3-border-0",
        classInputProjectBudgetTitle: "input-style",
        classTimeframeTitle: "input-style top-field-margins",
        classHowDidYouHearTitle: "input-style top-field-margins",
        classProjectRequirementsTitle:
          "input-style top-field-margins2 bottom-field-margin1 w3-border-0"
      }
    };
  },
  methods: {
    switchButtonOnOff(value) {
      if (value == 0) {
        this.buttonsOnOff.isOnBranding = !this.buttonsOnOff.isOnBranding;
        this.inputs.projectRequirements.branding = "Branding";
      }
      if (value == 1) {
        this.buttonsOnOff.isOnStrategy = !this.buttonsOnOff.isOnStrategy;
        this.inputs.projectRequirements.strategy = "Strategy";
      }
      if (value == 2) {
        this.buttonsOnOff.isOnMarketing = !this.buttonsOnOff.isOnMarketing;
      }
      if (value == 3) {
        this.buttonsOnOff.isOnWebsite = !this.buttonsOnOff.isOnWebsite;
        this.inputs.projectRequirements.website = "Website";
      }
      if (value == 4) {
        this.buttonsOnOff.isOnApp = !this.buttonsOnOff.isOnApp;
        this.inputs.projectRequirements.app = "App";
      }
      if (value == 5) {
        this.buttonsOnOff.isOnSocialMedian = !this.buttonsOnOff
          .isOnSocialMedian;
        this.inputs.projectRequirements.socialMedia = "Social Media";
      }
      if (value == 6) {
        this.buttonsOnOff.isOnEmailMarketing = !this.buttonsOnOff
          .isOnEmailMarketing;
        this.inputs.projectRequirements.marketing = "Marketing";
      }
      if (value == 7) {
        this.buttonsOnOff.isOnOther = !this.buttonsOnOff.isOnOther;
        this.inputs.projectRequirements.other = "Other";
      }
    },
    sendEnquire() {
      let self = this;
      self.$validator.validateAll().then(result => {
        if (!result) {
          self.messages.error =
            "Please Enter valid entries into the fields! All highlighted fields are Required!";

          if (typeof self.errors.first("inputName") != "undefined") {
            self.classesStyle.classInputName =
              "inputfield1-error input-style-error input-margin-bottom w3-text-red";
            if (self.errors.first("inputName") !== "The Name field is required")
              self.messages.errorName = self.errors.first("inputName");
          } else {
            self.messages.errorName = "";
            self.classesStyle.classInputName =
              "inputfield1 input-style input-margin-bottom";
          }

          if (typeof self.errors.first("inputPhone") != "undefined") {
            self.classesStyle.classInputPhone =
              "inputfield1-error input-style-error input-margin-bottom w3-text-red";
            if (
              self.errors.first("inputPhone") !== "The Phone field is required"
            )
              self.messages.errorPhone = self.errors.first("inputPhone");
          } else {
            self.messages.errorPhone = "";
            self.classesStyle.classInputPhone =
              "inputfield1 input-style input-margin-bottom";
          }

          if (typeof self.errors.first("inputEmail") != "undefined") {
            self.classesStyle.classInputEmail =
              "inputfield1-error input-style-error input-margin-bottom w3-text-red";
            if (
              self.errors.first("inputEmail") !== "The Email field is required"
            )
              self.messages.errorEmail = self.errors.first("inputEmail");
          } else {
            self.messages.errorEmail = "";
            self.classesStyle.classInputEmail =
              "inputfield1 input-style input-margin-bottom";
          }

          if (typeof self.errors.first("inputProjectDetails") != "undefined") {
            self.classesStyle.classInputProjectDetailsTitle =
              "input-style-error w3-text-red";
            if (
              self.errors.first("inputProjectDetails") !==
              "The Project Details field is required"
            )
              self.messages.errorProjectDetails = self.errors.first(
                "inputProjectDetails"
              );
          } else {
            self.messages.errorProjectDetails = "";
            self.classesStyle.classInputProjectDetailsTitle = "input-style";
          }

          if (self.inputs.projectBudget === "") {
            self.classesStyle.classInputProjectBudgetTitle =
              "input-style-error w3-text-red";
          } else {
            self.classesStyle.classInputProjectBudgetTitle =
              "input-style top-field-margins";
          }

          if (self.inputs.timeframe === "") {
            self.classesStyle.classTimeframeTitle =
              "input-style-error w3-text-red top-field-margins";
          } else {
            self.classesStyle.classTimeframeTitle =
              "input-style top-field-margins";
          }

          if (self.inputs.howDidYouHear === "") {
            self.classesStyle.classHowDidYouHearTitle =
              "input-style-error w3-text-red top-field-margins";
          } else {
            self.classesStyle.classHowDidYouHearTitle =
              "input-style top-field-margins";
          }

          if (
            self.buttonsOnOff.isOnBranding ||
            self.buttonsOnOff.isOnStrategy ||
            self.buttonsOnOff.isOnMarketing ||
            self.buttonsOnOff.isOnWebsite ||
            self.buttonsOnOff.isOnApp ||
            self.buttonsOnOff.isOnSocialMedian ||
            self.buttonsOnOff.isOnEmailMarketing ||
            self.buttonsOnOff.isOnOther
          ) {
            self.classesStyle.classProjectRequirementsTitle =
              "input-style top-field-margins2 bottom-field-margin1 w3-border-0";
          } else {
            self.classesStyle.classProjectRequirementsTitle =
              "input-style-error w3-text-red top-field-margins2 bottom-field-margin1 w3-border-0";
          }
        } else {
          if (
            self.inputs.projectBudget != "" &&
            self.inputs.timeframe != "" &&
            self.inputs.howDidYouHear != "" &&
            (self.buttonsOnOff.isOnBranding ||
              self.buttonsOnOff.isOnStrategy ||
              self.buttonsOnOff.isOnMarketing ||
              self.buttonsOnOff.isOnWebsite ||
              self.buttonsOnOff.isOnApp ||
              self.buttonsOnOff.isOnSocialMedian ||
              self.buttonsOnOff.isOnEmailMarketing ||
              self.buttonsOnOff.isOnOther)
          ) {
            self.messages.success = "Email Successfully Submitted.";

            setTimeout(function() {
              self.inputs.name = "";
              self.inputs.phone = "";
              self.inputs.email = "";
              self.inputs.company = "";
              self.inputs.website = "";
              self.inputs.projectDetails = "";
              self.inputs.projectBudget = "";
              self.inputs.timeframe = "";
              self.inputs.howDidYouHear = "";
              self.inputs.projectRequirements.branding = "Branding";
              self.inputs.projectRequirements.strategy = "Strategy";
              self.inputs.projectRequirements.website = "Website";
              self.inputs.projectRequirements.app = "App";
              self.inputs.projectRequirements.socialMedia = "Social Media";
              self.inputs.projectRequirements.marketing = "Marketing";
              self.inputs.projectRequirements.other = "Other";
              self.buttonsOnOff.isOnBranding = false;
              self.buttonsOnOff.isOnStrategy = false;
              self.buttonsOnOff.isOnMarketing = false;
              self.buttonsOnOff.isOnWebsite = false;
              self.buttonsOnOff.isOnApp = false;
              self.buttonsOnOff.isOnSocialMedian = false;
              self.buttonsOnOff.isOnEmailMarketing = false;
              self.buttonsOnOff.isOnOther = false;
            }, 500);

            setTimeout(function() {
              self.messages.success = "";
            }, 4000);
          }

          if (self.inputs.projectBudget === "") {
            self.messages.error =
              "Please Enter valid entries into the fields! All highlighted fields are Required!";
            self.messages.errorName = "";
            self.messages.errorPhone = "";
            self.messages.errorEmail = "";
            self.messages.errorProjectDetails = "";
            self.messages.errorProjectBudget = "";

            self.classesStyle.classInputName =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classInputPhone =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classInputEmail =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classInputProjectDetailsTitle = "input-style";
            self.classesStyle.classInputProjectBudgetTitle =
              "input-style-error w3-text-red";
          } else {
            self.messages.error = "";
            self.messages.errorName = "";
            self.messages.errorPhone = "";
            self.messages.errorEmail = "";
            self.messages.errorProjectDetails = "";
            self.messages.errorProjectBudget = "";

            self.classesStyle.classInputName =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classInputPhone =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classInputEmail =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classInputProjectDetailsTitle = "input-style";
            self.classesStyle.classInputProjectBudgetTitle = "input-style";
          }

          if (self.inputs.timeframe === "") {
            self.messages.error =
              "Please Enter valid entries into the fields! All highlighted fields are Required!";
            self.messages.errorName = "";
            self.messages.errorPhone = "";
            self.messages.errorEmail = "";
            self.messages.errorProjectDetails = "";
            self.messages.errorProjectBudget = "";

            self.classesStyle.classInputName =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classInputPhone =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classInputEmail =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classInputProjectDetailsTitle = "input-style";
            self.classesStyle.classTimeframeTitle =
              "input-style-error w3-text-red top-field-margins";
          } else {
            self.messages.error = "";
            self.messages.errorName = "";
            self.messages.errorPhone = "";
            self.messages.errorEmail = "";
            self.messages.errorProjectDetails = "";
            self.messages.errorProjectBudget = "";

            self.classesStyle.classInputName =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classInputPhone =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classInputEmail =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classInputProjectDetailsTitle = "input-style";
            self.classesStyle.classTimeframeTitle =
              "input-style top-field-margins";
          }

          if (self.inputs.howDidYouHear === "") {
            self.messages.error =
              "Please Enter valid entries into the fields! All highlighted fields are Required!";
            self.messages.errorName = "";
            self.messages.errorPhone = "";
            self.messages.errorEmail = "";
            self.messages.errorProjectDetails = "";
            self.messages.errorProjectBudget = "";

            self.classesStyle.classInputName =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classInputPhone =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classInputEmail =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classInputProjectDetailsTitle = "input-style";
            self.classesStyle.classHowDidYouHearTitle =
              "input-style-error w3-text-red top-field-margins";
          } else {
            self.messages.error = "";
            self.messages.errorName = "";
            self.messages.errorPhone = "";
            self.messages.errorEmail = "";
            self.messages.errorProjectDetails = "";
            self.messages.errorProjectBudget = "";

            self.classesStyle.classInputName =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classInputPhone =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classInputEmail =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classInputProjectDetailsTitle = "input-style";
            self.classesStyle.classHowDidYouHearTitle =
              "input-style top-field-margins";
          }

          if (
            self.buttonsOnOff.isOnBranding ||
            self.buttonsOnOff.isOnStrategy ||
            self.buttonsOnOff.isOnMarketing ||
            self.buttonsOnOff.isOnWebsite ||
            self.buttonsOnOff.isOnApp ||
            self.buttonsOnOff.isOnSocialMedian ||
            self.buttonsOnOff.isOnEmailMarketing ||
            self.buttonsOnOff.isOnOther
          ) {
            self.messages.error = "";
            self.messages.errorName = "";
            self.messages.errorPhone = "";
            self.messages.errorEmail = "";
            self.messages.errorProjectDetails = "";
            self.messages.errorProjectBudget = "";

            self.classesStyle.classInputName =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classInputPhone =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classInputEmail =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classInputProjectDetailsTitle = "input-style";
            self.classesStyle.classProjectRequirementsTitle =
              "input-style top-field-margins2 bottom-field-margin1 w3-border-0";
          } else if (
            !self.buttonsOnOff.isOnBranding &&
            !self.buttonsOnOff.isOnStrategy &&
            !self.buttonsOnOff.isOnMarketing &&
            !self.buttonsOnOff.isOnWebsite &&
            !self.buttonsOnOff.isOnApp &&
            !self.buttonsOnOff.isOnSocialMedian &&
            !self.buttonsOnOff.isOnEmailMarketing &&
            !self.buttonsOnOff.isOnOther
          ) {
            self.messages.error =
              "Please Enter valid entries into the fields! All highlighted fields are Required!";
            self.messages.errorName = "";
            self.messages.errorPhone = "";
            self.messages.errorEmail = "";
            self.messages.errorProjectDetails = "";
            self.messages.errorProjectBudget = "";

            self.classesStyle.classInputName =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classInputPhone =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classInputEmail =
              "inputfield1 input-style input-margin-bottom";
            self.classesStyle.classInputProjectDetailsTitle = "input-style";
            self.classesStyle.classProjectRequirementsTitle =
              "input-style-error w3-text-red top-field-margins2 bottom-field-margin1 w3-border-0";
          }
        }
      });
    }
  }
};
</script>

<style scoped>
textarea {
  resize: none;
}

select {
  border: none;
  outline: none;
  scroll-behavior: smooth;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
  color: #646464 !important;
}

.size-width-input {
  width: 33vw;
}

.size-height-textarea {
  height: 9.6vw;
}

.top-field-margins {
  margin-top: 0.4vw;
}

.top-field-margins2 {
  margin-top: 1.3vw;
}

.margin-right-flex {
  margin-right: 52px;
}

.margin-left-flex {
  margin-left: 52px;
}

.error-font {
  font-size: 1.55vw;
}

.input-style {
  font-family: Montserrat;
  font-size: 1.55vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0.65px;
  text-align: left;
  display: block;
  border: none;
  border-bottom: 1px solid #000000;
  width: 100%;
}

.input-style-error {
  font-family: Montserrat;
  font-size: 1.55vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0.65px;
  text-align: left;
  display: block;
  border: none;
  border-bottom: 1px solid #f44336;
  width: 100%;
}

.border-bottom {
  border-bottom: 0.14vw solid #000000 !important;
}

.input-margin-bottom {
  margin-bottom: 3.4vw;
}

.select-placeholder {
  font-family: Montserrat;
  font-size: 0.9vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.57;
  letter-spacing: 0.35px;
  text-align: left;
  color: #646464;
}

.select-placeholder-error {
  font-family: Montserrat;
  font-size: 0.9vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.57;
  letter-spacing: 0.35px;
  text-align: left;
  color: #f44336;
}

.inputfield1 ::-webkit-input-placeholder {
  /* Edge */
  font-family: Montserrat;
  font-size: 1.55vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: 0.65px;
  text-align: left;
  color: #000000;
}

.inputfield1:-ms-input-placeholder {
  /* Internet Explorer */
  font-family: Montserrat;
  font-size: 1.55vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: 0.65px;
  text-align: left;
  color: #000000;
}

.inputfield1::placeholder {
  font-family: Montserrat;
  font-size: 1.55vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: 0.65px;
  text-align: left;
  color: #000000;
}

.inputfield1-error ::-webkit-input-placeholder {
  /* Edge */
  font-family: Montserrat;
  font-size: 1.55vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: 0.65px;
  text-align: left;
  color: #f44336;
}

.inputfield1-error:-ms-input-placeholder {
  /* Internet Explorer */
  font-family: Montserrat;
  font-size: 1.55vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: 0.65px;
  text-align: left;
  color: #f44336;
}

.inputfield1-error::placeholder {
  font-family: Montserrat;
  font-size: 1.55vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: 0.65px;
  text-align: left;
  color: #f44336;
}

.inputfield2::-webkit-input-placeholder {
  /* Edge */
  font-family: Montserrat;
  font-size: 0.9vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.57;
  letter-spacing: 0.35px;
  text-align: left;
  color: #646464;
}

.inputfield2:-ms-input-placeholder {
  /* Internet Explorer */
  font-family: Montserrat;
  font-size: 0.9vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.57;
  letter-spacing: 0.35px;
  text-align: left;
  color: #646464;
}

.inputfield2::placeholder {
  font-family: Montserrat;
  font-size: 0.9vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.57;
  letter-spacing: 0.35px;
  text-align: left;
  color: #646464;
}

.inputfield2-error::-webkit-input-placeholder {
  /* Edge */
  font-family: Montserrat;
  font-size: 0.9vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.57;
  letter-spacing: 0.35px;
  text-align: left;
  color: #f44336;
}

.inputfield2-error:-ms-input-placeholder {
  /* Internet Explorer */
  font-family: Montserrat;
  font-size: 0.9vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.57;
  letter-spacing: 0.35px;
  text-align: left;
  color: #f44336;
}

.inputfield2-error::placeholder {
  font-family: Montserrat;
  font-size: 0.9vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.57;
  letter-spacing: 0.35px;
  text-align: left;
  color: #f44336;
}

.button-style-black {
  width: 7.9vw;
  height: 2.2vw;
  background-color: #000000;
  border: none;
  display: inline-block;
  text-align: center;
  margin-bottom: 0.5vw;
}

.button-style-white {
  width: 7.9vw;
  height: 2.2vw;
  background-color: #ffffff;
  border: solid 0.1vw #acacac;
  display: inline-block;
  text-align: center;
  margin-bottom: 0.5vw;
}

.bottom-field-margin1 {
  margin-bottom: 0.5vw;
}

.bottom-field-margin2 {
  margin-bottom: 4.5vw;
}

.bottom-field-margin3 {
  margin-bottom: 15vw;
}

.top-field-margin1 {
  margin-bottom: 5vw;
}

.button-text-style-white {
  font-family: Montserrat;
  font-size: 0.6vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0.3px;
  text-align: center;
  color: #ffffff;
}

.button-text-style-black {
  font-family: Montserrat;
  font-size: 0.6vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0.3px;
  text-align: center;
  color: #000000;
}

.button-send {
  width: 33vw;
  height: 3.5vw;
  border: solid 0.1vw #acacac;
  background-color: #ffffff;
}

.button-send:hover {
  width: 33vw;
  height: 3.5vw;
  /* border: solid 0.1vw #000000; */
  /* background-color: #000000; */
}

.button-text-send {
  font-family: Montserrat;
  font-size: 1.55vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: 0.65px;
  text-align: center;
  color: #343434;
}

.button-text-send:hover {
  font-family: Montserrat;
  font-size: 1.55vw;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.92;
  letter-spacing: 0.65px;
  text-align: center;
  color: #343434;
}

@media only screen and (max-width: 992px) {
  /* + 40% */

  .size-width-input {
    width: 60vw;
  }

  .size-height-textarea {
    height: 17.3vw;
  }

  .top-field-margins {
    margin-top: 0.72vw;
  }

  .top-field-margins2 {
    margin-top: 2.34vw;
  }

  .margin-right-flex {
    margin-right: 0px;
    margin-bottom: 7vw;
  }

  .margin-left-flex {
    margin-left: 0px;
  }

  .error-font {
    font-size: 2.8vw;
  }

  .input-style {
    font-family: Montserrat;
    font-size: 2.8vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: 0.65px;
    text-align: left;
    display: block;
    border: none;
    border-bottom: 1px solid #000000;
    width: 100%;
  }

  .input-style-error {
    font-family: Montserrat;
    font-size: 2.8vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: 0.65px;
    text-align: left;
    display: block;
    border: none;
    border-bottom: 1px solid #f44336;
    width: 100%;
  }

  .border-bottom {
    border-bottom: 0.25vw solid #000000 !important;
  }

  .input-margin-bottom {
    margin-bottom: 6.12vw;
  }

  .select-placeholder {
    font-family: Montserrat;
    font-size: 1.62vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.57;
    letter-spacing: 0.35px;
    text-align: left;
    color: #646464;
  }

  .select-placeholder-error {
    font-family: Montserrat;
    font-size: 1.62vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.57;
    letter-spacing: 0.35px;
    text-align: left;
    color: #f44336;
  }

  .inputfield1 ::-webkit-input-placeholder {
    /* Edge */
    font-family: Montserrat;
    font-size: 2.79vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: 0.65px;
    text-align: left;
    color: #000000;
  }

  .inputfield1:-ms-input-placeholder {
    /* Internet Explorer */
    font-family: Montserrat;
    font-size: 2.79vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: 0.65px;
    text-align: left;
    color: #000000;
  }

  .inputfield1::placeholder {
    font-family: Montserrat;
    font-size: 2.79vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: 0.65px;
    text-align: left;
    color: #000000;
  }

  .inputfield1-error ::-webkit-input-placeholder {
    /* Edge */
    font-family: Montserrat;
    font-size: 2.79vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: 0.65px;
    text-align: left;
    color: #f44336;
  }

  .inputfield1-error:-ms-input-placeholder {
    /* Internet Explorer */
    font-family: Montserrat;
    font-size: 2.79vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: 0.65px;
    text-align: left;
    color: #f44336;
  }

  .inputfield1-error::placeholder {
    font-family: Montserrat;
    font-size: 2.79vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: 0.65px;
    text-align: left;
    color: #f44336;
  }

  .inputfield2::-webkit-input-placeholder {
    /* Edge */
    font-family: Montserrat;
    font-size: 1.62vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.57;
    letter-spacing: 0.35px;
    text-align: left;
    color: #646464;
  }

  .inputfield2:-ms-input-placeholder {
    /* Internet Explorer */
    font-family: Montserrat;
    font-size: 1.62vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.57;
    letter-spacing: 0.35px;
    text-align: left;
    color: #646464;
  }

  .inputfield2-error::placeholder {
    font-family: Montserrat;
    font-size: 1.62vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.57;
    letter-spacing: 0.35px;
    text-align: left;
    color: #f44336;
  }

  .inputfield2-error:-ms-input-placeholder {
    /* Internet Explorer */
    font-family: Montserrat;
    font-size: 1.62vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.57;
    letter-spacing: 0.35px;
    text-align: left;
    color: #f44336;
  }

  .inputfield2-error::placeholder {
    font-family: Montserrat;
    font-size: 1.62vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.57;
    letter-spacing: 0.35px;
    text-align: left;
    color: #f44336;
  }

  .button-style-black {
    width: 28.44vw;
    height: 8vw;
    background-color: #000000;
    border: none;
    display: inline-block;
    text-align: center;
    margin-bottom: 1.6vw;
  }

  .button-style-white {
    width: 28.44vw;
    height: 8vw;
    background-color: #ffffff;
    border: solid 0.2vw #acacac;
    display: inline-block;
    text-align: center;
    margin-bottom: 1.6vw;
  }

  .bottom-field-margin1 {
    margin-bottom: 2vw;
  }

  .bottom-field-margin2 {
    margin-bottom: 8.1vw;
  }

  .bottom-field-margin3 {
    margin-bottom: 27vw;
  }

  .top-field-margin1 {
    margin-bottom: 9vw;
  }

  .button-text-style-white {
    font-family: Montserrat;
    font-size: 2.2vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: 0.3px;
    text-align: center;
    color: #ffffff;
  }

  .button-text-style-black {
    font-family: Montserrat;
    font-size: 2.2vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: 0.3px;
    text-align: center;
    color: #000000;
  }

  .button-send {
    width: 60vw;
    height: 6.3vw;
    border: solid 0.1vw #acacac;
    background-color: #ffffff;
  }

  .button-send:hover {
    width: 60vw;
    height: 6.3vw;
    /* border: solid 0.1vw #000000;
    background-color: #000000; */
  }

  .button-text-send {
    font-family: Montserrat;
    font-size: 2.79vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: 0.65px;
    text-align: center;
    color: #343434;
  }

  .button-text-send:hover {
    font-family: Montserrat;
    font-size: 2.79vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.92;
    letter-spacing: 0.65px;
    text-align: center;
    color: #343434;
  }
}
</style>
