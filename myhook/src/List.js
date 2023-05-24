import React from 'react'
import Tableau from './Tableau'

const List = ({persons}) => {
  return (
    <div>
       {persons.map((person)=> <Tableau name={person.name} surname={person.surname} email={person.email} password={person.password} adress={person.adress} country={person.country} zip={person.zip}/>)}

    </div>
  )
}

export default List
