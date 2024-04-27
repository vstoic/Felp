import React from 'react';
import Nav from '../Nav/nav';
import Footer from '../Footer/footer';

const Layout = ({ children }) => {
  return (
    <div className="main-layout">
      <Nav />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
