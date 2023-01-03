import './App.css';
import DashboardContainer from './components/Dashboard/Container';
import MainContent from './components/Dashboard/MainContent';
import Sidebar from './components/Dashboard/Sidebar';

function App() {
  return (
    <DashboardContainer>
      <Sidebar></Sidebar>
      <MainContent></MainContent>
    </DashboardContainer>
  );
}

export default App;
