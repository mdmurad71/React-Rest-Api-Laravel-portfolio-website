import React, {Component,Fragment} from 'react';
import TopNavigation from "../components/topnavigation/TopNavbar";
import PageTop from "../components/pageTop/pageTop";
import TermsDescription from "../components/TermsDescription/TermsDescription";
import Footer from "../components/Footer/Footer";

class TermsPage extends Component {
    componentDidMount(){
        window.scroll(0, 0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Terms & Condition"/>
                <PageTop pagetitle="Terms & Condition"/>
                <TermsDescription/>
                <Footer/>
            </Fragment>
        );
    }
}

export default TermsPage;