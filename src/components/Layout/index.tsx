import Navbar from "src/components/Navbar";

const Layout: React.FunctionComponent<any> = ({ children }): JSX.Element => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
