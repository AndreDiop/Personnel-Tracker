import React, { Component } from 'react'
import TableRow from "../TableRow"

class index extends Component {
  render () {
    return (
      <section>
        <div className='container'>
          <div className='columns is-centered is-centered  '>
            <div className='column is-narrow has-text-centered'>
              <table className='table is-bordered is-narrow is-centered'>
                <thead>
                  <tr>
                    <th>
                      <abbr title='Picture'>Picture</abbr>
                    </th>
                    <th>Name</th>
                    <th>
                      <abbr title='Phone'>Telephone</abbr>
                    </th>
                    <th>
                      <abbr title='Email'>Email</abbr>
                    </th>
                    <th>
                      <abbr title='Dob'>DOB</abbr>
                    </th>
                  </tr>
                </thead>
                <tbody>
                <TableRow/>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default index
