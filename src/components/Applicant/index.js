import React, { useState } from 'react'
import DashboardContainer from '../Dashboard/Container'
import Logout from '../Dashboard/Logout'
import MainContent from '../Dashboard/MainContent'
import MenuIcon from '../Dashboard/MenuIcon'
import Navbar from '../Dashboard/Navbar'
import NavbarDetails from '../Dashboard/NavbarDetails'
import Sidebar from '../Dashboard/Sidebar'
import person from '../../images/person.jpg'

const ApplicantDashboard = () => {

  const [isOpen, setIsOpen] = useState(true)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <DashboardContainer>
      <Sidebar isOpen={isOpen} className='applicant-sidebar'></Sidebar>
      <MainContent isOpen={isOpen} className='applicant-main-content'>
        <Navbar>
          <MenuIcon toggleSidebar={toggleSidebar} className='applicant-menu' title='Applicant Dashboard' />
          <NavbarDetails image={person} name='Emily Burner'>
            <Logout />
          </NavbarDetails>
        </Navbar>
      </MainContent>
    </DashboardContainer>
  )
}

export default ApplicantDashboard