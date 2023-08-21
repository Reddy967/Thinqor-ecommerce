import React, { Component } from "react";
import { useRef } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars} from "@fortawesome/free-solid-svg-icons"
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "../Styles/main.css";
import {NavLink} from 'react-router-dom';
import {NavDropdown} from 'react-bootstrap';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faContactCard } from '@fortawesome/free-solid-svg-icons';
import { faRegistered } from '@fortawesome/free-solid-svg-icons';
import { faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component{
	state = {clicked: false};
	handleClick = () =>{
		this.setState({clicked:!this.state.clicked})
	}
	render(){
	return(
		<>
		<nav>
			<img src="https://ecoautomotive.evive-micromobility.com/web/image/website/1/logo/Eco%20Automotive?unique=1962042" id="nav-img"></img>
			<div>
				<ul id="navbar" className={this.state.clicked ? "navbar active" : "navbar"}>
					<li><NavLink to="/" style={{color:'#696969'}}><FontAwesomeIcon icon={faHome} style={{color:'brown'}} /> Home</NavLink></li>
					<li><NavLink to="/Product" style={{color:'#696969'}}><FontAwesomeIcon icon={faBicycle} style={{color:'turquoise'}}/> Product</NavLink></li>
					<li><NavLink style={{color:'#696969'}}><FontAwesomeIcon icon={faToolbox}/><span> Accessories</span><FontAwesomeIcon icon={faCaretDown}/></NavLink>
				        <ul className="sub-menu">
							<li><NavLink to="/Helmets">Helmets</NavLink></li>
							<li><NavLink to="/Locks">Locks</NavLink></li>
							<li><NavLink to="/Combos">Combos</NavLink></li>
						    <li><NavLink to="/Mobilehandler">Mobile Handler</NavLink></li>
							<li><NavLink to="/Pumps">Pumps</NavLink></li>
							<li><NavLink to="/Sidemirrors">Side Mirrors</NavLink></li>
							<li><NavLink to="/Smartbacktail">Smart Backtail</NavLink></li>
							<li><NavLink to="/Batterybackup">Battery Backup</NavLink></li>
							<li><NavLink to="/Glows">Glows</NavLink></li>
							<li><NavLink to="/ebikeseat">eBike Seat</NavLink></li>
							<li><NavLink to="/Signalindicator">Signal Indicator</NavLink></li>
							<li><NavLink to="/ebikecover">eBike Cover</NavLink></li>
						</ul>
					</li>
					<li><NavLink to="/Events" style={{color:'#696969'}}><FontAwesomeIcon icon={faCalendarAlt}/> Events</NavLink></li>
					<li><NavLink style={{color:'#696969'}}><FontAwesomeIcon icon={faCertificate}/><span> Assurance</span><FontAwesomeIcon icon={faCaretDown}/></NavLink>
					   <ul className="sub-menu">
					   <li><NavLink to="/Warranty">Warranty</NavLink></li>
					   <li><NavLink to="/Insurance">Insurance</NavLink></li>
					   <li><NavLink to="/EMI">EMI</NavLink></li>
					   <li><NavLink to="/TrackOrder">TrackOrder</NavLink></li>
					   </ul>
					</li>
					<li><NavLink to="/About" style={{color:'#696969'}}><FontAwesomeIcon icon={faAddressBook} style={{color:'lightcoral'}}/> About</NavLink></li>
					<li><NavLink to="/Contact" style={{color:'#696969'}}><FontAwesomeIcon icon={faContactCard} style={{color:'red'}}/> Contact</NavLink></li>
					<li><NavLink to="/Signup" style={{color:'#696969'}}><FontAwesomeIcon icon={faRegistered} style={{color:'orange'}}/> SignUp</NavLink></li>
					<li><NavLink to="/Login" style={{color:'#696969'}}><FontAwesomeIcon icon={faLockOpen} style={{color:'green'}}/> Login</NavLink></li>
				</ul>
			</div>
			<div id="mobile" onClick={this.handleClick}>
				<i id="bar" className={this.state.clicked ? "fas fa-times":"fas fa-bars"}/>
			</div>
		</nav>
		</>
	);
}
}
export default Navbar;