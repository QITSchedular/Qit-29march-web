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
        class="text-bold text-start text-h4 text-white q-mt-xl q-pt-xl animated fadeIn"
      >
        Reinvent your Career
      </div>
    </div>

    <!--  <div class="q-pa-none">
        <q-parallax :height="200" :speed="0.5">
            <template v-slot:media>
            <img src="~assets/abt.jpg">
            </template>
        </q-parallax>
    </div>
-->

    <div>
      <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12 q-mx-xl q-my-xl">
        <p
          class="text-center text-h4 text-primary"
          data-aos="fade-up"
          style="
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial,
              sans-serif;
          "
        >
          Current Opening At Quantum
        </p>
        <p
          class="text-center text-subtitle1 q-mx-md"
          style="
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial,
              sans-serif;
          "
        >
          Be a part of Team Quantum and explore the new posibilities in your
          career
        </p>
      </div>

      <q-table
        title="Current Opening"
        :data="data"
        :columns="columns"
        :loading="loading"
        color="primary"
        row-key="row"
        flat
        bordered
        class="q-mx-xl my-sticky-header-table q-mb-xl"
        v-bind:class="{ 'q-px-xl': mobile }"
      >
      </q-table>
    </div>

    <div class="bg-grey-2">
      <p
        class="text-h6 text-blue-grey-9 q-mx-xl text-center q-pt-xl"
        v-bind:class="{ 'q-px-xl': mobile }"
        style="
          font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial,
            sans-serif;
        "
      >
        Be a part of Team Quantum, contact us on the follwing information and
        get your self open for exciting opportunity
      </p>

      <div class="text-center q-pb-xl">
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
        <!-- Web View Button -->
        <q-btn
          label="hr@qitsolution.co.in"
          rounded
          icon="mail"
          type="a"
          outline
          color="primary"
          class="gt-xs q-mx-md"
        />
        <!-- Mobile View Button -->
        <q-btn
          label="hr@qitsolution.co.in"
          rounded
          icon="mail"
          outline
          color="primary"
          target="_blank"
          class="lt-sm q-mx-md"
        />
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
      loading: false,
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
          label: "Technology / Requirements",
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
        title: "Quantum | Career At Quantum",
        keywords:
          "Career in SAP, Placement,IT Jobs, SAP Job in Surat,sap job in gujarat,sap jobs,Job,Web Development,Career",
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
.background {
  background: linear-gradient(132deg, #c31432, #240b36);
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
  background: url("~assets/career-bg.jpeg") !important;
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
