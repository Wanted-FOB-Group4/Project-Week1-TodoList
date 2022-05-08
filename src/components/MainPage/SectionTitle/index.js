import styles from './SectionTitle.module.scss'

function SectionTitle({ title }) {
  return <h3 className={styles.sectionTitle}>{title}</h3>
}

export default SectionTitle
