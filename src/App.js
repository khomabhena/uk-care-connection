import './App.css';
import DashboardContainer from './components/Dashboard/DashboardContainer';
import Menubar from './components/Dashboard/Menubar';
import Sidebar from './components/Dashboard/Sidebar';
import MenuItems from './components/Dashboard/MenuItems'
import TopContent from './components/Dashboard/TopContent';
import RightSide from './components/Dashboard/RightSide';
import MainContent from './components/Dashboard/MainContent';

function App() {
  return (
    <DashboardContainer>
      <Sidebar>
        <Menubar />
        <MenuItems className='active' icon={<span class="material-symbols-outlined">home_app_logo</span>} title='Home' />
      </Sidebar>
      <RightSide>
        <TopContent />
        <MainContent />
      </RightSide>
    </DashboardContainer>
  );
}

export default App;
