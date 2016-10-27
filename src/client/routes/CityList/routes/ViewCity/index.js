import { injectReducer } from '../../../../store/reducers'

export default (store) => ({
  path : 'cities/:city',

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const ViewCity = require('./containers/ViewCityContainer').default

      const reducer = require('modules/weather').default

      injectReducer(store, { key: 'weather', reducer : reducer })

      cb(null, ViewCity)
  }, 'view-city')
  }
})
