import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/topnavigation/TopNavbar";
import Footer from "../components/Footer/Footer";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import AppUrl from ".././RestApi/AppUrl";
import RestClient from ".././RestApi/RestClient";
import ReactHtmlParser from 'react-html-parser';


class CourseDetailsPage extends Component {

    constructor({match}){
        super();
        this.state={
            coursePassedID:match.params.courseID,
            courseData:[]
        }
    }



    componentDidMount(){
        window.scroll(0, 0)

         RestClient.GetRequest(AppUrl.CourseDetails+this.state.coursePassedID).then(result=>{
                this.setState({courseData:result});
         }).catch(error=>{

         })
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Course Details"/>
                    <CourseDetails id={this.state.courseData}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CourseDetailsPage;