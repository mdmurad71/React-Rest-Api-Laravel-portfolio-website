import React, { Component,Fragment } from 'react';
import TopNavigation from "../components/topnavigation/TopNavbar";
import PageTop from "../components/pageTop/pageTop";
import Contactsection from "../components/Contactsection/Contactsection";
import Footer from "../components/Footer/Footer";

class ContactPage extends Component {
    componentDidMount(){
        window.scroll(0, 0)
    }
    render() {
        return (
            <Fragment>
            <TopNavigation/>
            <PageTop pagetitle="Contact"/>
            <Contactsection/>
            <Footer/>
                
            </Fragment>
        );
    }
}

export default ContactPage;