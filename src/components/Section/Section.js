import PropTypes from 'prop-types'
import styles from '../Section/Section.module.css'
export const Section = ({ title, children }) => {
//     const Wrapper = styled.div`
//     position: relative;

//     background: #1f1144;
//   `
    return <section className={styles.section}> {title && <h2 className={styles.title}>{title}</h2>}{children}</section>
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  
}

