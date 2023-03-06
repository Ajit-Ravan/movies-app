import React, { useEffect, useState } from "react";
import axios from "axios";   
import SingleContent from "../../components/SingleContent/SingleContent";

const Trending = () => {

  const [content, setcontent] = useState([]);
  const fetchTrending = async () => {
    const { data } = await axios.get(       //we used axios here to fetch the data from api
      `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`   //after = is key it is inside .env file
    );
    console.log(data);
    setcontent(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, [])

    return (
      <div>
        <span className="pageTitle">Trending</span>
        <div className="trending">
          {content && content.map((c) => (
            <SingleContent />
          ))} 
        
        </div>
      </div>
    );
}

export default Trending;