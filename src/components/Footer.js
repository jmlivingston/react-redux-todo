import React from 'react'

import { filterTypes } from '../types'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <div className='btn-group'>
    <FilterLink filter={ filterTypes.SHOW_ALL }>
      All
    </FilterLink>
    <FilterLink filter={ filterTypes.SHOW_ACTIVE }>
      Active
    </FilterLink>
    <FilterLink filter={ filterTypes.SHOW_COMPLETED }>
      Completed
    </FilterLink>
  </div>
)

export default Footer
