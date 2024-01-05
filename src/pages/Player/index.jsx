import Banner from "components/Banner";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import videos from 'json/db.json';
// eslint-disable-next-line no-unused-vars
import styles from './Player.module.css';
import NaoEncontrada from "pages/NaoEncontrada";

function Player() {
  const parametros = useParams();
  const video = videos.find((video) => {
    return video.id === Number(parametros.id);
  });

  if (!video) {
    return <NaoEncontrada />
  }

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <iframe
        width="100%"
        height="100%"
        src={video.link}
        title={video.titulo}
        // eslint-disable-next-line react/no-unknown-property
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </>
  );
}

export default Player;