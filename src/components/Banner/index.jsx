import styles from './Banner.module.css';
import PropTypes from 'prop-types';

function Banner({ imagem }) {
  return (
    <div
      className={styles.capa}
      style={{ backgroundImage: `url('/imagens/banner-${imagem}.png')` }}
    ></div>
  );
}

Banner.propTypes = {
  imagem: PropTypes.string
}

export default Banner;