import React, {Component,Fragment} from 'react';
import TopBanner from '../components/TopBanner/TopBanner';
import Service from '../components/services/Service';
import TopNavbar from '../components/topnavigation/TopNavbar';
import Analysis from '../components/analysis/Analysis';
import Summary from '../components/summary/Summary';
import RecentProject from '../components/RecentProject/RecentProject';
import Course from '../components/Course/Course';
import Video from '../components/Video/Video';
import ClientReview from '../components/ClientReview/ClientReview.js';
import Footer from '../components/Footer/Footer.js';


class HomePage extends Component {
    componentDidMount(){
        window.scroll(0, 0)
    }
    render() {
        return (
            <Fragment>
                <TopNavbar/>
                <TopBanner/>
                <Service/>
                <Analysis/>
                <Summary/>
                <RecentProject/>
                <Course/>
                <Video/>
                <ClientReview/>
                <Footer/> 
            </Fragment>
           
        );
    }
}

export default HomePage;