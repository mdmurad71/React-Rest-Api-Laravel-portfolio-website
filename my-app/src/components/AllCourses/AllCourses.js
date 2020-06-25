import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";
import Loading from "../Loading/Loading";


class AllCourses extends Component {


     constructor(){
        super();
        this.state={
            myData:[],
            loading:true
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.CourseAll).then(result=>{
            this.setState({myData:result,loading:false})
        })
    }

    


    render() {


        if(this.state.loading==true){
        return <Loading/>;
    }else{

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
                                <Link className="courseDetails float-left " to={"/CourseDetails/"+myList.id}>Details</Link>
                            </Col>
                            </Row>
                            </Col>

    })









        return (
            <Fragment>
                <Container className="text-center mt-5">
                    <Row>
                        {myView}
                    </Row>
                </Container>
            </Fragment>
        );

    }


   
    }
}

export default AllCourses;