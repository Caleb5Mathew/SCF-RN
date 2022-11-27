import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { Outlet } from "react-router-dom";
import './login.scss'
import Sidebar from '../_components/sidebar/sidebar';
import {BsCircle} from "react-icons/bs"
import * as FaIcons from 'react-icons/fa';
import {BsPersonCircle} from "react-icons/bs"
import {IoPeopleCircleOutline} from "react-icons/io5"
import Progress from '../_components/progress/progress';

class LoginPage extends React.Component {
  
    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }
    openNav() {
      document.getElementsByClassName("sidenav").style.width = "250px";
    }
    closeNav() {
      document.getElementsByClassName("sidenav").style.width = "0";
    }
    render() {

        return <>
        <div>

        <div className='homeback'>
            <div>
                <Sidebar/>
             </div>
             <div className='play1'>
             <BsPersonCircle style={{ float:"right",  margin:"10%"}} className='resident'/>
             <IoPeopleCircleOutline style={{ float:"right",  margin:"10%"}}  className='resident'/>
             </div>
             <div className='imageback'>
             </div>


          </div>
        </div>
        
            
            </>
      
      ;
        ;
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};


const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };