import React from 'react'
import EventIcon from '@material-ui/icons/Event';
import InboxIcon from '@material-ui/icons/Inbox';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './Sidebar.css'
function tSideBar() {
    return (
        <div className="sidebar">
            <ul className="sidebar__generic">
                <li>
                <InboxIcon/>
                    <span>
                   InboxIcon
                    </span>
                    </li>
                
                <li>
                <EventIcon/>
                    <span>
                        Today
                </span>
                </li> 
                
             
                <li> 
                <DateRangeIcon/>
                    <span>
                   Next 7 days
                    </span>
                    </li>
            </ul>

            <div className="sidebar__middle">
                <span>
<ArrowDropDownIcon/>
                </span>
                <h2>Projects</h2>
            </div>
             
           <ul className="sidebar__projects">Projects will be here</ul>
Add project Component Here!
        </div>
    )
}

export default tSideBar
