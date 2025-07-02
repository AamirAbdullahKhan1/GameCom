import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import MemberDashboard from "./pages/MemberDashboard"
import DomainLeadDashboard from "./pages/DomainLeadDashboard"
import PresidentDashboard from "./pages/PresidentDashboard"
import AdminDashboard from "./pages/AdminDashboard"
import EventRegistrationPage from "./Pages/EventRegistrationPage"
import LandingPage from "./Pages/LandingPage"
import LoginPage from "./Pages/LoginPage"
import RegisterPage from "./Pages/RegisterPage"
import Aurora from "./Components/ReactBits/Aurora"
import DomainsPage from "./Pages/DomainsPage"

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <div className="fixed inset-0 z-0">
          <Aurora colorStops={["#4F46E5", "#7C3AED", "#EC4899"]} blend={0.4} amplitude={0.8} speed={0.6}/>
        </div>
        <div className="relative z-10">
          <Routes>
            <Route path="/" element= {<LandingPage/>} />
            <Route path="/login" element= {<LoginPage/>} />
            <Route path="/register" element= {<RegisterPage/>} />
            <Route path="/domains" element= {<DomainsPage/>}/>
            <Route path="/dashboard/member" element={<MemberDashboard />} />
            <Route path="/dashboard/domain-lead" element={<DomainLeadDashboard />} />
            <Route path="/dashboard/president" element={<PresidentDashboard />} />
            <Route path="/dashboard/admin" element={<AdminDashboard />} />
            <Route path="/register-event" element={<EventRegistrationPage/>} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
