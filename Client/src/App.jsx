import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Loginpage from "./pages/Loginpage"
import ProfilePage from "./pages/Profilepage"
import ProgressPage from "./pages/Progresspage"
import TasksPage from "./pages/Taskspage"
import EditProfilePage from "./pages/Editprofile"
import Settings from "./pages/Settingspage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/editpage" element={<EditProfilePage />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;