const Footer = () => {
  return (
    <div className="container-main">
      {/* section 1 */}
      <div>
        {/* logo */}
        {/* <img /> */}
        <p className="logo-pearl">pearl.</p>
        <p>New York, NY, 00841</p>
        <p>1-800-000-0000</p>
        <p>yourmail@yourdomain.com</p>
        <p>Let's stay in touch</p>
        <div className="container-social">
          {/* fb */}
          <img src="/facebook-logo.png" />
          {/* twitter */}
          <img src="/twitter-logo.png" />
          {/* linkedin */}
          <img src="/linkedin-logo.png" />
          {/* ig */}
          <img src="/instagram-logo.png" />
          {/* pinterest */}
          <img src="/pinterest-logo.png" />
        </div>
      </div>
      {/* section 2 */}
      <div>
        <p>Pearl Theme</p>
        <p>Buy Pearl Theme</p>
        <p>User Guide</p>
        <p>Demo Admin</p>
        <p>Help Center</p>
      </div>
      {/* section 3 */}
      <div>
        <p>Store</p>
        <p>Sign in</p>
        <p>Orders and Returns</p>
        <p>Privacy Policy</p>
        <p>Contact Us</p>
      </div>
      {/* section 4 */}
      <div>
        <p>Search</p>
        <p>Search Terms</p>
        <p>Advanced Search</p>
      </div>

      <style jsx>{`
        .container-main {
          bottom: 0;
          position: absolute;
          width: 100%;
          display: flex;
          justify-content: space-around;
          background-color: #363434;
          color: #bbb;
          padding: 1em 0;
        }

        .logo-pearl {
          font-size: 3em;
          padding: 0;
          margin: 0;
          color: #636261;
        }

        .container-social {
          display: flex;
          justify-content: space-between;
        }

        img {
          width: 1.5em;
        }
      `}</style>
    </div>
  );
};

export default Footer;
