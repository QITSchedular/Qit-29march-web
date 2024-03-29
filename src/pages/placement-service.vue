<template>
  <div>
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
        Placement Service
      </div>

      <q-breadcrumbs
        class="q-pt-md text-blue-grey-11 animated fadeIn"
        active-color="white"
      >
        <q-breadcrumbs-el label="Home" to="/" />
        <q-breadcrumbs-el label=" Placement Service" />
      </q-breadcrumbs>
    </div>

    <div class="gt-sm">
      <div class="row items-center justify-center">
        <div class="col-12 col-md q-pa-xl q-ml-xl">
          <p class="text-h6 text-blue-grey-7" style="font-family:  system-ui">IT Counsulting & Traning</p>
          <p class="text-h4 text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Placement Service</p>
          <p class="text-subtitle1 text-blue-grey-9" style="font-family:  system-ui">
            Quantum HR services are running with a mission to help companies achieve a triangular balance of People, Productivity, and Power through strategic partnerships. We partner and collaborate with companies to make manpower more valuable and help them create a perfect work culture aligned with the business goal for long-term sustained success. Understanding the dynamism of the job market and aligning businesses with contemporary realities makes us the best job consultants in Gujarat.
          </p>
        </div>
        <div class="col-12 col-md q-pa-xl q-mr-xl">
          <q-img src="~assets/place.png" style="max-width: 500px" />
        </div>
      </div>
    </div>

    <div class="lt-md">
      <div class="row items-center justify-center">
        <div class="col-12 col-md q-pa-lg q-mx-xl text-center">
          <q-img src="~assets/place.png" style="max-width: 400px" />
        </div>
        <div class="col-12 col-md q-pa-xl q-mx-xl">
          <p class="text-h6 text-blue-grey-7" style="font-family:  system-ui">IT Counsulting & Traning</p>
          <p class="text-h4 text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Placement Service</p>
          <p class="text-subtitle1 text-blue-grey-9" style="font-family:  system-ui">
            We provide placement support to our Students starting from Resume Preparation,
            Mock Interviews, Personality development, Arranging Interviews.
          </p>
        </div>
      </div>
    </div>

    <div class="bg-grey-2">
      <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12 q-mx-xl q-my-xl q-pt-xl">
        <p class="text-center text-h4 text-primary" style="font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Take a next step in your career</p>
        <p class="text-center text-subtitle1 q-mx-md" style="font-family:  system-ui">
          Quantum's dedicated team will privide you the perfect career choice, with wide
          range of service for your need.
        </p>
      </div>

      <div class="q-mt-md q-mb-xl row items-stretch q-gutter-md justify-evenly" style="font-family:  system-ui">
        <q-card class="my-cardx q-my-md text-blue-grey-9" data-aos="fade-right">
          <q-card-section class="text-center">
            <q-icon name="groups" size="45px" class="q-pa-sm" color="secondary" />
          </q-card-section>
          <q-card-section class="text-center text-h6 text-primary q-pt-none q-mt-none">
            HR Counsulting
          </q-card-section>
        </q-card>

        <q-card class="my-cardx q-my-md text-blue-grey-9" data-aos="zoom-in">
          <q-card-section class="text-center">
            <q-icon
              name="person_add_alt_1"
              size="45px"
              class="q-pa-sm"
              color="secondary"
            />
          </q-card-section>
          <q-card-section class="text-center text-h6 text-primary q-pt-none q-mt-none">
            Talent Acquisition
          </q-card-section>
        </q-card>

        <q-card class="my-cardx q-my-md text-blue-grey-9" data-aos="fade-left">
          <q-card-section class="text-center">
            <q-icon name="recommend" size="45px" class="q-pa-sm" color="secondary" />
          </q-card-section>
          <q-card-section class="text-center text-h6 text-primary q-pt-none q-mt-none">
            Job Placement
          </q-card-section>
        </q-card>
      </div>

      <div class="q-mt-md q-mb-xl row items-stretch q-gutter-md justify-evenly q-pb-xl">
        <q-card class="my-cardx q-my-md text-blue-grey-9" data-aos="fade-right">
          <q-card-section class="text-center">
            <q-icon name="psychology" size="45px" class="q-pa-sm" color="secondary" />
          </q-card-section>
          <q-card-section class="text-center text-h6 text-primary q-pt-none q-mt-none">
            Training & Development
          </q-card-section>
        </q-card>

        <q-card class="my-cardx q-my-md text-blue-grey-9" data-aos="zoom-in">
          <q-card-section class="text-center">
            <q-icon name="engineering" size="45px" class="q-pa-sm" color="secondary" />
          </q-card-section>
          <q-card-section class="text-center text-h6 text-primary q-pt-none q-mt-none">
            Payroll Outsourcing
          </q-card-section>
        </q-card>

        <q-card class="my-cardx q-my-md text-blue-grey-9" data-aos="fade-left">
          <q-card-section class="text-center">
            <q-icon name="public" size="45px" class="q-pa-sm" color="secondary" />
          </q-card-section>
          <q-card-section class="text-center text-h6 text-primary q-pt-none q-mt-none">
            Manpower Outsourcing
          </q-card-section>
        </q-card>
      </div>
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
      loading:false,
      columns: [
        {
          row: "job",
          name: "Job",
          align: "left",
          label: "Job Title",
          sortable: true,
          field: "Job",
          field: (row) => row.job,
        },
        {
          row: "tech",
          name: "tech",
          align: "left",
          label: "Tehnology Scope",
          sortable: true,
          field: "tech",
          field: (row) => row.tech,
        },
        {
          row: "exp",
          name: "exp",
          align: "left",
          label: "Min-Experience",
          sortable: true,
          field: "exp",
          field: (row) => row.exp,
        },
      ],
      data: [],
      metaTags: {
        description:
          "Quantum HR services is running with a mission to help companies achieve a triangular balance of People, Productivity, and Power through strategic partnerships",
        title: "Quantum | Placement Service",
        keywords:
          "Career in SAP, Placement,IT Jobs, SAP Job in Surat,sap job in gujarat,sap jobs",
      },
    };
  },
  meta,
  methods: {
    fetchjob() {
      this.data = [];

      db.collection("placement")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.data.push({
              job: doc.data().job,
              tech: doc.data().technology,
              exp: doc.data().experience,
            });
          });
        })
        .catch((error) => {
          this.$q.notify({
            type: "red",
            multiline: true,
            message: "we are having trouble fetching data, try again later",
            timeout: 500,
          });
        });
      setTimeout(this.loader, 1000);
    },
  },
  mounted() {
    this.fetchjob();
  },
  created() {
    if (this.$q.screen.lt.sm) {
      this.mobile = false;
    } else {
      this.mobile = true;
    }
  },
};
</script>

<style scoped>
.my-cardx {
  width: 100%;
  max-width: 300px;
  border-radius: 25px;
  border-top-color: #3663a8;
  border-top-width: 5px;
  border-top-style: solid;
  border-bottom-color: #ff8b0f;
  border-bottom-width: 5px;
  border-bottom-style: solid;
}

.my-cardx:hover {
  box-shadow: 0 10px 13px -6px rgba(54, 99, 168, 0.2),
    0 20px 31px 3px rgba(54, 99, 168, 0.14), 0 8px 38px 7px rgba(54, 99, 168, 0.12) !important;

  border-top-style: solid;
  border-top-color: #ff8b0f;
  border-top-width: 5px;
  border-bottom-color: #3663a8;
  border-bottom-width: 5px;
  border-bottom-style: solid;
}

.background {
  background: linear-gradient(132deg, #fc415a, #591bc5, #212335);
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
