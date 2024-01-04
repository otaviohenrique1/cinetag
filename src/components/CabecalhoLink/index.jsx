import { Link } from "react-router-dom";
import styles from "./CabecalhoLink.modulo.css";
import PropTypes from 'prop-types';

function CabecalhoLink({ url, children }) {
  return (
      <Link to={url} className={styles.link}>
        {children}
      </Link>
  );
}

CabecalhoLink.propTypes = {
  url: PropTypes.any,
  children: PropTypes.node
}

export default CabecalhoLink;