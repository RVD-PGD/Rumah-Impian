import Navbar from "./navbar";

const Navbar = ({ children }) => {
    return (
      <>
        <Navbar />
        <main>{children}</main>
      </>
    );
  };
  
  export default Navbar;