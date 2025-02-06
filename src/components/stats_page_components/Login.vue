<script setup>
  import PHPForm from '../utils/PHPForm.vue';
</script>

<template>
<span id = "loginContainer">
  <PHPForm role="form" action="/assets/php/utils/getStats.php" @formResponse="response" :model = "form" @sent = "sent" >
    <span v-if = "errorMessage != ''">
      <div class="alert alert-danger" role="alert">
        {{ errorMessage }}
      </div>
    </span>

    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model = "form.password">
    </div>
    <br>
    <button class="btn btn-primary">Enter</button>
  </PHPForm>
</span>
</template>

<style scoped>

/* .loginContainer{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
} */

form {
  
  width: 50%;
  margin: auto;
  margin-top: 15%;
}
</style>
<script>


export default {
  methods: {
    sent() {
      // this.sending = true;
    },
    response(e) {
      // this.sending = false
      console.warn("Wysłano")
      if (e.success) {
        console.warn("Sukces")
        console.warn("Data: " + JSON.stringify(e.data))
        if (e.data.logged) {
          console.warn("Otrzymano")
          this.$emit("statsLogged", e.data)
          // this.sentSuccess = true
          // console.log("Wiadomosc wyslana");
          // EventHandler.emit("refreshTranslator")
        } else {
          // this.$emit("statsError", "An error occured.")
          this.errorMessage = "An error occured."

        }
      } else {

      }
    }
  },
  data() {
    return {
      errorMessage: "",
      form: {},
      data: {}
    }
  }
}

</script>