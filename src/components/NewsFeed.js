import { useEffect, useState } from "react";
import axios from "axios";

const NewsFeed = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://crypto-news-live3.p.rapidapi.com/news",
      headers: {
        "x-rapidapi-host": "crypto-news-live3.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
      },
    };

    axios
      .request(options)
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const firstTen = articles?.slice(1, 18);

  return (
    <div className="news-feed">
      <h2>News Feed :</h2>
      {firstTen?.map((article) => (
        <a key={firstTen.indexOf(article)} href={article.url}>
          <p>{article.title}</p>
        </a>
      ))}
    </div>
  );
};

export default NewsFeed;
