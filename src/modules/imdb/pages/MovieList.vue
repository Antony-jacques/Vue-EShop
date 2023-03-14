<template>
  <div>
    movies

    <VueTable :data="cities" :fields="columns" :api-mode="false"></VueTable>
  </div>
</template>

<script>
//import axios from 'axios'
import geoApi from "@/modules/imdb/api";
import { mapActions} from 'vuex'

export default {
  name: 'movieList',
  data() {
    return {
      cities: null,
      columns: ['nom']
    }

  },
  async mounted() {
    const result = await geoApi.get(`communes`,
        {
          params: {
            fields: 'nom,code,codesPostaux,codeDepartement,codeRegion,population',
            geometry: 'centre'
          }
        })
    console.log('loaded', result)
    this.cities = result.data.slice(0, 25)
  },
  methods : {
    ...mapActions({
      getMovies: 'getMovies'
    })
  }
}
</script>