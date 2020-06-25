import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Button, Card} from 'react-bootstrap';
import {Link} from "react-router-dom";
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";
import Loading from "../Loading/Loading";


class RecentProject extends Component {

    constructor(){
      super();
      this.state={
        myData:[],
        loading:true

      }
    }

        componentDidMount(){
          RestClient.GetRequest(AppUrl.ProjectHome).then(result=>{
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
                <Container className="text-center">
                <h1 className="serviceMainTitle">RECENT PROJECTS</h1>
                    <Row>
                        

                       {myView}

             
                    </Row>
                </Container>
                
            </Fragment>
        );
    }
    }
}

export default RecentProject;