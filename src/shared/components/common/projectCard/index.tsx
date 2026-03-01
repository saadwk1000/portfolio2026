import classNames from "classnames";
import styles from "./style.module.scss";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  tenure?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  title,
  description,
  tenure,
}) => {
  return (
    <div className={classNames(styles.mainContainer)}>
      <img src={imageSrc} alt={title} />
      <div className={classNames(styles.infoEnclosure)}>
        <h2 className={classNames(styles.heading)}>{title}</h2>
        <p className={classNames(styles.description)}>{description}</p>
        <p className={classNames(styles.tenure)}>{tenure}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
