import React, { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";

const DefaultNews = () => {
  const [news, setNews] = useState([]);
  const apiURL = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
  const apiKey = "364993d049084ce98c88c51585b1464e"; // Ensure the API key is correct and replace with actual key

  useEffect(() => {
    const fetchDefaultNews = async () => {
      try {
        const response = await fetch(apiURL + apiKey);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const actualNews = data.articles.filter((item) => item.urlToImage != null);
        setNews(actualNews);
        console.log(actualNews);
      } catch (error) {
        console.error("Error fetching the news: ", error);
      }
    };

    fetchDefaultNews();
  }, []);

  return (
    <div className="container">
      <h1>Highlighted News of the Day</h1>
      <div className="newsContainer">
        {news.map((item, index) => (
          <NewsCard key={index} result={item} />
        ))}
      </div>
    </div>
  );
};

export default DefaultNews;
