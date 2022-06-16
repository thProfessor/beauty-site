import styles from "../styles/homepage.module.css";
import Card from "./Card";
import Logo from "../images/logo.png";
const Footer = () => {
  const data = [
    {
      name: "Deo",
      price: 20,
      img: Logo,
    },
    {
      name: "Body wash",
      price: 25,
      img: Logo,
    },
    {
      name: "Shampoo",
      price: 15,
      img: Logo,
    },
  ];
  return (
    <>
      <div className={styles.footer}>
        {data.map((item) => {
          return <Card name={item.name} price={item.price} img={item.img} />;
        })}
      </div>
    </>
  );
};

export default Footer;
