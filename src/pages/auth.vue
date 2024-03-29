<template>
  <div class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center">
      
    <div>
      <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md bg-white"
      style="width:350px; height:400px"
    >
      <div class="text-h4 text-primary q-pa-md">
        LOGIN
      </div>
      <q-input
        filled
        class="q-pa-md" 
        v-model="email"
        label="Your Email *"
        hint="Enter Your Email"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
        style="width:320px"
      />

      <q-input
        filled
        type="password"
        class="q-pa-md"
        v-model="pass"
        style="width:320px"
        label="Your password *"
        hint="Password is case-sensitive"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <div class="q-pa-md">
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import 'firebase/auth';

export default {
  name: 'Error404',
  data () {
    return {
      email: null,
      pass: null,
    }
},
methods: {
    onSubmit () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.pass)
        .then(data => {
          this.$router.push('/dashboard')
        })
        .catch(error => {
          this.$q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Something went wrong try again later :('
          })
        })
    },

    onReset () {
      this.email = null
      this.pass = null
    }
  }
}
</script>
