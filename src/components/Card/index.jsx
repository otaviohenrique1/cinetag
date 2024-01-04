import styles from './Card.module.css';
import PropTypes from 'prop-types';
import iconeFavoritar from './favoritar.png';

// eslint-disable-next-line no-unused-vars
function Card({ id, titulo, capa }) {
  return (
    <div className={styles.container}>
      <img src={capa} alt={titulo} className={styles.capa} />
      <h2>{titulo}</h2>
      <img src={iconeFavoritar}
        alt="Favoritar filme"
        className={styles.favoritar} />
    </div>

  );
}

Card.propTypes = {
  id: PropTypes.string,
  titulo: PropTypes.string,
  capa: PropTypes.string,
}

export default Card;