import Header from "./Header";
import Footer from "./Footer";

const Layout = Page => {
  return () => (
    <div className="container-main">
      <Header />
      <Page />
      <Footer />
      <style jsx>{`
        .container-main {
          position: relative;
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
};

export default Layout;
