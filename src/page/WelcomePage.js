import { useNavigate} from "react-router-dom";
import "./Welcome.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const WelcomePage = () => {
  
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    history('/courses');
  };

  return (
    <div class="page-style">
    <div class="outer-container">
      <div class="inner-container">
        <div class="title">Welcome Form</div>
  <form action="#" method="post" class="needs-validation" novalidate onSubmit={handleSubmit}>
    <div class="user-details">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Enter your name" required />
        <div class="invalid-feedback">Please enter your name.</div>
      </div>
      <br></br>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" placeholder="Enter your email" required />
        <div class="invalid-feedback">Please enter a valid email address.</div>
      </div>
      <br></br>
      <div class="form-group">
        <label for="dob">Date of Birth</label>
        <input type="date" class="form-control" id="dob" required />
        <div class="invalid-feedback">Please enter your date of birth.</div>
      </div>
      <br></br>
      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input type="text" class="form-control" id="phone" placeholder="Enter your number" required />
        <div class="invalid-feedback">Please enter your phone number.</div>
      </div>
      <br></br>
      <div class="form-group">
        <label for="qualification">Qualification</label>
        <input type="text" class="form-control" id="qualification" placeholder="Enter your qualification" required />
        <div class="invalid-feedback">Please enter your qualification.</div>
      </div>
      <br></br>
      <div class="form-group">
        <label for="gender">Gender</label>
        <select class="form-control" id="gender" required>
          <option value="">Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <div class="invalid-feedback">Please select your gender.</div>
      </div>
      <br></br>
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  </div>
  <br></br>
</div>
</div>

  );
};
export default WelcomePage;
