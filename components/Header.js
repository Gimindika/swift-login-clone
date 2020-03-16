const Header = () => {
  return (
    <div className="container-header">
      {/* left */}
      <div className="container-left">
        {/* logo */}
        <img className="logo-swift" src="/logo-swift.png" />

        {/*  nav */}
        <div className="container-nav">
          <li>WOMEN</li>
          <li>MEN</li>
          <li>GEAR</li>
          <li>TRAINING</li>
          <li>SALE</li>
          <li>CUSTOM MENU</li>
        </div>
      </div>

      {/* right  */}
      <div className="container-right">
        {/* cart */}
        <img className="icon-cart" src="/cart.png" />
        {/* search */}
        <div className="container-search">
          <input placeholder="Search entire store here..." />
          <span>
            <img className="icon-search" src="/search.png" />
          </span>
        </div>
      </div>
      <style jsx>{`
        .container-header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin: 2em 0;
        }

        .container-nav {
          display: flex;
        }

        .container-right {
          width: 300px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          margin-right: 1em;
        }

        .container-search {
          border-bottom: 1px solid black;
          display:flex;
          justify-content: space-between;
        }

        .logo-swift {
          width: 200px;
          cursor: pointer;
        }

        .icon-cart {
          align-self: flex-end;
          width: 2em;
          cursor: pointer;
        }

        .icon-search {
          width: 1.5em;
          cursor:pointer;
        }

        li {
          list-style: none;
          margin: 1em;
          font-size: 1.25em;
          font-weight: 600;
        }

        input {
          border: none;

          padding: 0.3em;
        }

        input:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default Header;
