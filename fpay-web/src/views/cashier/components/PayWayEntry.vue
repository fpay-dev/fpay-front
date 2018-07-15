<template>
  <li>
    <input type="radio" :name="payWay.name" :id="payWay.id" :value="payWay.value" @change="$emit('change', $event.target.value)" />
    <label :for="payWay.id">{{ payWay.displayName }}</label>
  </li>
</template>

<script>

export default {
  name: 'PayWayEntry',
  model: {
    event: 'change',
    prop: 'value'
  },
  props: {
    payWay: {
      validator: function (value) {
        return true
        // return value.id === 'AF';
      }
    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
