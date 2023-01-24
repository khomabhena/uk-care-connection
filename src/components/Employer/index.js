import React, { useContext, useEffect, useState } from 'react'
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
import { EmployerControls, FirebaseStorage } from '../../controls'

const EmployerDashboard = () => {

    const [isOpen, setIsOpen] = useState(true)
    const [active, setActive] = useState('Profile')
    const [activeJob, setActiveJob] = useState(0)
    const [activeApplicant, setActiveApplicant] = useState('')
    
    const { logoutUser } = useContext(AuthContext)
    const [data, setData] = useState(null)
    const [jobs, setJobs] = useState([])
    const [applicants, setApplicants] = useState([])
    const [jobDetails, setJobDetails] = useState(null)
    const [applicantDetails, setApplicantDetails] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const res = await EmployerControls().getData()
            setData(res)
        }

        getApplicants()
        getJobs()
        getData()
    }, [])

    const getJobs = async () => {
        let jobsArray = []
        const res = await FirebaseStorage().getData('jobs', localStorage.getItem('userEmail'))

        if (res.jobs !== undefined) {
            jobsArray = await res.jobs
            setJobs(jobsArray)
            setJobDetails(jobsArray[0])
        }
    }

    const getApplicants = async () => {
        let arr = []
        const res = await FirebaseStorage().getData('applications-employer', localStorage.getItem('userEmail'))

        if (res.applications !== undefined) {
            arr = await res.applications
            setApplicants(arr)
            setApplicantDetails(arr[0])
        }
    }

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    const handleClick = (name) => {
        setActive(name)
    }

    const handleJobClick = (index, item) => {
        setActiveJob(index)
        setJobDetails(item)
    }

    const handleApplicantClick = (index, item) => {
        setActiveApplicant(index)
        setApplicantDetails(item)
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

    const getJobsCard = () => {
        return jobs?.map((item, index) => {
            return (
              <JobCard
                data={item}
                handleClick={() => handleJobClick(index, item)}
                active={activeJob === index}
                key={index} 
                date={true} />
            )
          })
    }

    const getApplicantsCard = () => {
        // return applicants?.map((item, index) => {
        //     return (
        //         <ApplicantsCard
        //             data={item}
        //             handleClick={() => handleApplicantClick(index, item)}
        //             active={activeApplicant === index}
        //             key={index} />
        //     )
        // })

        const jobUidArr = applicants?.filter(item => item.jobUid)?.map(item => item.jobUid).filter(onlyUnique)
        console.log(jobUidArr)
        return jobUidArr?.map(uid => {
            const name = jobs?.filter(item => item.jobUid === uid).map(item => item.title)[0]
            console.log(name)
                 
            return (
                <ApplicationsCard title={name}>
                   {
                    applicants?.filter(item => item.jobUid === uid).map((item, index) => {
                        return (
                            <ApplicantsCard
                                data={item}
                                handleClick={() => handleApplicantClick(item.email+item.jobUid, item)} 
                                active={activeApplicant === item.email+item.jobUid}
                                key={index}/>
                        )
                    })
                   }
                </ApplicationsCard>
            )
        })
    }

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
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
                <NavbarDetails image={person} name={data?.companyName || '...'}>
                    <Logout logout={logout} />
                </NavbarDetails>
            </Navbar>

            {
                active === 'Profile' && 
                    <Overview>
                        <OverviewInfo data={data} />
                        <OverviewAbout data={data} />
                    </Overview>
            }
            {
                active === 'My Jobs' &&
                    <Job title='Posted Jobs'>
                        <JobsSuggested>
                            {getJobsCard()}
                        </JobsSuggested>
                        <JobDetails>
                            <JobCardDetails data={jobDetails} />
                        </JobDetails>
                    </Job>
            }
            {
                active === 'Job Applications' &&
                    <Applications title1='Job Applications' title2='Applicant Details'>
                        <ApplicationMade>
                            {/* <ApplicationsCard> */}
                                {getApplicantsCard()}
                            {/* </ApplicationsCard> */}
                        </ApplicationMade>
                        <ApplicationsDetails>
                            <ApplicantDetails data={applicantDetails} />
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