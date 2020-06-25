import React, {Component, Fragment} from 'react';
import Menu from "../components/Menu";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Axios from "axios";
import {Col, Container, Row} from "react-bootstrap";

class ContactPage extends Component {


    constructor() {
        super();
        this.state={
            DataList:[],
        }
    }

    componentDidMount(axios = axios) {
        Axios.get('/contactList').then((response)=>{
            this.setState({DataList:response.data})
            console.log(reponse)
        }).catch((error)=>{

        })

    }






    render() {

        const data= this.state.DataList;


        const column=[
            {dataField:'id', text:'ID'},
            {dataField:'contact_name', text:'Contact Name'},
            {dataField:'contact_Mobile', text:'Contact Mobile'},
            {dataField:'contact_email', text:'Email'},
            {dataField:'contact_message', text:'Message'}

        ]


        return (
            <Fragment>
                <Menu>
                    <Container>
                        <Row>
                            <Col md={12} sm={12} lg={12}>
                                <BootstrapTable keyField='id' data={ data } columns={ column } pagination={ paginationFactory() } />

                            </Col>

                        </Row>
                    </Container>
                </Menu>

            </Fragment>
        );
    }
}

export default ContactPage;
