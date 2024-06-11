import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import vid1 from "./video2.mp4";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3000/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <div className={styles.login_container}>
        <div className="video-background">
          <video src={vid1}autoPlay muted loop id="background-video"/>
            {/* <source src={vid1} type="video/mp4" /> */}
          {/* </video> */}
        </div>
        <div className={styles.login_form_container}>
          <div className={styles.left} >
			<div className="form-outline">
            <form className={styles.form_container} onSubmit={handleSubmit}>
              <h1>Login to Your Account</h1>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className={styles.input}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className={styles.input}
              />
              {error && <div className={styles.error_msg}>{error}</div>}
              <button type="submit" className={styles.green_btn}>
                Log In
              </button>
            </form>
			</div>

			{/* <h1>New Here ?</h1> */}
			<div className={styles.signup}>
            <Link to="/signup" >
                Register Here
            </Link>
			</div>
          </div>
          <div className={styles.right}>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
