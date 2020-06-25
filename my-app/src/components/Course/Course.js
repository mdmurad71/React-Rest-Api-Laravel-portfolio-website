import React, { Component, Fragment } from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";

class Course extends Component {

     constructor(){
        super();
        this.state={
            myData:[]
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.CourseHome).then(result=>{
            this.setState({myData:result})
        })
    }

    render() {
    const myList=this.state.myData;
    const myView=myList.map(myList=>{

        return  <Col lg={6} md={12} sm={12}>
                    <Row className="p-3">

                    
                    <Col lg={6} md={6} sm={12}>
                    <img className="courseImg" src={myList.small_image}/>
                    </Col>
                            <Col lg={6} md={6} sm={12}>
                                <h5 className="text-justify courseTitle">{myList.short_title}</h5>
                                <p className="text-justify courseDes">{myList.short_description}</p>
                                <Link className="courseDetails float-left" to={"/CourseDetails/"+myList.id}>Details</Link>
                            </Col>
                            </Row>
                            </Col>

    })


    
        return (
            <Fragment>
                <Container className="text-center">
                        <h1 className="serviceMainTitle">OUR COURSES</h1>
                <Row>
                
                    {myView}
                    
                </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Course;
