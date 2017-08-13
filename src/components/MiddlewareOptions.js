import React, { Component } from 'react'

class MiddlewareOptions extends Component {
  componentDidMount () {
    this.props.updateMiddleware(this.props.middleware)
  }

  render () {
    return <div>
      <h4>Middleware Option</h4>
      <div className="custom-controls-stacked">
        {
          Object.keys(this.props.middlewareList).map(prop => {
            const value = this.props.middlewareList[prop]
            return <label key={prop} className="custom-control custom-radio">
              <input name='middleware' type='radio' className="custom-control-input"
                value={value}
                onChange={e => this.props.updateMiddleware(e.target.value)}
                checked={this.props.middleware === value} />
              <span className="custom-control-indicator"></span>
              <span className="custom-control-description">{value}</span>
            </label>
          })
        }
      </div>
    </div>
  }
}

export default MiddlewareOptions
