<template>
  <div>
  <h1>
    movies
  </h1>

    <div>
      <h1>
        Liste limitée a <input v-model="numberOfCities" type="number"  > villes
      </h1>
      <h2>
        {{numberOfCities}}
      </h2>
      <VueTable :data="citiesList" :fields="columns" :api-mode="false"></VueTable>
    </div>

<!--    <VueTable :api-url="tableUrl" :fields="columns" data-path=""></VueTable>-->
  </div>
</template>

<script>
//import axios from 'axios'
import geoApi from "../api"

export default {
  name: 'cityListByDepartmentCode.vue',
  data() {
    return {
      cities: null,
      columns: ['nom', 'codesPostaux'],
      citiesList: null,
      numberOfCities: 10,
    }

  },

  async mounted() {
    const result = await geoApi.get(`communes`,
        {
          params: {
            codeDepartment: this.departmentCode,
            fields: 'nom,code,codesPostaux,codeDepartement,codeRegion,population',
            geometry: 'centre'
          }
        })
    console.log('loaded', result)
    this.cities = result.data.slice(0, 25),
        this.citiesList = result.data.slice(0, this.numberOfCities)
  },
  async updated() {
    this.$nextTick(async function () {
      console.log('update !' , this.cities.slice(0, this.numberOfCities))
      console.log(this.numberOfCities)
     //    this.citiesList = this.cities.slice(0, this.numberOfCities)

    })

  },
  computed: {
    departmentCode() {
      return this.$route.params.department
    },
    tableUrl() {

      const res = geoApi.getUri({
        url: "communes",
        params: {
          codeDepartment: this.departmentCode,
          fields: 'nom,code,codesPostaux,codeDepartement,codeRegion,population',
          geometry: 'centre'
        }
      })
      return res;
    }
  },
  watch: {
    numberOfCities(){
      console.log('numberOfCities a été modifié')
      this.citiesList = this.cities.slice(0, this.numberOfCities)
    },
  }
}
</script>
