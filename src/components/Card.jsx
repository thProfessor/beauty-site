import styles from "../styles/homepage.module.css";

const Card = ({ name, price, img }) => {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h3>{name}</h3>
        <h4>Cost {price}$</h4>
        <button className={styles.btn}>Shop Now</button>
      </div>
      <img src={img} alt="product" style={{ width: "80px", height: "80px" }} />
    </div>
  );
};
export default Card;
