// CSS - Start
import './css/Reusables.css';
import './App.css';
import './css/LeftSidebar.css';
import './css/RightSidebar.css';
// CSS - End

// Components - Start
import Layout from './components/layouts/Layout';
import LeftSidebar from './components/layouts/LeftSidebar'
import HomePage from './components/pages/HomePage';
import RightSidebar from './components/layouts/RightSidebar';
import {Routes, Route} from 'react-router-dom';
import ExpandedPost from './components/pages/ExpandedPost';
import Contact from './components/pages/Contact';
import AboutMe from './components/pages/AboutMe';
// Components - End

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={ <><HomePage /> <RightSidebar /></>} />
        <Route path={'/post'} element={ <><ExpandedPost /> <RightSidebar /></> } />
        <Route path={'/contact-me'} element={ <Contact /> } />
        <Route path={'/about-me'} element={ <AboutMe /> } />
      </ Route>
    </Routes>
  );
}

export default App;