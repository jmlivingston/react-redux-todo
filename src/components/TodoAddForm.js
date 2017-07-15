import PropTypes from 'prop-types'
import React from 'react'

import Error from './Error'

const TodoAddForm = ({ error, todoAddValue, todoChange, todoSubmit }) => {
    const inputChange = e => {
        todoChange(e.target.value)
    }
    const submit = e => {
        e.preventDefault()
        todoSubmit()
    }
    return (
        <div>
            <form className='form-inline' onSubmit={submit}>
                <input className='form-control' value={todoAddValue} onChange={inputChange} />
                <button className='btn btn-primary ml-1' type="submit" disabled={!todoAddValue}>
                    Add
                </button>
            </form>
            <Error error={error} />
        </div>
    )
}

TodoAddForm.propTypes = {
    todoAddValue: PropTypes.string.isRequired,
    todoChange: PropTypes.func.isRequired,
    todoSubmit: PropTypes.func.isRequired
}

export default TodoAddForm
