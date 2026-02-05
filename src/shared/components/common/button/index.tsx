import classNames from "classnames";
import styles from "./style.module.scss";

const CustomButton = () => {
  return (
    <div className={classNames(styles.mainContainer)}>
      <h1>Hello Button</h1>
    </div>
  );
};

export default CustomButton;
