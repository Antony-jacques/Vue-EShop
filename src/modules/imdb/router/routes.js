import MoviesListPage from '../pages/MovieList'
import cityListByDepartmentCode from '../pages/CityListByDepartmentCode'

export default [
    {
        path: '/movies',
        name: 'ImdbMoviesPage',
        component: MoviesListPage
    },
    {
        path: '/cities/:department',
        name: 'cityListByDepartmentCode.vue',
        component: cityListByDepartmentCode
    }

]