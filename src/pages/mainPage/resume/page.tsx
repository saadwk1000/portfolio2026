import classNames from "classnames";
import styles from "./style.module.scss";
import ProjectCard from "../../../shared/components/common/projectCard";

const Resume = () => {
  return (
    <div className={classNames(styles.mainContainer)}>
      <ProjectCard
        imageSrc="src/pp.avif"
        title="My Card"
        description="Hello World, my naem is Saad Waheed. Lead Engineer on Drones and Mechaatronics, under the supervision of ISI. I'm writing this bullshit down because I need to."
      />
    </div>
  );
};

export default Resume;
