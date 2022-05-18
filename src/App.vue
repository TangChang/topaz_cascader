<template>
  <CitySelect :list="list"></CitySelect>
</template>

<script>
import CitySelect from './components/CitySelect.vue'
export default {
  name: 'App',
  data() {
    return {
      list: [
        {
          id: "1000",
          name: "华东",
          nodes: [{
            id: "100012",
            name: "上海",
            prams: "1000",
            nodes: [
              {
                id: "1000121",
                name: "宝山",
                prams: "100012",
                // nodes: [
                //   {
                //     id: "100012101",
                //     name: "宝山小区",
                //     prams: "100012"
                //   },
                //   {
                //     id: "100012202",
                //     name: "宝山小区2",
                //     prams: "100012"
                //   }
                // ]
              },
              {
                id: "1000122",
                name: "浦东",
                prams: "100012"
              }
            ]
          }]
        },{
          id: "1001",
          name: "华北",
          nodes: [{
            id: "100101",
            name: "北京",
            prams: "1001",
            nodes: [
              {
                id: "10010101",
                name: "海淀",
                prams: "100101"
              },
              {
                id: "10010102",
                name: "朝阳",
                prams: "100101"
              }
            ]
          }]
        },{
          id: "1003",
          name: "华中"
        }
      ]
    }
  },
  components: {
    CitySelect
  }
}
</script>

<style>
</style>
