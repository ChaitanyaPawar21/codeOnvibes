import Home from '../pages/Home';
import Wings from '../components/Wings';
import Schedule from '../components/Schedule';
import Contact from '../components/Contact';
import { Routes, Route } from 'react-router-dom';

const AppRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/wings" element={<Wings />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    )
}

export default AppRoute