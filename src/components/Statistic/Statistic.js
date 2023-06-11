import styles from "./Statictic.module.css";
import Proptypes from "prop-types";

var randomColor = require("randomcolor");

function Statistic({ title, stats }) {
  return (
    <section className={styles.statistic}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.statList}>
        {stats.map((stat) => {
          return (
            <li
              key={stat.id}
              className={styles.item}
              style={{ backgroundColor: randomColor() }}
            >
              <span className={styles.label}>{stat.label}</span>
              <span className={styles.percentage}>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistic.propTypes = {
  title: Proptypes.string.isRequired,
  stats: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.string.isRequired,
      label: Proptypes.string.isRequired,
      percentage: Proptypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Statistic;
