<template>
  <div>
    <!-- <div v-test>{{msg | filter1}}</div> -->
    <!-- <div :class="{active: isActive, 'text-danger': hasError}" :style="{}"></div> -->
<city-header></city-header>
<city-search :cities="cities"></city-search>
    <city-header-tab></city-header-tab>

    <city-list :hotCities="hotCities" :cities="cities"></city-list>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityHeaderTab from './components/HeaderTab'
import CityList from './components/List'
import ApiUrl from '@/config/api_url'
import axios from 'axios'

export default {
  name: 'City',
  data () {
    return {
      hotCities: [],
      cities: {},
      msg: 'helloworld',
      view: true
    }
  },
  filters: {
    filter1: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  directives: {
    test: {
      inserted (el) {
        console.log(el)
        console.log(arguments)
        el.style.width = '200px'
        el.style.height = '200px'
        el.style.background = 'pink'
      }
    }
  },
  components: {
    CityHeader,
    CityHeaderTab,
    CityList,
    CitySearch
  },
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter')
    next()
  },
  methods: {
    getCityInfo () {
      axios.get(ApiUrl.api + '/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      if (res.data.ret && res.data) {
        const data = res.data.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    }
  },
  mounted () {
    console.log('mounted')
    this.getCityInfo()
  },
  created () {
    console.log(this.$route.query)
  }
}
</script>

<style scoped>

</style>
