import geoApi from "@/modules/imdb/api";

export default {
    state: {

    },
    actions: {
       async getMovies(imdbStore, params) {
            const result = await geoApi.get(`communes`,
                {
                    params: {
                        fields: 'nom,code,codesPostaux,codeDepartement,codeRegion,population',
                        geometry: 'centre'
                    }
                })
            console.log('loaded', result)
            this.cities = result.data.slice(0, 25)
        }
    }
}
