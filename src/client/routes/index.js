// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import CityListRoute from './CityList'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ([{
  path        : '/',
  component   : CoreLayout,
  indexRoute  : CityListRoute(store)
}])

export default createRoutes