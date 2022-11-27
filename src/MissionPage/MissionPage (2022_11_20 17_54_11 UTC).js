import React from 'react'
import './MissionPage.scss'
import {BsCircle} from "react-icons/bs"
import * as FaIcons from 'react-icons/fa';
import Sidebar from '../_components/sidebar/sidebar';
import Circle from 'react-circle';
import Mission from '../_components/mission/mission'
class MissionPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return <>
        <div>
        <div className='missionbackdrop'>
            <div className='titleadj'>
                <Mission/>

                    {/* <div className='title1'>Be <br></br>
                     Authentic
                     </div>
                    <div className='comment1'> Built on and revolving around personal connections inside nursing homes, one of SCF's main aspirations
                        as a foundation is to never stop being authentic. Authenticity can come in many ways but can also be voided in many ways. 
                        Whether this trait comes in follow-up visits with the members in the nursing home, or keeping up with bridges of contact after visits,
                        authenticity is commonly found in our program. In volunteers, we look for this selfless authenticity, this way visits to our nursing homes
                        won't just  a tourist experience, but a 
                    
                </div>
                
                <div className='title2'>
                    Be <br></br>Present
                </div>
                <div className='comment2'> Built on and revolving around personal connections inside nursing homes, one of SCF's main aspirations
                        as a foundation is to never stop being authentic. Authenticity can come in many ways but can also be voided in many ways. 
                        Whether this trait comes in follow-up visits with the members in the nursing home, or keeping up with bridges of contact after visits,
                        authenticity is commonly found in our program. In volunteers, we look for this selfless authenticity, this way visits to our nursing homes
                        won't just  a tourist experience, but a 
                    
                </div>
                <div className='title3'>
                    Be <br></br>Changed
                </div>
                <div className='comment3'> Built on and revolving around personal connections inside nursing homes, one of SCF's main aspirations
                        as a foundation is to never stop being authentic. Authenticity can come in many ways but can also be voided in many ways. 
                        Whether this trait comes in follow-up visits with the members in the nursing home, or keeping up with bridges of contact after visits,
                        authenticity is commonly found in our program. In volunteers, we look for this selfless authenticity, this way visits to our nursing homes
                        won't just  a tourist experience, but a 
                    
                </div>
            </div>
            <div>
                <div className='title4'>
                    Take Initiative
                </div>
                <div className='title5'>
                    Make Impact 
                </div>
                <div className='title6'>
                    Be Real
                </div> */}
            </div>
            <Sidebar/>
        </div>
        </div>
            </>
      
      ;
        ;
    }
}


const connectedHelpPage = (MissionPage);
export { connectedHelpPage as MissionPage };