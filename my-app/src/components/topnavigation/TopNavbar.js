import React, { Component,Fragment } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import whiteLogo from '../../asset/Image/navlogo.svg';
import blueLogo from '../../asset/Image/navlogoScroll.svg';
import {NavLink} from "react-router-dom";
import '../../asset/css/responsive.css';
import '../../asset/css/bootstrap.min.css';
import '../../asset/css/custom.css';







class TopNavbar extends Component {
    constructor(){
        super();
        this.state={
            navBarTittle:"NavTittle",
            navBarLogo:[whiteLogo],
            navVariant:"dark",
            navBarBack:"navBackground",
            NavBarItem:"navItem"
        }
    }
    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({ navVariant:"light", navBarTittle:'navTittleScroll', navBarLogo:[blueLogo], navBarBack:"navBackgroundScroll", NavBarItem:"navItemScroll" })
        }
        else if(window.scrollY<100){
            this.setState({ navVariant:"dark", navBarTittle:'navTittle', navBarLogo:[whiteLogo], navBarBack:"navBackground", NavBarItem:"navItem"})
        }
    }
    componentDidMount(){
        window.addEventListener('scroll', this.onScroll)
    }





    render() {
        return (
            <Fragment>
                <Navbar className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg" bg="dark" variant={this.state.navVariant}>
  <Navbar.Brand ><NavLink className={this.state.navBarTittle} to="/"><img src={this.state.navBarLogo}/>Mohammad Murad</NavLink></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <Nav.Link> <NavLink className={this.state.NavBarItem} to="/">Home</NavLink></Nav.Link>
      <Nav.Link> <NavLink className={this.state.NavBarItem} to="/service">Services</NavLink></Nav.Link>
      <Nav.Link> <NavLink className={this.state.NavBarItem} to="/courses">Courses</NavLink></Nav.Link>
      <Nav.Link> <NavLink className={this.state.NavBarItem} to="/portfolio">Portfolio</NavLink></Nav.Link>
      <Nav.Link> <NavLink className={this.state.NavBarItem} to="/contact">Contact</NavLink></Nav.Link>
      <Nav.Link> <NavLink className={this.state.NavBarItem} to="/about">About</NavLink></Nav.Link>

      
    </Nav>
  </Navbar.Collapse>
</Navbar>
                
            </Fragment>
        );
    }
}

export default TopNavbar;