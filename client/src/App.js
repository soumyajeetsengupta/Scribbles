// Essentials - Start
import { useEffect, useState } from "react";
// Essentials - End

// CSS - Start
import './css/Reusables.css';
import './App.css';
import './css/LeftSidebar.css';
import './css/RightSidebar.css';
import './css/Responsive.css';
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
import CreatePost from './components/pages/CreatePost';
// Components - End

function App() {
  const [posts,setPosts] = useState([]);
    useEffect(() => {
        const response = fetch('http://localhost:4000/post').then(response => {
            response.json().then(posts => {
                setPosts(posts);
            });
        });
    }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={ <><HomePage /> <RightSidebar /></>} />
        <Route path={'/post'} element={ <>
            {posts.length > 0  && posts.map(post => (
                <ExpandedPost {...post}/>
            ))}
         <RightSidebar /></> } />
        <Route path={'/contact-me'} element={ <Contact /> } />
        <Route path={'/about-me'} element={ <AboutMe /> } />
        <Route path={'/create-post'} element={ <CreatePost /> } />
      </ Route>
    </Routes>
  );
}

export default App;