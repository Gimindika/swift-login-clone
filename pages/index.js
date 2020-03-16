import withLayout from "../components/Layout";

const HomePage = () => {
  return (
    <div>
      <div>
        <p className="text-title">Customer Login</p>
        <div className="container-main">
          {/* left */}
          <div className="container-left">
            <p className="text-customertype">REGISTERED CUSTOMERS</p>
            <p className="text-info">
              if you have an account, sign in with your email address or phone
              number
            </p>

            {/* login-form */}
            <div>
              <p>
                Email//Phone number <span>*</span>
              </p>
              <input />
              <p>
                Password <span>*</span>
              </p>
              <input />

              <div className="container-btn">
                <button>Sign in</button>

                <button className="forgot-password">
                  Forgot Your Password?
                </button>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="container-right">
            <p className="text-customertype">NEW CUSTOMERS</p>
            <p className="text-info">
              Creating an account has many benefits: check out faster, keep more
              than one address, track orders and more
            </p>

            <button>Create an Account</button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container-main {
          display: flex;
          justify-content: space-between;
          margin: 0 1rem;
        }

        .container-left,
        .container-right {
          width: 47.5%;
        }

        .container-btn {
          display: flex;
        }

        .text-title {
          font-size: 2em;
          font-weight: 600;
          margin: 0 1rem;
        }

        .text-customertype {
          border-bottom: 1px solid black;
          padding: 1em 0;
          font-size: 0.75em;
        }

        span {
          color: red;
        }

        input {
          width: 50%;
          font-size: 1.25em;
          margin: 0;
          padding: 0.5em;
        }

        button {
          padding: 0.5em 1em;
          border: none;
          background-color: #36a84d;
          color: #fff;
          cursor: pointer;
          text-align: center;
          font-size: 1em;
          margin-right: 1em;
          margin-top: 1em;
        }

        .forgot-password {
          color: black;
          border: none;
          background-color: transparent;
          font-size: 0.75em;
        }
      `}</style>
    </div>
  );
};

export default withLayout(HomePage);
