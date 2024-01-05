import styles from './Card.module.css';
import PropTypes from 'prop-types';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { useFavoritoContext } from 'context/FavoritosContext';
import { Link } from 'react-router-dom';

function Card({ id, titulo, capa }) {
  // eslint-disable-next-line no-unused-vars
  const { favorito, adicionarFavorito } = useFavoritoContext();

  const ehFavorito = favorito.some((fav) => fav.id === id);

  const icone = (!ehFavorito) ? iconeFavoritar : iconeDesfavoritar;

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
      </Link>
      <img src={icone}
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