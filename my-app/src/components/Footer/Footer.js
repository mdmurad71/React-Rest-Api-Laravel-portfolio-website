import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone, faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {faFacebook,faYoutube} from "@fortawesome/free-brands-svg-icons";
import {Link, NavLink} from "react-router-dom";
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";
import ReactHtmlParser from 'react-html-parser';


class Footer extends Component {

constructor(){
    super();
    this.state={
      
            address:"",
            email:"",
            phone:"",
            facebook:"",
            youtube:"",
            footer_credit:""
        }

       
    }



componentDidMount(){
    RestClient.GetRequest(AppUrl.Footer).then(result=>{
        this.setState({
             address:result[0]['address'],
             email:result[0]['email'],
             phone:result[0]['phone'],
             facebook:result[0]['facebook'],
             youtube:result[0]['youtube'],
             footer_credit:result[0]['footer_credit'],


    })
    })
}


    render() {
        return (
            <Fragment>
                <Container fluid={true} className="text-center footerSection">
                
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-3 text-justify">
                            <h1 className="serviceName">Follow Me</h1>
                            <a className="socialLink" target="balnk" href={"//"+this.state.facebook}><FontAwesomeIcon  icon={faFacebook} /> {this.state.facebook}</a><br/>
                            <a className="socialLink" target="balnk" href={"//"+this.state.youtube}><FontAwesomeIcon  icon={faYoutube} />{this.state.youtube}</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-3 text-justify">
                            <h1 className="serviceName">Address</h1>
                            <p className="serviceDescription" >{this.state.address}</p>
                            <p className="serviceDescription" > <FontAwesomeIcon  icon={faEnvelope} />{this.state.email}</p>
                            <p className="serviceDescription" > <FontAwesomeIcon  icon={faPhone} />{this.state.phone}</p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-3 text-justify">
                            <h1 className="serviceName">Information</h1>
                            <Link className="footerLink" to="/About">About Me</Link><br/>
                            <Link className="footerLink" to="/Contact">Contact Me</Link>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-3 text-justify">
                            <h1 className="serviceName">Legal</h1>
                            <Link  className="footerLink" to="/Refund">Refund Policy</Link><br/>
                            <Link className="footerLink" to="/Terms">Terms And Condition</Link><br/>
                            <Link className="footerLink" to="/Privacy">Privacy Policy</Link>
                        </Col>
                   </Row>
                </Container>

                    <Container fluid={true} className="text-center copyrightSection">
                    <a className="copyrightLink" href="#">{this.state.footer_credit}</a>
                    
                     </Container>

                

            </Fragment>
        );
    }
}

export default Footer;