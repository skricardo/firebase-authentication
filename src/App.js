import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { UserProfile } from "./pages/UserProfile";
import { UpdateProfile } from "./pages/UpdateProfile";
import { ForgotPassword } from "./pages/ForgotPassword";
import { ProtectedRoute } from "./components/PrivateRoutes";
import { Header } from "./components/Header";


function App() {
  return (
<AuthProvider>
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/signup" element={<Signup />}></Route>
    <Route path="/login" element={<Login />}></Route>
   
   <Route 
    path="/" 
    element={
    <ProtectedRoute>
    <UserProfile />
    </ProtectedRoute>
    }
    ></Route>

    <Route 
    path="/update-profile" 
    element={
      <ProtectedRoute>
    <UpdateProfile />
    </ProtectedRoute>
    }
    ></Route>
    <Route path="forgot-password" element={<ForgotPassword />}></Route>
    <Route 
    path="*" 
    element={
    <div>
      <h1>Not found</h1>
    </div> 
  }
  ></Route>
  </Routes>
  </BrowserRouter>
</AuthProvider>
  );
}

export default App;
