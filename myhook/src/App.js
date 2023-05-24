
import React, { useState } from 'react'
import "./App.css"
import ToAdd from './ToAdd';
import List from './List';




function App() {
   
  

  const [person,setPerson]=useState([    //initialition d'un hook qui est notre fake Data
    {name:"Dridi",surname:"Alaa",email:"Drofiala@gmail.com",password:"123",adress:"05 Rue Damas Rades Melienne",country:"Tunisia",zip:"2040" }
  ])
  const add =(ToAdd)=>{               //création d'une fonction qui nous modifie le hook que ns avons créer à l'aide du commende set 
   setPerson([...person,ToAdd])       // modification du hook person on utilisant spread syntax pour décomposer le tableau en eléments et aprés ajouter un autre élement 
  }

  return (
   <div className='contour'>
   <ToAdd add={add}/>                  {/*on passe add comme props*/}
   
   <List persons={person}/>           {/*on passe add comme props*/}

   </div>
  );
}

export default App;
