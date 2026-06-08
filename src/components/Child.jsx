import GrandChild from "./GrandChild";
import styles from "../styles/Child.module.css";

console.log(styles);

export default function Child() {
  return (
    <div className="child-wrapper">
      <div className={styles.wrapper}>
        <h1 className="header">Child </h1>
        <GrandChild />
      </div>
    </div>
  );
}
