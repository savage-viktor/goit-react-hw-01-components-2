import styles from "./Statictics.module.css";

function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.statList}>
        {stats.map((stat) => {
          return (
            <li className={styles.item}>
              <span className={styles.label}>{stat.label}</span>
              <span className={styles.percentage}>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Statistics;
