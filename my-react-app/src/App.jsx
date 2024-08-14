import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx'
import Main from './Components/Main.jsx'
import Astros from './Components/Astros.jsx'
import Apod from './Components/Apod.jsx';

import About from './Components/About.jsx';

import './App.css'

function App() {

    const linksData = [
        { name: 'Home', href: '/'},
        { name: 'APOD', href: '/apod'},
        { name: 'Astros', href: '/astros'},
        { name: 'About', href: '/about'},
    ]

    return (
        <>
            <Navbar header='Navbar' links={linksData} /> 
            <Routes>
                <Route
                    element={<Main />}
                    path='/'
                />
                <Route 
                    element={<Astros />}
                    path='/astros'
                />
                <Route
                    element={<Apod />}
                    path='/apod'
                />
                <Route
                    element={<About />}
                    path='/about'
                />
                
            </Routes>
        </>
    )
}

export default App
