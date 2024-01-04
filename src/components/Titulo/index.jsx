import styles from './Titulo.module.css';
import PropTypes from 'prop-types';

function Titulo({ children }) {
  return (
    <div className={styles.texto}>{children}</div>
  );
}

Titulo.propTypes = {
  children: PropTypes.node
}

export default Titulo;