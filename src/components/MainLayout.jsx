import Footer from './Footer';
import NavBar from './NavBar';

const MainLayout = ({ children }) => {
  /**
   * The <></> are known as fragments, it's a shortcut to <React.Fragment></React.Fragment>
   *
   * Why we use them?
   *
   * The react code must have a single parent node. Normally we have a <div></div> or similar,
   * but in cases where we don't wanna apply any style, and we want to return
   * multiple components, we just wrapped it all inside a fragment.
   *
   */
  return (
    <>
      <NavBar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
};

export default MainLayout;
