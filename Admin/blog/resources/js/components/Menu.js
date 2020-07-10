import React, {Component, Fragment} from 'react';
import {Navbar, NavLink} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";


class Menu extends Component {

    constructor(props) {
        super();
        this.state={
            sideNav:false,
            sideNavClass:"sidenavClose",
            mainDivOverlay:"main-overlay-close"
        }
        this.showHideSideNav=this.showHideSideNav.bind(this);
    }

    showHideSideNav(){
        if(this.state.sideNav===false){
            this.setState({sideNav:true, sideNavClass:"sidenavOpen", mainDivOverlay:"main-overlay-open"})
        }else{
            this.setState({sideNav:false, sideNavClass:"sidenavClose", mainDivOverlay:"main-overlay-close"})
        }
    }


    render() {
        return (

                <Fragment>
                    <title>{this.props.title}</title>
                    <Navbar expand="lg" className="fixed-top" variant="light" bg="light">
                        <Navbar.Brand onClick={this.showHideSideNav} href="#"><FontAwesomeIcon icon={faBars} /></Navbar.Brand>
                    </Navbar>

                    <div className={this.state.sideNavClass}>
                    <NavLink> <Link className="my-0 p-2 text-white" to=""> <FontAwesomeIcon icon={faHome} /> Home</Link></NavLink>
                    <NavLink><Link className="my-0 p-2 text-white" to="/contact"> <FontAwesomeIcon icon={faHome} /> Contact</Link></NavLink>
                    <NavLink><Link className="my-0 p-2 text-white" to="/course"> <FontAwesomeIcon icon={faHome} /> Courses</Link></NavLink>
                    <NavLink><Link className="my-0 p-2 text-white" to="/project"> <FontAwesomeIcon icon={faHome} /> Projects</Link></NavLink>
                    <NavLink><Link className="my-0 p-2 text-white" to="/service"> <FontAwesomeIcon icon={faHome} /> Services</Link></NavLink>
                    <NavLink><Link className="my-0 p-2 text-white" to="/review"> <FontAwesomeIcon icon={faHome} /> Review</Link></NavLink>
                     <a className="my-0 p-2 text-white" href="/LoginPage"> <FontAwesomeIcon icon={faHome} /> Sign Out</a>

                    </div>

                    <div onClick={this.showHideSideNav} className={this.state.mainDivOverlay}>

                    </div>

                    <div className="mt-5">
                        {this.props.children}
                    </div>




                </Fragment>


        );
    }
}

export default Menu;
