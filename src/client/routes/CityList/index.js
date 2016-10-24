import { injectReducer } from '../../store/reducers'

export default (store) => ({
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */

      const CityList = require('./containers/CityListContainer').default

      const reducer = require('../../modules/weather').default
      
      injectReducer(store, { key: 'weather', reducer : reducer })

      /*  Return getComponent   */
      cb(null, CityList)

    /* Webpack named bundle   */
  }, 'cities')
  }
})
