import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/topnavigation/TopNavbar";
import PageTop from "../components/pageTop/pageTop";
import Footer from "../components/Footer/Footer";
import PrivacyDescription from "../components/PrivacyDescription/PrivacyDescription";

class PrivacyPage extends Component {
    componentDidMount(){
        window.scroll(0, 0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Privacy"/>
                <PageTop pagetitle="Privacy Policy"/>
                <PrivacyDescription/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PrivacyPage;