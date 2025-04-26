import {Routes, Route, Navigate} from 'react-router-dom';
import Login from './pages/Login';
import NotFound from "./pages/NotFound.tsx";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}
