import { useEffect, useState } from "react";

export const UsePlaying = (apiPath) => {
  const [content, setContent] = useState([]);
  useEffect(() => {
    const fetch = require("node-fetch");

    const url = `https://api.themoviedb.org/3/${apiPath}?language=en-US&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDQ1NjE2OWQwNjJiZjc4Nzc0ZDUwNDI1ZjgzZWI5NCIsInN1YiI6IjY1ZmExNWY2OTU3ZTZkMDE2NDA1MmE4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iXwQgCBCOV6VoYce4OxwoQvVPLb6ozL8ZLA5MTB5xkw",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setContent(json.results))
      .catch((err) => console.error("error:" + err));
  }, [apiPath]);
  return content;
};
