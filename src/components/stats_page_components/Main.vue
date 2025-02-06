<script setup>
  import Login from './Login.vue';
  import Stats from './Stats.vue';
</script>

<template>
  
  <span v-if = "got">
    <Stats :data = "data" />
  </span>
  <span v-else>
    <Login @statsLogged = "logged"/>
    
  </span>
  
  
</template>

<script>

export default {
  data() {
    return {
      got: false,
      data: {}
    }
  },
  methods: {
    logged(data) {
      this.got = true;
      this.data = data.info;
      console.log("Logged successfully! " + JSON.stringify(data))
      
    }
  }
}

</script>

