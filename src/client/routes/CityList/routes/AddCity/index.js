import { injectReducer } from '../../../../store/reducers'

export default (store) => ({
  path : 'add',

  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */

      const AddCity = require('./containers/AddCityContainer').default
      const reducer = require('../../../../modules/cities').default

      injectReducer(store, { key: 'cities', reducer : reducer })

      /*  Return getComponent   */
      cb(null, AddCity)

    /* Webpack named bundle   */
  }, 'add-city')
  }
})
