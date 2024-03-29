<template>
  <div>
    <p class="text-h4 text-center q-my-xl" data-aos="fade-up">Post the New Job</p>

    <q-card class="my-card q-mx-xl">
      <q-card-section>
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <div>
            <q-input
              filled
              color="secondary"
              v-model="job"
              label="Job Title"
              hint="Current Opening"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Please type something']"
            />
            <br />
            <q-input
              filled
              color="secondary"
              v-model="tech"
              label="Technology Name"
              hint="Needed Technology"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Please type something']"
            />
            <br />
            <q-input
              filled
              color="secondary"
              v-model="exp"
              label="experience"
              hint="Needed Experience"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Please type something']"
            />
          </div>
          <div>
            <q-btn label="Submit" type="submit" color="primary" rounded />
            <q-btn
              label="cancle"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
              rounded
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>

    <q-card class="my-card q-ma-xl">
      <q-card-section style="text-aline: center">
        <q-table
          class="my-sticky-header-table"
          title="Job Posted"
          :data="job"
          :columns="columnsJ"
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
                @click="deleteRow(props)"
                icon="create"
              ></q-btn>
            </q-td>
          </template>
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
      mobile: false,
      job: null,
      exp: null,
      tech: null,
      job: [],
      loading: false,
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
    };
  },
  mounted() {
    this.fetchdataJ();
  },
  methods: {
    onSubmit() {
      if (name != null) {
        db.collection("placement")
          .add({ job: this.job, experience: this.exp, technology: this.tech })
          .then(() => {
            this.$q.notify({
              color: "primary",
              textColor: "white",
              icon: "cloud_done",
              message: "Submitted",
            });
          })
          .catch((error) => {
            this.$q.notify({
              color: "red-5",
              textColor: "white",
              icon: "warning",
              message: "Try Again after some time! sorry",
            });
          });
        this.onReset();
      }
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
        message: "Job Deleted",
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

    onReset() {
      this.job = null;
      this.tech = null;
      this.exp = null;
    },
  },
};
</script>

<style></style>
