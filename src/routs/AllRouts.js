import { Routes, Route } from "react-router-dom";
import { MovieDetails, Movies, PageNotFound, Search } from "../pages";

export const AllRouts = () => {
  return (
    <div className="dark:bg-slate-800">
      <main>
        <Routes>
          <Route path="" element={<Movies apiPath="movie/now_playing" />} />
          <Route path="title/:id" element={<MovieDetails />} />
          <Route
            path="movies/top"
            element={<Movies apiPath="movie/top_rated" />}
          />
          <Route
            path="movies/popular"
            element={<Movies apiPath="movie/popular" />}
          />
          <Route
            path="movies/upcoming"
            element={<Movies apiPath="/movie/upcoming" />}
          />
          <Route path="search" element={<Search apiPath="search/movie" />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
};
