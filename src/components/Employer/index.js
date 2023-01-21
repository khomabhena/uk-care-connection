import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import DashboardContainer from '../Dashboard/Container'
import MainContent from '../Dashboard/MainContent'
import MenuIcon from '../Dashboard/MenuIcon'
import MenuItem from '../Dashboard/MenuItem'
import MenuItemsWrap from '../Dashboard/MenuItemsWrap'
import Navbar from '../Dashboard/Navbar'
import NavbarDetails from '../Dashboard/NavbarDetails'
import Sidebar from '../Dashboard/Sidebar'
import SidebarLogo from '../Dashboard/SidebarLogo'
import { EmployerData } from './Data'
import person from '../../images/person.jpg'
import Logout from '../Dashboard/Logout'
import Overview from '../Applicant/Overview'
import OverviewInfo from './OverviewInfo'
import OverviewAbout from './OverviewAbout'
import Job from '../Applicant/Job'
import JobsSuggested from '../Applicant/JobsSuggested'
import JobCard from '../Applicant/JobCard'
import JobDetails from '../Applicant/JobDetails'
import JobCardDetails from '../Applicant/JobCardDetails'
import Applications from '../Applicant/Applications'
import ApplicationMade from '../Applicant/ApplicationsMade'
import ApplicationsDetails from '../Applicant/ApplicationsDetails'
import Update from '../Applicant/Update'
import UpdateForm from './UpdateForm'
import PostJob from './PostJob'
import ApplicationsCard from './ApplicationsCard'
import ApplicantsCard from './ApplicantsCard'
import ApplicantDetails from './ApplicantDetails'
import { EmployerControls } from '../../controls'

const EmployerDashboard = () => {

    const [isOpen, setIsOpen] = useState(true)
    const [active, setActive] = useState('Profile')
    const [isActiveApplicant, setIsActiveApplicant] = useState('one')
    const { logoutUser } = useContext(AuthContext)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    const handleClick = (name) => {
        setActive(name)
    }

    const handleApplicantClick = (name) => {
        setIsActiveApplicant(name)
    }

    const getMenuItems = () => {
        return EmployerData().getMenuItems()?.map(({name, icon}, index) => {
            return (
                <MenuItem
                    handleClick={() => handleClick(name)}
                    isActive={active === name}
                    isOpen={isOpen}
                    key={index}
                    icon={icon}
                    name={name}
                />
            )
        })
    }

    const logout = () => {
        logoutUser()
    }

    const postJob = async (event) => {
        event.preventDefault()
        setActive('My Jobs')
        EmployerControls().Job().uploadJob('Uk Care Connection')

    }

  return (
    <DashboardContainer>
        <Sidebar isOpen={isOpen} className='applicant-sidebar'>
            <SidebarLogo isOpen={isOpen} />
            <MenuItemsWrap>{getMenuItems()}</MenuItemsWrap>
        </Sidebar>
        <MainContent isOpen={isOpen} className='applicant-main-content'>
            <Navbar>
                <MenuIcon toggleSidebar={toggleSidebar} className='applicant-menu' title='Employer Dashboard' />
                <NavbarDetails image={person} name='Uk Care Connection'>
                    <Logout logout={logout} />
                </NavbarDetails>
            </Navbar>

            {
                active === 'Profile' && 
                    <Overview>
                        <OverviewInfo />
                        <OverviewAbout />
                    </Overview>
            }
            {
                active === 'My Jobs' &&
                    <Job title='Posted Jobs'>
                        <JobsSuggested>
                            <JobCard selected={true} date={true} />
                            <JobCard date={true} />
                        </JobsSuggested>
                        <JobDetails>
                            <JobCardDetails />
                        </JobDetails>
                    </Job>
            }
            {
                active === 'Job Applications' &&
                    <Applications title1='Job Applications' title2='Applicant Details'>
                        <ApplicationMade>
                            <ApplicationsCard>
                                <ApplicantsCard handleClick={() => handleApplicantClick('one')} active={isActiveApplicant === 'one'} />
                                <ApplicantsCard handleClick={() => handleApplicantClick('two')} active={isActiveApplicant === 'two'} />
                                <ApplicantsCard handleClick={() => handleApplicantClick('three')} active={isActiveApplicant === 'three'} />
                            </ApplicationsCard>
                        </ApplicationMade>
                        <ApplicationsDetails>
                            <ApplicantDetails />
                        </ApplicationsDetails>
                    </Applications>
            }
            {
                active === 'Update Profile' &&
                    <Update title='Update Company Details'>
                        <UpdateForm />
                    </Update>                    
            }
            {
                active === 'Post Job' &&
                    <Update title='Create Job Post'>
                        <PostJob postJob={postJob} />
                    </Update>
            }

        </MainContent>
    </DashboardContainer>
  )
}

export default EmployerDashboard