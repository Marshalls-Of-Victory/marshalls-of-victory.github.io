<script setup>

</script>

<template>
  <span class = "statsContainer">

  
  <h2>Custom link visit statistics</h2>
  <!-- **STATYSTYKI** -->
  <!-- {{ JSON.stringify(data) }} -->
  
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Code</th>
        <th scope="col">Description (?)</th>
        <th scope="col">Total Visits</th>
        <th scope="col">Unique Visitors</th>
        <th scope="col">Visitor IPs and their visit counts</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for = "(entries, code) in data.codes">
        <th scope="row">{{ code }}</th>
        <th scope="row">{{ (data.descs[code] != undefined ? data.descs[code] : "") }}</th>
        <td>{{ this.getTotalVisits(entries) }}</td>
        <td>{{ this.getUniqueVisitors(entries) }}</td>
        <td>

          <ul class="list-group">
            <span v-for = "(num, ip) in entries">{{ ip + (data.aliases[ip] != undefined ? " (" + data.aliases[ip] + ")" : "" ) }}: {{ num }}</span>
          </ul>

        </td>
        
      </tr>

    </tbody>
  </table>

  </span>
</template>
<script>
export default {

  data() {
    return {
      
    };
  },

  methods: {
    getTotalVisits(entries) {
      let amount = 0;
      for (const [ip, num] of Object.entries(entries)) {
        amount += num;
      }
      return amount
    },
    getUniqueVisitors(entries) {
      let amount = 0;
      for (const [ip, num] of Object.entries(entries)) {
        amount++;
      }
      return amount
    }
  },
  created() {
    
  },

  props: {
    data: {
        type: Object,
        default: {}
    }
  }

}

</script>

<style scoped>
.statsContainer{
  display: block;
  padding-left: 10vw;
  padding-right: 10vw;
  padding-top: 20px;
}
</style>