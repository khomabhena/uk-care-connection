import React from 'react'
import DashboardContainer from '../../Dashboard/Container'
import Logout from '../../Dashboard/Logout'
import MainContent from '../../Dashboard/MainContent'
import MenuIcon from '../../Dashboard/MenuIcon'
import Navbar from '../../Dashboard/Navbar'
import NavbarDetails from '../../Dashboard/NavbarDetails'
import Sidebar from '../../Dashboard/Sidebar'
import person from '../../../images/person.jpg'

const ApplicantDashboard = () => {
  return (
    <DashboardContainer>
       <Sidebar></Sidebar>
       <MainContent>
         <Navbar>
           <MenuIcon title='Applicant Dashboard'><span class="material-symbols-outlined">menu</span></MenuIcon>
           <NavbarDetails image={person} name='Emily Burner'>
             <Logout />
           </NavbarDetails>
         </Navbar>
       </MainContent>
     </DashboardContainer>
  )
}

export default ApplicantDashboard