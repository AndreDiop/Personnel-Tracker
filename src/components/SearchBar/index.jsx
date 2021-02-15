import React, { Component } from 'react'

class index extends Component {
  render () {
    return (
      <div>
        <div className='container'>
          <div className='columns is-two-fifths is-centered'>
            <div className='column is-two-fifths'>
              <div className='control has-icons-left has-icons-right'>
                <input className='input' type='text' placeholder='Search' />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default index
