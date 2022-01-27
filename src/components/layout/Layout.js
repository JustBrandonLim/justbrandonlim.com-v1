import * as React from "react";

import Header from "../layout/Header";
import Main from "../layout/Main";
import Footer from "../layout/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
