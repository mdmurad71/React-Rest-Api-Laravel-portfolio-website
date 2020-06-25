import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import loading from "../../asset/Image/loader.svg";
class Loading extends Component {
    render() {
        return (
            <Fragment>
            <Container className="text-center">
            <Row>
            <Col>
            <img className="loading_animation" src={loading}/>

            
            
            </Col>
            
            </Row>
            </Container>
                
            </Fragment>
        );
    }
}

export default Loading;