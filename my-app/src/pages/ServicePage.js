import React, { Component, Fragment } from 'react';
import TopNavigation from "../components/topnavigation/TopNavbar";
import PageTop from "../components/pageTop/pageTop";
import Contactsection from "../components/Contactsection/Contactsection";
import Footer from "../components/Footer/Footer";
import Services from '../components/services/Service';

class ServicePage extends Component {

     componentDidMount(){
        window.scroll(0, 0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTop pagetitle="Services"/>
                <Services/>
                <Contactsection/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ServicePage;