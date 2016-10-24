import React from 'react'

export default ({ value, onChange }) => (
  <input name="search" value={value} onChange={(e) => (onChange(e.target.value))} />
)
