import React, { Component, Fragment } from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import RestClient from "../../RestApi/RestClient";
import AppUrl from "../../RestApi/AppUrl";

class Contactsection extends Component {

constructor(){
    super();
    this.state={
      
            name:"",
            email:"",
            message:""
        }

       
    }

    


   

    


    sendContact(){
      let name= document.getElementById("name").value;
      let email= document.getElementById("email").value;
      let message= document.getElementById("message").value;

      let jsonObject={name:name, email:email, message:message};

      RestClient.PostRequest(AppUrl.ContactSend,JSON.stringify(jsonObject)).then(result=>{
        alert(result);
      }).catch(error=>{
        alert("Error");
      })


    }


    render() {
        return (
            <Fragment>
            <Container className="mt-5">
            <Row>
             <Col lg={6} md={6} sm={12}>
             <Form>
             <h1 className="serviceName">Quick Connect</h1>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control id="name" type="text" placeholder="Enter your name" />
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control id="email" type="email" placeholder="Enter your email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

   <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control id="message" as="textarea" rows="3" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button onClick={this.sendContact} variant="primary" >
    Submit
  </Button>
</Form>

             </Col>
            <Col lg={6} md={6} sm={12}>
                             <h1 className="serviceName">Discuss Now</h1>
                            <p className="serviceDescription" >DC Road, Kalam Colony,
                                 Monsur Building 2nd Floor, Chawkbazar, Chattogram</p>
                            <p className="serviceDescription" > <FontAwesomeIcon  icon={faEnvelope} /> mdmurad1685@gmail.com</p>
                            <p className="serviceDescription" > <FontAwesomeIcon  icon={faPhone} />+8801726158671</p>
            </Col>
            </Row>
            
            </Container>
                
            </Fragment>
        );
    }
}

export default Contactsection;