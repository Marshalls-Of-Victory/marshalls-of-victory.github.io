<script setup>
  import axios from 'axios';
  import EventHandler from '@/assets/EventHandler';
</script>

<template>
  <form @submit.prevent="submitted">
    <slot></slot>
  </form>
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
      console.warn("SENDING: " + JSON.stringify(this.model))
      try {
        const response = await axios.post(file, this.model);
        this.$emit("formResponse", {success: true, data: response.data})
        EventHandler.emit("formResponse", {success: true, data: response.data})
      } catch (error) {
        this.$emit("formResponse", {success: false, error: error})
        EventHandler.emit("formResponse", {success: false, error: error})
      }
    },

    submitted() {
      let linkPrefix = "";
      if (process.env.NODE_ENV == 'development') {
        linkPrefix = "http://localhost:5174" //you have to configure your local server to host files on this adress
      }
      this.makeRequest(linkPrefix + this.action)
    }
  },

  created() {

  },

  props: {
    action: {
        type: String,
        default: ""
    },
    model: {
        type: Object,
        default: {}
    },
  }

}

</script>