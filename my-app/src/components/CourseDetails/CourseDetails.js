import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import ReactPlayer from 'react-player';
import RestClient from "../../RestApi/RestClient";
import ReactHtmlParser from 'react-html-parser';
import AppUrl from "../../RestApi/AppUrl";


class CourseDetails extends Component {

    constructor(props){
        super(props);
                 
    }

    render() {

        let ShortDesc="";
        let LongTitle="";
        let LongDesc="";
        let TotalLecture="";
        let TotalStudent="";
        let VideoUrl="";
        let CourseLink="";
        let SkillAll="";
     

        let CourseDetailsArray=this.props.id;
        if(CourseDetailsArray.length==1){
            ShortDesc=CourseDetailsArray[0]['short_description'];
            LongTitle=CourseDetailsArray[0]['long_title'];
            LongDesc=CourseDetailsArray[0]['long_description'];
            TotalLecture=CourseDetailsArray[0]['total_lecture'];
            TotalStudent=CourseDetailsArray[0]['total_student'];
            VideoUrl=CourseDetailsArray[0]['video_url'];
            CourseLink=CourseDetailsArray[0]['course_link'];
            SkillAll=CourseDetailsArray[0]['skill_all'];


        }

        return (
            <Fragment>
                <Container fluid={true} className="topFixedPage p-0" >
                    <div className="topPageOverlay">
                        <Container className="topPageContentCourse">
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <h3 className="CourseFullTitle">{LongTitle}</h3>
                                    <h5 className="CourseSubTitle">{TotalLecture}</h5>
                                    <h5 className="CourseSubTitle mt-0">{TotalStudent}</h5>
                                </Col>

                                <Col sm={12} md={6} lg={6}>
                                    <p className="CourseDes">{LongDesc} </p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
                <Container className="mt-5">
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <h1 className="serviceName">Skill I Get</h1>
                                    { ReactHtmlParser(SkillAll)}
                                    <Button variant="primary">More Info</Button>
                                </Col>

                                <Col sm={12} md={6} lg={6}>
                                    <ReactPlayer   url={VideoUrl} width="100%" height="100%" playing controls />

                                </Col>
                            </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CourseDetails;