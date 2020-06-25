import React, {Component,Fragment} from 'react';
import TopNavigation from "../components/topnavigation/TopNavbar";
import PageTop from "../components/pageTop/pageTop";
import AllCourses from "../components/AllCourses/AllCourses";
import AllProjects from "../components/AllProjects/AllProjects";
import Footer from "../components/Footer/Footer";

class PortfolioPage extends Component {
    componentDidMount(){
        window.scroll(0, 0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTop pagetitle="Portfolio"/>
                <AllProjects/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PortfolioPage;