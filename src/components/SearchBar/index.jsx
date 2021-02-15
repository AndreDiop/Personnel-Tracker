import React, { Component } from 'react'

class index extends Component {
  render () {
    return (
      <section>
        <div className='container'>
          <div className='columns is-two-fifths is-centered'>
            <div className='column is-two-fifths'>
              <div className='control has-icons-left has-icons-right'>
                <input className='input' type='text' placeholder='Search' />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default index
