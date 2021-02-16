import React from 'react';

const index = (props) => {
    return (
        <>
        <tr>
          <th>
            <img
              src={props.person.picture.large}
              width='75'
              height='75'
            ></img>
          </th>
          <td>
            <p>{props.person.name.first} {props.person.name.last}</p>
          </td>
          <td>{props.person.phone}</td>
          <td>{props.person.email}</td>
          <td>{props.person.dob.date}</td>
        </tr>
      </>
    );
};

export default index;