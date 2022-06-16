const Layout = ({ children }) => {
  const layoutStyles = {
    margin: "1.5rem 2rem",
    display: "flex",
    flexDirection: "column",
    rowGap: "5rem",
  };
  return <main style={layoutStyles}>{children}</main>;
};

export default Layout;
