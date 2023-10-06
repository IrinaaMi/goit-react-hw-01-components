import styles from '../Statistics/Statistics.module.css'
import PropTypes from 'prop-types';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export const Statistics = ({ stats, title }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title.toUpperCase()}</h2>}

      <ul className={styles.statList}>
        {stats.map(info => (
          <li
            key={info.id}
            className={styles.item}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <span className={styles.label}>{info.label}</span>
            <span className={styles.percentage}>{info.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  )
}


