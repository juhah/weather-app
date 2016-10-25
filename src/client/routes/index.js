// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'

import CityListRoute from './CityList'
import AddCityRoute from './CityList/routes/AddCity'
import ViewCityRoute from './CityList/routes/ViewCity'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ([
  {
    path        : '/',
    component   : CoreLayout,
    indexRoute  : CityListRoute(store),
    childRoutes : [
      AddCityRoute(store),
      ViewCityRoute(store)
    ]
  }
])

export default createRoutes
