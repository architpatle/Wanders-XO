import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import PlanYourTrip from './pages/PlanYourTrip/PlanYourTrip'
import GroupJourneys from './pages/GroupJourneys/GroupJourneys'
import Journeys from './pages/Journeys/Journeys'
import OurStory from './pages/OurStory/OurStory'
import Contact from './pages/Contact/Contact'
import StartPlanning from './pages/StartPlanning/StartPlanning'
import FAQ from './pages/FAQ/FAQ'

const App = () => {
    return (
        <div>
            <Router>
                <Navbar/>
                <Routes>
                    {/* Define your routes here */}
                    <Route path="/" element={< Home />}/>
                    <Route path='/group-journeys' element={< GroupJourneys />}/>
                    <Route path='/plan-your-trip' element={< PlanYourTrip />}/>
                    <Route path='/journeys' element={< Journeys />}/>
                    <Route path='our-story' element={< OurStory />}/>
                    <Route path='contact' element={< Contact />}/>
                    <Route path='start-planning' element={< StartPlanning />}/>
                    <Route path='faq' element={< FAQ />}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    )
}

export default App