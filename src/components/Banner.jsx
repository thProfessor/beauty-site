import Logo from "../images/logo.png";
import styles from "../styles/homepage.module.css";

const Banner = () => {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.collection}>
          <h1>Trendy Collection</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            nulla?
          </p>
        </div>

        <div className={styles.imgBox}>
          <img src={Logo} alt="trendy" />
        </div>

        <div className={styles.numbers}>
          <h2 className="num">1.5M</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

          <h2 className="num">1.5M</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </>
  );
};

export default Banner;
