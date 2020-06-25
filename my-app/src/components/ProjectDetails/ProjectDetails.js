import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";
import ReactHtmlParser from 'react-html-parser';


class ProjectDetails extends Component {

    constructor(props){
        super();
        this.state={
            myProjectID:props.id,
            project_description:" ",
            project_features:" ",
            live_preview:" ",
            image_two:" ",
            project_name:""
        }
    }

        componentDidMount(){

            RestClient.GetRequest(AppUrl.ProjectDetails+this.state.myProjectID).then(result=>{
                this.setState({
                   project_description:result[0]['project_description'],
                   project_features:result[0]['project_features'],
                   live_preview:result[0]['live_preview'],
                   image_two:result[0]['image_two'],
                   project_name:result[0]['project_name']

                })

            }).catch(error=>{

            })
        }

    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                        <Row>
                            <Col lg={6} md={6} sm={12}>

                            <img src={this.state.image_two}/>

                            </Col>

                            <Col lg={6} md={6} sm={12}>
                                <h2 className="serviceName">{this.state.project_name}</h2>
                                <p className="serviceDescription">{this.state.project_description}</p>
                                 { ReactHtmlParser(this.state.project_features)}
                                <Button target="balnk" href={"//"+this.state.live_preview} variant="primary">More Info</Button>
                            </Col>


                        </Row>
                </Container>


                
            </Fragment>
        );
    }
}

export default ProjectDetails;