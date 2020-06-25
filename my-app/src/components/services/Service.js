import React, { Component, Fragment } from 'react';
import {Container, Row, Col, } from 'react-bootstrap';
import graphicsLogo from '../../asset/Image/graphics.svg';
import webLogo from '../../asset/Image/web.svg';
import mobileLogo from '../../asset/Image/mobile.svg';
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";
import Loading from "../Loading/Loading";

class Service extends Component {

    constructor(){
        super();
        this.state={
            myData:[],
            loading:true
        }
    }



    componentDidMount(){
         RestClient.GetRequest(AppUrl.Services).then(result=>{
             this.setState({myData:result,loading:false})
         })
    }
    render() {
         if(this.state.loading==true){
        return <Loading/>;
    }else{      
        const myList=this.state.myData;
       const myView= myList.map(myList=>{
           return <Col lg={4} md={6} sm={12}>
                       <div className="serviceCard text-center">
                           <img src={myList.service_logo}/>
                           <h2>{myList.service_name}</h2>
                           <p>{myList.service_description}</p>
                           </div>                   
                     </Col>

        })
    

    
        return (
            <Fragment>
                <Container className="text-center">
                 <h1 className="mainTittle">My Services</h1>
                 <Row>
                    
                    {myView}

                     </Row>   
                </Container>
                
            </Fragment>
        );
    }
    }
}

export default Service;