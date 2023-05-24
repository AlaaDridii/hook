import React from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

    
//passer les states comme des props 
const Tableau = ({name,surname,email,password,adress,country,zip}) => {
    console.log("this is name",name)
  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Password</th>
            <th>Adress</th>
            <th>City</th>
            <th>Zip</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{email}</td>
            <td>{password}</td>
            <td>{adress}</td>
            <td>{country}</td>
            <td>{zip}</td>
            

          </tr>
        </tbody>
        </Table>
    </div>
  )
}

export default Tableau
