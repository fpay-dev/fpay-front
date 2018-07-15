<template>
  <div>
    <h3>收银台</h3>
    <div>
      <ul>
        <pay-way-entry v-for="payWay in payWays" :key='payWay.value' :pay-way='payWay' v-model="payWayChecked" />
      </ul>
    </div>
    <button >{{ payWayChecked }}</button>
  </div>
</template>

<script src="./js/common.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./css/common.css"></style>
