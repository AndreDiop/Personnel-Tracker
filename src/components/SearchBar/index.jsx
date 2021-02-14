import React, { Component } from 'react'

class index extends Component {
  render () {
    return (
      <div>
        <div className='container is-fluid'>
          <div className='notification is-white'>
            <div className='control'>
              <input
                className='input is-hovered'
                type='text'
                placeholder='Search'
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default index
