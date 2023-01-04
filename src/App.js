import './App.css';
import DashboardContainer from './components/Dashboard/Container';
import Logout from './components/Dashboard/Logout';
import MainContent from './components/Dashboard/MainContent';
import MenuIcon from './components/Dashboard/MenuIcon';
import Navbar from './components/Dashboard/Navbar';
import NavbarDetails from './components/Dashboard/NavbarDetails';
import Sidebar from './components/Dashboard/Sidebar';

function App() {
  return (
    <DashboardContainer>
      <Sidebar></Sidebar>
      <MainContent>
        <Navbar>
          <MenuIcon title='Applicant Dashboard'><span class="material-symbols-outlined">menu</span></MenuIcon>
          <NavbarDetails>
            <Logout />
          </NavbarDetails>
        </Navbar>
      </MainContent>
    </DashboardContainer>
  );
}

export default App;
