import { useState, useEffect } from "react";


export const useSearch = (apiPath, queryTerm) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.themoviedb.org/3/${apiPath}?query=${queryTerm}&api_key=fd456169d062bf78774d50425f83eb94`;
        const response = await fetch(url);
        const json = await response.json();
        setContent(json.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiPath, queryTerm]);

  return content;
};
