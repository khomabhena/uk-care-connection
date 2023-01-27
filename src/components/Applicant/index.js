import React, { useContext, useEffect, useState } from 'react'
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
import Job from './Job'
import JobsSuggested from './JobsSuggested'
import JobDetails from './JobDetails'
import JobCard from './JobCard'
import JobCardDetails from './JobCardDetails'
import Applications from './Applications'
import ApplicationsDetails from './ApplicationsDetails'
import ApplicationsMade from './ApplicationsMade'
import { AuthContext } from '../Context/AuthContext'
import { ApplicantControls, FirebaseStorage } from '../../controls'
import ButtonWrap from '../ButtonWrap'
import MyButton from '../Button'
import PdfViewer from '../PdfViewer'

const ApplicantDashboard = () => {
  
  const [isOpen, setIsOpen] = useState(true)
  const [active, setActive] = useState('pdf')
  const [activeJob, setActiveJob] = useState(0)
  const [activeApplication, setActiveApplication] = useState(0)
  const [applied, setApplied] = useState(false)

  const { logoutUser } = useContext(AuthContext)
  const [data, setData] = useState(null)
  const [jobs, setJobs] = useState([])
  const [applications, setApplications] = useState([])
  const [jobDetails, setJobDetails] = useState(null)
  const [applicationDetails, setApplicationDetails] = useState(null)

  useEffect(() => {
    const applicantControls = ApplicantControls()
    
    const getData = async () => {
      const res = await applicantControls.getData()
      setData(res)
    }

    getApplications()
    getJobs()
    getData()
  }, [])
  
  const getJobs = async () => {
    const jobsArray = []
    const res = await FirebaseStorage().getAllData('jobs')
    
    res.forEach(item => {
      let newObject = {}
      item.data.jobs.forEach(obj => {
        newObject = {...obj, id: item.id}
        jobsArray.push(newObject)
      })
    })

    setJobs(jobsArray)
    setJobDetails(jobsArray[0])
  }
  
  const getApplications = async () => {
    let applicationsArray = []
    const res = await FirebaseStorage().getData('applications-applicants', localStorage.getItem('userEmail'))

    if (res.applications !== undefined) {
      applicationsArray = await res.applications
      setApplications(applicationsArray)
      setApplicationDetails(applicationsArray[0])
    }
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const handleClick = (name) => {
    setActive(name)
    getApplications()
    checkApplied()
  }

  const handleJobClick = (index, item) => {
    setActiveJob(index)
    setJobDetails(item)
    checkApplied()
  }

  const handleApplicationClick = (index, item) => {
    setActiveApplication(index)
    setApplicationDetails(item)
  }

  const applyForJob = (jobUid, email) => {
    const applicantEmail = localStorage.getItem('userEmail')
    const dataApplicant = {...jobDetails, jobUid: jobUid, applicationStatus: 'Pending'}
    const dataEmployer = {...data, jobUid: jobUid, jobEmail: email, applicantEmail: applicantEmail, applicationStatus: 'Pending'}

    ApplicantControls().Job().applyForJob(dataApplicant, applicantEmail)
    ApplicantControls().Job().applyToEmployer(dataEmployer, email)
  }

  const cancelApplication = (jobUid, email) => {
      const applicantEmail = localStorage.getItem('userEmail')
      const jobEmail = email

      ApplicantControls().Job().cancelApplication(applicantEmail, jobEmail, jobUid)
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

  const getApplicationsCard = () => {
    return applications?.map((item, index) => {
      return (
        <JobCard 
          data={item}
          handleClick={() => handleApplicationClick(index, item)}
          active={activeApplication === index}
          key={index}
          date={false}
        /> 
      )
    })
  }

  const logout = () => {
    logoutUser()
  }
  
  const checkApplied = () => {
    const appliedUid = applications?.map(item => item.jobUid)
    const applied = appliedUid.includes(jobDetails.jobUid)
    setApplied(applied)
  }

  return (
    <>
    {active === 'pdf' && <PdfViewer />}
    <DashboardContainer>
      <Sidebar isOpen={isOpen} className='applicant-sidebar'>
        <SidebarLogo isOpen={isOpen} />
        <MenuItemsWrap>{getMenuItems()}</MenuItemsWrap>
      </Sidebar>
      <MainContent isOpen={isOpen} className='applicant-main-content'>
        <Navbar>
          <MenuIcon toggleSidebar={toggleSidebar} className='applicant-menu' title='Applicant Dashboard' />
          <NavbarDetails image={data?.profileUrl || person} name={"Hi, " + data?.firstName}>
            <Logout logout={logout} />
          </NavbarDetails>
        </Navbar>

        {active === 'Profile' && <Overview>
          <OverviewInfo data={data} />
          <OverviewAbout data={data} />
        </Overview>
        }

        { active === 'Update' &&  <Update>
              <UpdateForm />
              {/* <PDFViewer /> */}
            </Update>
        }

        { active === 'Qualifications' && <Qualifications>
              <QualificationForm />
            </Qualifications> 
        }

        {  active === 'Experience' && <Experience>
              <ExperienceForm />
              {/* <PdfViewer /> */}
            </Experience>  
        }

        { active === 'Jobs' && <Job>
              <JobsSuggested>
                {getJobsCard()}
              </JobsSuggested>
              <JobDetails>
                <JobCardDetails data={jobDetails}>
                  <ButtonWrap>
                    <MyButton disabled={applied} handleClick={() => applyForJob(jobDetails?.jobUid, jobDetails?.email)}>{(applied && 'You have Applied') || 'Apply for this Job'}</MyButton>
                  </ButtonWrap>
                </JobCardDetails>
              </JobDetails>
            </Job> 
        }

        { active === 'Applications' &&  <Applications>
              <ApplicationsMade>
                {getApplicationsCard()}
              </ApplicationsMade>
              <ApplicationsDetails>
                <JobCardDetails applicationStatus={applicationDetails?.applicationStatus} data={applicationDetails}>
                  <ButtonWrap>
                    <MyButton 
                      handleClick={() => cancelApplication(applicationDetails?.jobUid, applicationDetails?.email)} 
                      isRed={true}>Cancel Application</MyButton>
                    {/* <MyButton
                    disabled={true}
                    >Status: {applicationDetails?.applicationStatus}</MyButton> */}
                  </ButtonWrap>
                </JobCardDetails>
              </ApplicationsDetails>
            </Applications>
        }

      </MainContent>
    </DashboardContainer>
    </>
  )
}

export default ApplicantDashboard