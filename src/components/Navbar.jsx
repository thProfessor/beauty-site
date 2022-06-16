import styles from "../styles/homepage.module.css";
import Logo from "../images/logo.png";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      target: "/home",
    },
    {
      name: "About",
      target: "/home",
    },
    {
      name: "Contact",
      target: "/home",
    },
    {
      name: "Delivery",
      target: "/home",
    },
  ];
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img
            src={Logo}
            alt="logo"
            style={{ width: "50px", marginRight: "1rem" }}
          />
          <h2>Amamzon</h2>
        </div>

        <div className={styles.links}>
          {links.map((link, index) => {
            return (
              <span key={index} className={styles.link}>
                {link.name}
              </span>
            );
          })}
        </div>
        <div className="search">
          <input type="text" placeholder="search your item" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
