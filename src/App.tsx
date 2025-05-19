import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import NotFound from "./pages/NotFound.tsx";
import {AuthProvider} from "./contexts/AuthContext.tsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Product from "./pages/Product.tsx";
import ProtectedLayout from "./contexts/ProtectedLayout.tsx";

export default function App() {
    return (
        <AuthProvider>

            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<NotFound/>}/>

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <ProtectedLayout>
                                <Dashboard/>
                            </ProtectedLayout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/product"
                    element={
                        <ProtectedRoute>
                            <ProtectedLayout>
                                <Product/>
                            </ProtectedLayout>
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </AuthProvider>
    );
}
