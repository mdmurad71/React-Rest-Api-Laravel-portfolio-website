import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";
import Loading from "../Loading/Loading";


class AllProjects extends Component {

         constructor(){
      super();
      this.state={
        myData:[],
        loading:true

      }
    }

        componentDidMount(){
          RestClient.GetRequest(AppUrl.ProjectAll).then(result=>{
            this.setState({myData:result,loading:false})
          })
        }



    render() {

      
        if(this.state.loading==true){
        return <Loading/>;
    }else{

      const myList=this.state.myData;
      const myView=myList.map(myList=>{
        return  <Col lg={4} md={6} sm={12}>
                        <Card className="projectCard">
                            <Card.Img variant="top" src={myList.image_one} />
                            <Card.Body>
                              <Card.Title className="projectTitle">{myList.project_name}</Card.Title>
                              <Card.Text className="projectCardDes">{myList.project_description}</Card.Text>
                                
                            
                              <Button variant="primary"><Link className="link-style" to={"/ProjectDetails/"+myList.id+"/"+myList.project_name}>Details</Link></Button>
                            </Card.Body>
                          </Card>
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

export default AllProjects;