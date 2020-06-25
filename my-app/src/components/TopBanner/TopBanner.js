import React, { Component, Fragment } from 'react';
import '../../asset/css/custom.css';
import '../../asset/css/responsive.css';
import '../../asset/css/bootstrap.min.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";

class TopBanner extends Component {

    constructor(){
        super();
        this.state={
            title:"...",
            subtitle:"..."
        }
    }
   
   componentDidMount(){
       RestClient.GetRequest(AppUrl.HomeTitle).then(result=>{
           this.setState({title:result[0]['home_title'],subtitle:result[0]['home_subtitle']})

       }).catch(error=>{
             this.setState({title:'????',subtitle:'?????'})

       })
   }

    render() {
        return (

    <Fragment>
        <Container fluid={true} className="TopFixedBanner p-0">
            <div className="TopBannerOverlay">
                <Container className="TopContent">
                    <Row>
                        <Col>
                        <h1 className="topTittle">{this.state.title}</h1>
                        <h4 className="topSubTittle">{this.state.subtitle}</h4>
                        <Button variant="primary">MORE INFO</Button>
                        </Col>
                    </Row>

                </Container>
                </div>   



        </Container>
    </Fragment>                

        );
    }
}

export default TopBanner;