import React from 'react'
import InboxIcon from '@material-ui/icons/Inbox';
import TodayIcon from '@material-ui/icons/Today';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
function Sidebar() {
    return (
        <div className ="sidebar">
   <ul className ="sidebar__generic">
      <li>
          <span>
        <InboxIcon/>
          </span>
          <span>
              Inbox
          </span>
      </li>

      <li><span>
          <TodayIcon/>
          </span> 
          <span>
              Today
          </span>
      </li>

      <li><span>
          <DateRangeIcon/>
          </span></li>
         <span>
           Next 7 days
        </span>
       </ul>
        <div className = "sidebar__middle">
            <span>
            <ArrowDropDownIcon/>
            </span>
            <h2>Projects</h2>
        </div>
<ul className="sidebar__projects">
    Projects will be here!
</ul>
Add project Component HERE!!
        </div>
    )
}

export default Sidebar
