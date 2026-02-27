import classNames from "classnames";
import styles from "./style.module.scss";
import { projectClicon } from "../../../shared/components/common/barChart/chartData";
import ApexChart from "../../../shared/components/common/barChart/apexChart";

const HomePage = () => {
  return (
    <div className={classNames(styles.pageWrapper)}>
      <ApexChart series={projectClicon} />
      <div className={classNames(styles.imageContainer)}></div>
      <div className={classNames(styles.buttonContainer)}></div>
      <div className={classNames(styles.inputContainer)}></div>
    </div>
  );
};

export default HomePage;
