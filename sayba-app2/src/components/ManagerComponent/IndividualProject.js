import React, {useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import {  useProjectsValue, useSelectedProjectValue} from '../ManagerComponent/context/context';
import db from '../../firebase';
import firebase from "../../firebase";


export const IndividualProject = ({project}) => {
   const  [showConfirm, setShowConfirm] = useState(false);
   const {projects, setProjects} = useProjectsValue();
   const {setSelectedProject} = useSelectedProjectValue();

   const deleteProject = docId =>{
    db.collection('projects')
    .doc(docId)
    .delete()
    .then(()=> {
        setProjects ([...projects]);
        setSelectedProject('INBOX');
    });
   };

   return (
       <>
          <span className="sidebart__dot">&#8226;</span>
          <span className="sidebart__project-name">{project.name}</span>
          <span className="sidebart__project-delete" onClick={()=> setShowConfirm(!showConfirm)}>
          
              <DeleteIcon/>
              {showConfirm && (
                  <div className= "project-delete-model">
                      <div className="project-delete-model__inner">
                        <p>Are you sure you want to delete this project</p>
                        <button
                        type="button"
                            onClick={()=> deleteProject(project.docId)}>
                                Delete           
                            </button>
                            <span onClick={() => setShowConfirm(!showConfirm)}>Cancle</span>
                      </div>
                  </div>
              )}
              </span>
       </>
   )

}
