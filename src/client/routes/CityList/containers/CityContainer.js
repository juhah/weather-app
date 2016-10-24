import React from 'react'
import { connect } from 'react-redux'

import City from '../components/City'
import CityLoader from '../components/CityLoader'

class CityContainer extends React.Component {
  componentDidMount() {
    const { cityId, dispatch } = this.props
  }

  render() {
    const { city } = this.props

    return city ? <City title={title} /> : <CityLoader />
  }
}

const mapStateToProps = (state) => {
  return {
    cityId : {}
  }
}

export default connect(mapStateToProps)(CityContainer)
