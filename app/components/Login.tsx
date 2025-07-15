export default function Login() {
  return (
    <>
      <div className="login-container">
        <h1 className="text-gradient">MD NOTES</h1>
        <h2>Organized Notes Taking made easy</h2>
        <p>
          Build your very own archive of easily navigated and indexed
          information and notes.
        </p>
        <div className="full-line"></div>
        <h6>Sign In</h6>
        <div>
          <p>Email</p>
          <input type="text" placeholder="Enter your email address" />
        </div>
        <div>
          <p>Password</p>
          <input type="password" placeholder="********" />
        </div>
        <button className="submit-btn">
          <h6>Submit</h6>
        </button>
        <div className="secondary-btns-container">
          <button className="card-button-secondary">
            <small>Log In</small>
          </button>
          <button className="card-button-secondary">
            <small>Forgot Password ?</small>
          </button>
        </div>
        <footer>
          <a
            href="https://github.com/fromagetriste/nextjs-15-course"
            target="_blank"
          ></a>
        </footer>
      </div>
    </>
  );
}
