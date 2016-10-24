import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import _ from 'lodash'


import { resetCities, fetchCities } from '../../../../../modules/cities'
import { addCity } from '../../../../../modules/weather'
import SearchInput from '../components/SearchInput'
import Listing from '../components/Listing'

class AddCityContainer extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(resetCities())
  }

  render() {
    const { cities, onChange, onSelect } = this.props

    return (
      <div>
        <h1>Add city</h1>
        <SearchInput onChange={onChange} />
        <Listing values={cities} onSelect={onSelect} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { cities : { result, entities } } = state

  const cityList = result.reduce((total, id) => {
    const { name, country } = entities.cities[id]

    total[id] = `${name} (${country})`

    return total
  }, {})

  return {
    cities : cityList
  }
}

const mapDispatchToProps = (dispatch) => {
  const onChange = _.debounce((value) => {
    dispatch(fetchCities(value))
  }, 500);

  const onSelect = (value) => {
    dispatch(addCity(value))
    
    browserHistory.push('/')
  }

  return {
    dispatch,
    onChange,
    onSelect
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCityContainer)
