import React from 'react'

export const CoreLayout = ({ children }) => (
  <div className='container'>
    <div>
      <p>as</p>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
