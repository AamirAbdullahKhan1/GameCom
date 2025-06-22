import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import MemberDashboard from "./pages/MemberDashboard"
import DomainLeadDashboard from "./pages/DomainLeadDashboard"
import PresidentDashboard from "./pages/PresidentDashboard"
import AdminDashboard from "./pages/AdminDashboard"
import EventRegistrationPage from "./Pages/EventRegistrationPage"
import LandingPage from "./Pages/LandingPage"
import LoginPage from "./Pages/LoginPage"
import RegisterPage from "./Pages/RegisterPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element= {<LandingPage/>} />
        <Route path="/login" element= {<LoginPage/>} />
        <Route path="/register" element= {<RegisterPage/>} />
        <Route path="/dashboard/member" element={<MemberDashboard />} />
        <Route path="/dashboard/domain-lead" element={<DomainLeadDashboard />} />
        <Route path="/dashboard/president" element={<PresidentDashboard />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/register-event" element={<EventRegistrationPage/>} />
      </Routes>
    </Router>
  )
}

export default App
