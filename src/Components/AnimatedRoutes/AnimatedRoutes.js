import {Routes, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import Innovations from '../Pages/Innovations/Innovations';
import Fellows from '../Pages/Fellows/Fellows';
import Gallery from '../Pages/Gallery/Gallery';
import Events from '../Pages/Events/Events';
import News from '../Pages/News/News';
import Contact from '../Pages/Contact/Contact';


const AnimatedRoutes = () => {
    const location = useLocation();

  return (

    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/Innovations' element={<Innovations/>}/>
            <Route exact path='/Fellows' element={<Fellows/>}/>
            <Route exact path='/Gallery' element={<Gallery/>} />
            <Route exact path='/Events' element={<Events />} />
            <Route exact path='/News' element={<News/>} />
            <Route exact path='/Contact' element={<Contact />} />
        </Routes>
    </AnimatePresence>
  )
}
export default AnimatedRoutes