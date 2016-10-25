import { injectReducer } from '../../../../store/reducers'

export default (store) => ({
  path : 'cities/:city',

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const ViewCity = require('./containers/ViewCityContainer').default

      cb(null, ViewCity)

  }, 'viewCity')
  }
})
