import React from 'react'

import { FILTER } from '../config/constants'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <div className='btn-group'>
    <FilterLink filter={ FILTER.SHOW_ALL }>
      All
    </FilterLink>
    <FilterLink filter={ FILTER.SHOW_ACTIVE }>
      Active
    </FilterLink>
    <FilterLink filter={ FILTER.SHOW_COMPLETED }>
      Completed
    </FilterLink>
  </div>
)

export default Footer
