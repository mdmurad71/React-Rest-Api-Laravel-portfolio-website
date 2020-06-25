import React, { Component, Fragment } from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {BarChart, Bar, ResponsiveContainer, XAxis, Tooltip} from "recharts";
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";
import ReactHtmlParser from 'react-html-parser';


class Analysis extends Component {
constructor(){
    super()
    this.state={
        data:[ ],
        desc:[]

       
    }
}

componentDidMount(){
    RestClient.GetRequest(AppUrl.ChartData).then(result=>{
        this.setState({data:result})
    })

     RestClient.GetRequest(AppUrl.TechDesc).then(result=>{
        this.setState({desc:result[0]['tech_description']})
    })
}



    render() {
        var blue="rgba(0,115,230,0.8)"

        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">Technology Used</h1>
                    <Row>
                        <Col style={{width:"100%", height:"300px"}}   lg={6} md={12} sm={12}>
                        <ResponsiveContainer>
                        <BarChart width={100} height={300}  data={this.state.data}>
                            <XAxis dataKey="technology"/>
                            <Tooltip/>
                            <Bar dataKey="projects" fill={blue}>

                            </Bar>

                        </BarChart>
 
                        </ResponsiveContainer>
>
                        
                        
                        
                        </Col>


                        <Col lg={6} md={12} sm={12}>
                        <p className="text-justify des">{ ReactHtmlParser(this.state.desc)}</p>

                        
                        </Col>
                    </Row>
                </Container>
                
            </Fragment>
        );
    }
}

export default Analysis;