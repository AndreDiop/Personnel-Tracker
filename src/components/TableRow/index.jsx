import React from 'react';

const index = (props) => {
    return (
        <>
        <tr>
          <th>
            <img
              src={props.image}
              width='75'
              height='75'
            ></img>
          </th>
          <td>
            <p>{props.name}</p>
          </td>
          <td>{props.phone}</td>
          <td>{props.email}</td>
          <td>{props.dob}</td>
        </tr>
      </>
    );
};

export default index;