import Home from '../pages/Home';
import Wings from '../components/Info';
import Schedule from '../pages/Schedule';
import Contact from '../pages/Contact';
import Register from '../pages/Register';
import { Routes, Route } from 'react-router-dom';

const AppRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/wings" element={<Wings />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    )
}

export default AppRoute