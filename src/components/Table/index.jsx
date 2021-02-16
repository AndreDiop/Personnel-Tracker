import React, { Component } from 'react'
import TableRow from '../TableRow'
import axios from 'axios'
class index extends Component {
  state = {
    users: [],
    searchTerm: '',
    alphabetical: 'az'
  }
  componentDidMount () {
    this.getRandomUser()
  }

  getRandomUser () {
    axios
      .get('https://randomuser.me/api/?results=200')
      .then(response => {
        this.setState({ users: response.data.results })
      })
      .catch(error => {
        // handle error
        console.log(error)
      })
  }
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
                    <th>
                      Name
                      <p>
                        <button class='button'>
                          <span class='icon is-small'>
                            <i class='fas fa-sort'></i>
                          </span>
                        </button>
                      </p>
                    </th>
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
                  {this.state.users.map((user, index) => (
                    <TableRow person={user} key={index} />
                  ))}
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
