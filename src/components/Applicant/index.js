import React, { useState } from 'react'
import DashboardContainer from '../Dashboard/Container'
import Logout from '../Dashboard/Logout'
import MainContent from '../Dashboard/MainContent'
import MenuIcon from '../Dashboard/MenuIcon'
import Navbar from '../Dashboard/Navbar'
import NavbarDetails from '../Dashboard/NavbarDetails'
import Sidebar from '../Dashboard/Sidebar'
import person from '../../images/person.jpg'
import SidebarLogo from '../Dashboard/SidebarLogo'
import MenuItemsWrap from '../Dashboard/MenuItemsWrap'
import {ApplicantData} from '../Applicant/Data'
import MenuItem from '../Dashboard/MenuItem'
import Overview from './Overview'
import OverviewInfo from './OverviewInfo'
import OverviewAbout from './OverviewAbout'
import Update from './Update'
import UpdateForm from './UpdateForm'
import Qualifications from './Qualifications'
import QualificationForm from './QualificationsFrom'
import Experience from './Experience'
import ExperienceForm from './ExperienceForm'

const ApplicantDashboard = () => {

  const [isOpen, setIsOpen] = useState(true)
  const [active, setActive] = useState('Profile')
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const handleClick = (name) => {
    setActive(name)
  }

  const getMenuItems = () => {
    return ApplicantData().getMenuItems()?.map(({name, icon}, index) => {
      return (
        <MenuItem 
          handleClick={() => handleClick(name)}
          isActive={active === name} 
          isOpen={isOpen} 
          key={index} 
          icon={icon} 
          name={name} />
      )
    })
  }
  

  return (
    <DashboardContainer>
      <Sidebar isOpen={isOpen} className='applicant-sidebar'>
        <SidebarLogo isOpen={isOpen} />
        <MenuItemsWrap>{getMenuItems()}</MenuItemsWrap>
      </Sidebar>
      <MainContent isOpen={isOpen} className='applicant-main-content'>
        <Navbar>
          <MenuIcon toggleSidebar={toggleSidebar} className='applicant-menu' title='Applicant Dashboard' />
          <NavbarDetails image={person} name='Emily Burner'>
            <Logout />
          </NavbarDetails>
        </Navbar>

        {active === 'Profile' && <Overview>
          <OverviewInfo></OverviewInfo>
          <OverviewAbout></OverviewAbout>
        </Overview>}

        { 
          active === 'Update' && 
            <Update>
              <UpdateForm />
            </Update>
        }

        {
          active === 'Qualifications' &&
            <Qualifications>
              <QualificationForm />
            </Qualifications>
        }

        {
          active === 'Experience' &&
            <Experience>
              <ExperienceForm />
            </Experience>
        }

      </MainContent>
    </DashboardContainer>
  )
}

export default ApplicantDashboard