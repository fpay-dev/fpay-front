import PayWayEntry from '../components/PayWayEntry'
import axios from 'axios'

const cashierApi = axios.create({
  baseURL: 'http://localhost:8888/cashier',
  timeout: 1000
})

let data = {
  payWays: [
    {
      id: 'id',
      name: '名称',
      displayName: '展示名称',
      value: '值',
      isChecked: '是否选中'
    }
  ],
  payWayChecked: "选中的支付方式"
}

export default {
  name: 'Cashier',
  data: function () {
    return data
  },
  methods: {
    confirmPayment: function () {

    },
    changePayWay: function () {

    }
  },
  components: {
    PayWayEntry
  },
  created: function () {
    cashierApi.get('/' + this.$route.params.platform + '/' + this.$route.params.businessId)
    .then(function (response) {
      console.log(response.data)
      data.payWays = response.data
      data.payWays.forEach(function (payWay) {
        payWay.id = payWay.name + '_' + payWay.value
        if(payWay.isChecked){
          payWayChecked = payWay.value
        }
      })
    })
  }
}
