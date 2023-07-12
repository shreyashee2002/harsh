import { Route, Routes } from 'react-router-dom';
import LoginPage from './page/LoginPage';
import CallbackPage from './page/CallbackPage';
import WelcomePage from './page/WelcomePage';
import { AuthenticationGuard } from './components/auth/authentication-guard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Page from './page/CoursePage';
import './App.css';
import CourseHome from './page/allcourses/CourseHome'

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route exact path="/welcome" element={<AuthenticationGuard component={WelcomePage} />}/>
      <Route path="/callback" element={<CallbackPage />} />
      <Route exact path="/course" element={<Page />} />
      <Route exact path='/courses' element={<CourseHome/>} />
    </Routes>
    </div>
  );
}
  
  export default App;