import PropTypes from 'prop-types'
import React from 'react'

const Error = ({ error }) => {
    if(!error) {
        return null
    }
    return <div className='alert alert-danger'>{ error }</div>
}

Error.PropTypes ={
    error: PropTypes.string
}

export default Error
