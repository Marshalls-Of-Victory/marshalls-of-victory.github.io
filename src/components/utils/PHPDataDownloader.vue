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
    };
  },
  methods: {
    async makeRequest(file) {
      try {
        const response = await axios.post(file, {
          // message: this.message
        });
        this.$emit("response", {success: true, data: response.data})
        EventHandler.emit("response", {success: true, data: response.data})
      } catch (error) {
        this.$emit("response", {success: false, error: error})
        EventHandler.emit("response", {success: false, error: error})
      }
    }
  },

  created() {
    let linkPrefix = "";
    if (process.env.NODE_ENV == 'development') {
      linkPrefix = "http://localhost:5174" //you have to configure your local server to host files on this adress
    }
    this.makeRequest(linkPrefix + this.action)
    console.log("REQUEST HTTP: " + linkPrefix + this.action)
  },

  props: {
    action: {
        type: String,
        default: ""
    },
  }

}

</script>