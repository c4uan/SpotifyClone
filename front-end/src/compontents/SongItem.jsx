/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const SongItem = ({ image, name, duration, artist, audio, id, index }) => {
  return (
    <Link to={`/song/${id}`} className="song-item">
      <div className="song-item__number-album">
        <p>{index + 1}</p>
        <div className="song-item__album">
          <img
            className="song-item__image"
            src={image}
            alt={`Imagem da Música${name}`}
          />
        </div>

        <p className="song-item__name">{name}</p>
      </div>
      <p>{duration}</p>
    </Link>
  );
};

export default SongItem;
