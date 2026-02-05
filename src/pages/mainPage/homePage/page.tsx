import classNames from "classnames";
import styles from "./style.module.scss";

const HomePage = () => {
  return (
    <div className={classNames(styles.pageWrapper)}>
      <div className={classNames(styles.imageContainer)}></div>
      <div className={classNames(styles.buttonContainer)}></div>
      <div className={classNames(styles.inputContainer)}></div>
    </div>
  );
};

export default HomePage;
