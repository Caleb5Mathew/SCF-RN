import React from 'react'
import './HelpPage.scss'
import {BsCircle} from "react-icons/bs"
import * as FaIcons from 'react-icons/fa';
import Sidebar from '../_components/sidebar/sidebar';

class HelpPage extends React.Component {
  
    constructor(props) {
        super(props);
    }
    render() {

        return <>
        <div className='helpbackdrop'>
            <Sidebar/>
        </div>
        
            
            </>
      
      ;
        ;
    }
}


const connectedHelpPage = (HelpPage);
export { connectedHelpPage as HelpPage };