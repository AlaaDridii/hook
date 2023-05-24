import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

const ToAdd = ({add}) => {
    const [input,setInput]=useState('')
    const ad=()=>{
        add({name:input,surname:input,email:input,password:input,adress:input,country:input,zip:input})
    }
  return (
    <div>
        <Form>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridText">
          <Form.Label>Nom</Form.Label>
          <Form.Control onChange={(e)=>{setInput(e.target.value)}} type="texte" placeholder="Enter votre Nom" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridText">
          <Form.Label>Prénom</Form.Label>
          <Form.Control onChange={(e)=>{setInput(e.target.value)}} type="texte" placeholder="Enter votre Prénom" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={(e)=>{setInput(e.target.value)}} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e)=>{setInput(e.target.value)}} type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control onChange={(e)=>{setInput(e.target.value)}} placeholder="1234 Main St" />
      </Form.Group>

      

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control onChange={(e)=>{setInput(e.target.value)}} placeholder='Where are you born?' />
        </Form.Group>

    

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control onChange={(e)=>{setInput(e.target.value)}} placeholder='Ecrire votre code postal..' />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="cocher pour savoir que vous avez verifié vos informations personnelles" />
      </Form.Group>

      <Button onClick={()=>ad()} variant="primary">
        Ajouter
      </Button>
    </Form>
      
    </div>
  )
}

export default ToAdd
