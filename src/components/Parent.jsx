import Child from "./Child";
import "../global.css";
import styles from "../styles/Parent.module.css";

export default function Parent() {
  return (
    <div className="parent-wrapper">
      <div className={styles.wrapper}>
        <h1 class="color-red-800 font-medium" className={styles.header}>
          Parent
        </h1>
        <h1 className="text-red-800 font-medium">tailwind</h1>
        <Child />
      </div>
    </div>
  );
}
