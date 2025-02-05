<script setup>
  import axios from 'axios';
  import EventHandler from '@/assets/EventHandler';
</script>

<template>

</template>

<script>
export default {


  data() {
    return {
      data: {}
    };
  },
  methods: {
    async makeRequest(file) {
      // console.warn("SENDING: " + JSON.stringify(this.model))
      // this.$emit("sent");
      try {
        alert("Sending code: " + this.code)
        window.open("https://www.w3schools.com");
        const response = await axios.post(file, {code: this.code});
        // alert("Sent!")
        // this.$emit("formResponse", {success: true, data: response.data})
        // EventHandler.emit("formResponse", {success: true, data: response.data})
      } catch (error) {
        // alert("Error!")
        // this.$emit("formResponse", {success: false, error: error})
        // EventHandler.emit("formResponse", {success: false, error: error})
      }
    },

  },

  mounted() {
    let linkPrefix = "";
      if (process.env.NODE_ENV == 'development') {
        linkPrefix = "http://localhost:5174" //you have to configure your local server to host files on this adress
      }
      this.makeRequest(linkPrefix + this.action)
  },

  props: {
    action: {
        type: String,
        default: "/assets/php/utils/linkStats.php"
    },
    code: {
        type: String,
    },
  }

}

</script>