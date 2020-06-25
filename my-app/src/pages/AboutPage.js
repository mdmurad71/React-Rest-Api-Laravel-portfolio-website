import React, {Component,Fragment} from 'react';
import TopNavigation from "../components/topnavigation/TopNavbar";
import PageTop from "../components/pageTop/pageTop";
import AboutDescription from "../components/AboutDescription/AboutDescription";
import Footer from "../components/Footer/Footer";

class AboutPage extends Component {
    componentDidMount(){
        window.scroll(0, 0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTop pagetitle="About Me"/>
                <AboutDescription/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AboutPage;