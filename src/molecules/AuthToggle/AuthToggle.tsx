import { Link } from "react-router-dom";

//styles
import styles from "./styles.module.scss";

interface AuthToggleProps {
  text: string;
  link: string;
  path: string;
}

const AuthToggle: React.FC<AuthToggleProps> = ({ text, link, path }) => {
  return (
    <p className={styles["auth-toggle"]}>
      <span>{text}</span>
      <Link to={path}>{link}</Link>
    </p>
  );
};

export default AuthToggle;
