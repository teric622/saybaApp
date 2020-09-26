import React, {useState} from 'react';
import TodayIcon from '@material-ui/icons/Today';
import DateRangeIcon from '@material-ui/icons/DateRange';
import InboxIcon from '@material-ui/icons/Inbox';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import '../Manager.scss';
import { useSelectedProjectValue } from '../context/context';
import {Projects} from '../Projects';
import { AddProject } from '../AddProject';



export const Sidebar = () =>{
    const {setSelectedProject} = useSelectedProjectValue;
    const [active , setActive] = useState ('inbox');
    const [showProjects, setShowProjects] = useState (true);


return(
 <div className="sidebart">
     <ul className="sidebart__generic">
         <li className="inbox">
         <span><InboxIcon/></span>
        <span>Inbox</span>
        </li>

         <li className ="today">  
       <span><TodayIcon/></span>
        <span>Today</span>
        </li>

         <li className="next_7">  
        <span><DateRangeIcon/></span>
        <span>Next 7 days</span>
        </li>
     </ul>

     <div className="sidebart__middle">
         <span> <ArrowDropDownIcon/></span>
         <h2>Projects</h2>
     </div>


<ul className="sidebart__projects">
   {showProjects && <Projects /> }

{showProjects && <AddProject/>}
</ul>
</div>
);
};