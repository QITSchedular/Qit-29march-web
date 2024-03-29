<template>
  <div>

        <p class="text-h4 text-center q-my-xl" data-aos="fade-up">Enquiry Dashboard</p>


    <q-card class="my-card q-ma-xl">
      <q-card-section style="text-aline: center">
        <q-table
          class="my-sticky-header-table"
          title="Demo Request"
          :data="demo"
          :columns="columnsD"
          :loading="loading"
          color="primary"
          row-key="row"
          flat
          bordered
        >
          <template v-slot:body-cell-actions="props">
            <q-td :props="props">
              <q-btn
                dense
                round
                flat
                color="grey"
                @click="updateRow(props)"
                icon="create"
              ></q-btn>
            </q-td>
          </template>
          <template v-slot:body-cell-Status="props">
            <q-td :props="props">
              <q-badge
                color="green"
                text-color="white"
                label="Active"
                v-if="props.row.status"
                style="font-size: 15px"
              />
              <q-badge
                color="red"
                text-color="white"
                label="Close"
                v-else
                style="font-size: 15px"
              />
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>

    <q-card class="my-card q-ma-xl">
      <q-card-section style="text-aline: center">
        <q-table
          class="my-sticky-header-table"
          title="NewsLetter Subscriber"
          :data="news"
          :columns="columnsN"
          :loading="loading"
          color="primary"
          row-key="row"
          flat
          bordered
        >
        </q-table>
      </q-card-section>
    </q-card>

    <q-card class="my-card q-ma-xl">
      <q-card-section style="text-aline: center">
        <q-table
          class="my-sticky-header-table"
          title="Traning Request"
          :data="traning"
          :columns="columnsT"
          :loading="loading"
          color="primary"
          row-key="row"
          flat
          bordered
        >
        </q-table>
      </q-card-section>
    </q-card>

    <q-card class="my-card q-ma-xl">
      <q-card-section style="text-aline: center">
        <q-table
          class="my-sticky-header-table"
          title="Contact Us"
          :data="enq"
          :columns="columnsC"
          :loading="loading"
          color="primary"
          row-key="row"
          flat
          bordered
        >
        </q-table>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import firebase from "firebase";
const db = firebase.firestore();

export default {
  data() {
    return {
      date: new Date().toISOString().slice(0, 10),
      demo: [],
      enq: [],
      news: [],
      traning: [],
      search: "",
      loading: false,
      columnsD: [
        {
          row: "name",
          required: true,
          label: "Organization",
          align: "left",
          field: (row) => row.name,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          row: "email",
          required: true,
          label: "Email-ID",
          align: "left",
          field: (row) => row.email,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          row: "date",
          required: true,
          label: "Date",
          align: "left",
          field: (row) => row.date,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "Status",
          label: "Status",
          field: (row) => row.status,
          format: (val) => `${val}`,
          align: "center",
          sortable: true,
        },
        {
          name: "actions",
          label: "Actions",
          field: "",
          align: "center",
        },
      ],
      columnsJ: [
        {
          row: "job",
          required: true,
          label: "Job Title",
          align: "left",
          field: (row) => row.job,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          row: "tech",
          required: true,
          label: "Technology",
          align: "left",
          field: (row) => row.tech,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          row: "exp",
          required: true,
          label: "Experience",
          align: "left",
          field: (row) => row.exp,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "actions",
          label: "Actions",
          field: "",
          align: "center",
        },
      ],
      columnsN: [
        {
          row: "email",
          required: true,
          label: "Email-ID",
          align: "left",
          field: (row) => row.email,
          format: (val) => `${val}`,
          sortable: true,
        },
      ],
      columnsT: [
        {
          row: "name",
          required: true,
          label: "Name",
          align: "left",
          field: (row) => row.name,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          row: "email",
          required: true,
          label: "Email-ID",
          align: "left",
          field: (row) => row.email,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          row: "module",
          required: true,
          label: "Module",
          align: "left",
          field: (row) => row.module,
          format: (val) => `${val}`,
          sortable: true,
        },
      ],
      columnsC: [
        {
          row: "name",
          required: true,
          label: "Name",
          align: "left",
          field: (row) => row.name,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          row: "email",
          required: true,
          label: "Email-ID",
          align: "left",
          field: (row) => row.email,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          row: "text",
          required: true,
          label: "Question",
          align: "left",
          field: (row) => row.text,
          format: (val) => `${val}`,
          sortable: true,
        },
      ],
    };
  },
  mounted() {
    this.fetchdata();
    this.fetchdataN();
    this.fetchdataT();
    this.fetchdataC();
    this.fetchdataJ();
  },
  methods: {
    fetchdata() {
      this.demo = [];

      db.collection("enquiry")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.demo.push({
              name: doc.data().name,
              email: doc.data().email,
              date: doc.data().date,
              status: doc.data().status,
              id: doc.id,
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
    fetchdataN() {
      this.news = [];

      db.collection("newsletter")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.news.push({
              email: doc.data().email,
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
    fetchdataT() {
      this.traning = [];

      db.collection("traning")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.traning.push({
              name: doc.data().name,
              email: doc.data().email,
              module: doc.data().module,
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
    fetchdataC() {
      this.enq = [];

      db.collection("contactus")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.enq.push({
              name: doc.data().name,
              email: doc.data().email,
              text: doc.data().text,
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
    fetchdataJ() {
      this.job = [];

      db.collection("placement")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.job.push({
              job: doc.data().job,
              tech: doc.data().technology,
              exp: doc.data().experience,
              id: doc.id,
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
    deleteRow(props) {
      let data = props.row.id;

      db.collection("placement")
        .doc(data)
        .delete()
        .then(() => {
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });

      this.loading = true;
      setTimeout(this.fetchdataJ, 1000);

      this.$q.notify({
        type: "positive",
        multiline: true,
        message: "Status Changed",
        timeout: 500,
      });
    },
    updateRow(props) {
      this.demo.length = 0;
      let data = props.row.id;
      let stat = !props.row.status;
      db.collection("enquiry").doc(data).update({
        status: stat,
      });
      this.loading = true;
      setTimeout(this.fetchdata, 1000);

      this.$q.notify({
        type: "positive",
        multiline: true,
        message: "Status Changed",
        timeout: 500,
      });
    },
    loader() {
      this.loading = false;
    },
  },
};
</script>

<style></style>
