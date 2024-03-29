<template>
  <div>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
      rel="stylesheet"
    />
    <div class="background column">
      <ul class="circles q-pa-none q-ma-none">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div
        class="text-bold text-center text-h4 text-white q-mt-xl q-pt-xl animated fadeIn"
      >
        Contact Us
      </div>
      <q-breadcrumbs
        class="q-pt-md text-blue-grey-11 animated fadeIn"
        active-color="white"
      >
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el label="Contact Us" />
      </q-breadcrumbs>
    </div>

    <div class="row q-ma-xl" v-bind:class="{ 'q-px-xl': mobile }">
      <div class="col-12 col-md-6 q-my-xl" v-bind:class="{ 'q-pr-md': mobile }">
        <p
          class="text-h4 text-primary"
          data-aos="fade-up"
          style="
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial,
              sans-serif;
          "
        >
          Contact Us
        </p>
        <p class="text-subtitle1 text-grey" style="font-family: system-ui">
          Lets have discussion, inquire now.
        </p>
        <br />
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <div>
            <q-input
              filled
              color="secondary"
              v-model="name"
              label="Organization Name"
              hint="Organization Name"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />
            <br />
            <q-input
              filled
              color="secondary"
              v-model="email"
              label="Email Address"
              hint="Your Email Address"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />
            <br />
            <q-input v-model="text" filled type="textarea" hint="If you have" />
          </div>
          <div>
            <q-btn label="Submit" type="submit" color="primary" rounded />
            <q-btn
              label="cancel"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
              rounded
            />
          </div>
        </q-form>
      </div>
      <div class="col-12 col-md-6 q-my-xl">
        <p
          class="text-h4 text-primary"
          data-aos="fade-up"
          style="
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial,
              sans-serif;
          "
        >
          On Touch Action
        </p>
        <p class="text-subtitle1 text-grey" style="font-family: system-ui">
          Click the Action Button, and Open the door of opportunities
        </p>

        <div>
          <q-btn
            label="Email Now"
            rounded
            type="a"
            icon="mail"
            color="primary"
            class="q-mx-md q-my-md"
            target="_blank"
            style="width: 200px"
          />
          <q-btn
            label="Schedule"
            rounded
            type="a"
            icon="fa fa-calendar"
            color="primary"
            class="q-mx-md q-my-md"
            href="https://scheduler.qitsolution.co.in"
            target="_blank"
            style="width: 170px"
          />
          <!-- <q-btn
            align="right"
            label="hr@qitsolution.co.in"
            rounded
            right icon="call"
            type="a"
            outline
            color="primary"
            disable
            class="gt-xs q-mx-md"
            style="width: 200px"
          /> -->
          <q-btn
            align="left"
            class="btn-fixed-width q-mx-md q-my-md"
            outline
            rounded
            color="primary"
            label="hr@qitsolution.co.in"
            icon="mail"
          />
          <!-- <q-btn
            label=" (+91) 94274 78799"
            rounded
            icon="call"
            type="a"
            outline
            color="primary"
            href="tel:9999888833"
            target="_blank"
            class="lt-sm q-mx-md"
            style="width: 200px"
          /> -->
        </div>
      </div>
    </div>

    <div class="q-ma-xl" v-bind:class="{ 'q-px-xl': mobile }">
      <p
        class="text-h4 text-primary"
        data-aos="fade-up"
        style="
          font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial,
            sans-serif;
        "
      >
        Find Us Here
      </p>
      <p class="text-subtitle1 text-grey" style="font-family: system-ui">
        Shop No : 370 & 350-351 The Galleria, Near Sanjeev Kumar Auditorium,
        opp. New RTO, Pal Gam, Surat, Gujarat 395009
      </p>
      <br />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14880.71469455567!2d72.7830591!3d21.18506!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc343d60f44e7b590!2sQuantum%20IT%20Solution!5e0!3m2!1sen!2sin!4v1616651049003!5m2!1sen!2sin"
        frameborder="0"
        style="
          position: relative;
          width: 100%;
          height: 450px;
          border: 1px solid black;
        "
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
import meta from "../utils/meta.js";
import firebase from "firebase";

const db = firebase.firestore();

export default {
  data() {
    return {
      mobile: false,
      text: null,
      name: null,
      email: null,
      metaTags: {
        description:
          "Contact us to get the sap solution details as well as any it solution details",
        title: "Quantum | Contact Us",
        keywords: "Contact us, sap solution contact,on touch action",
      },
    };
  },
  meta,
  beforeUpdate() {},
  created() {
    if (this.$q.screen.lt.sm) {
      this.mobile = false;
    } else {
      this.mobile = true;
    }
  },
  methods: {
    onSubmit() {
      if (name != null) {
        db.collection("contactus")
          .add({ email: this.email, name: this.name, text: this.text })
          .then(() => {
            this.$q.notify({
              color: "black",
              textColor: "white",
              icon: "cloud_done",
              message: `Thank your for your intrest.We will get back to you soon`,
              position: "bottom-left",
            });
          })
          .catch((error) => {
            this.$q.notify({
              color: "red-5",
              textColor: "white",
              icon: "warning",
              message: "Try Again after some time! sorry",
              position: "top-left",
            });
          });
        this.onReset();
      } else {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Please fill all the fields..",
          position: "top-left",
        });
      }
    },
    onReset() {
      this.name = null;
      this.email = null;
      this.text = null;
    },
  },
};
</script>

<style scoped>
.background {
  background: linear-gradient(132deg, #5200ae, #4062bb);
  background-size: 400% 400%;
  animation: Gradient 15s ease infinite;
  position: relative;
  width: 100%;
  min-height: 500px;
  overflow: hidden;
  padding: 0px;
  margin: 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  /* position the div in center */
}

.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
