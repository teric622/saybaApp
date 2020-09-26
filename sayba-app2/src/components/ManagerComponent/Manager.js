import React from 'react'
import Header from '../HeaderComponent/Header'
import {Content} from '../ManagerComponent/layout/Content';
import { ProjectsProvider, SelectedProjectProvider} from '../../components/ManagerComponent/context/context';





import './Manager.scss';
function Manager() {
    return (
        <SelectedProjectProvider>
            
        <ProjectsProvider>
        <div>
            <Header/>
<Content/>
        </div>
        </ProjectsProvider>
        </SelectedProjectProvider>
    )
}

export default Manager
