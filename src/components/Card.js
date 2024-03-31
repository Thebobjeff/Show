import { Link } from "react-router-dom";
import backup from "../assets/images/backup.png";

export const Card = ({ info }) => {
  const content = info;
  const image = content.poster_path
    ? `https://image.tmdb.org/t/p/original${content.poster_path}`
    : backup;
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
        <Link to={`/title/ ${content.id}`}>
          <img className="rounded-t-lg" src={image} alt="" />
        </Link>
        <div className="p-5">
          <Link to={`/title/ ${content.id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {content.original_title}
            </h5>
          </Link>
          <Link to={`/title/ ${content.id}`}>
            {" "}
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {content.overview}
            </p>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};
