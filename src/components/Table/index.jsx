import React, { Component } from 'react'

class index extends Component {
  render () {
    return (
      <div>
        <table className='table'>
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
            <tr>
              <th>
                <img
                  src='https://images.unsplash.com/photo-1528679382855-71c1ab151b12?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGhlYWRzaG90fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
                  width='75'
                  height='75'
                ></img>
              </th>
              <td>
                <p>Lisa Bean</p>
              </td>
              <td>(404)-867-5309</td>
              <td>LisaBean@Aol.com</td>
              <td>10/14/92</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default index
