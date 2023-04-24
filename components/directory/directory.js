import { useState, useEffect } from "react";
import Search from "../search/search";
import DirectoryBox from "../directoryBox/directoryBox";
import styles from "./Directory.module.css"



const Directory = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/6444cf6d9d312622a3504fe0")
      .then((response) => response.json())
      .then((data) => setData(data.record));
  }, []);

  const handleDetailsClick = (href) => {
    window.open(href, "_blank");
  };
  
  const handleApplyClick = (href) => {
    window.open(href, "_blank");
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const filteredData = data.filter((item) => {
    const searchWords = searchTerm.toLowerCase().split(" ");
    return searchWords.every((word) => {
      return (
        item["Grant Program Details"]?.toLowerCase().includes(word) ||
        item["description"]?.toLowerCase().includes(word)
      );
    });
  });


  const computeTotalPages = (data, itemsPerPage) => {
    return Math.ceil(data.length / itemsPerPage);
  };

  const computeCurrentItems = (data, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };
  const [totalPages, setTotalPages] = useState(computeTotalPages(data, itemsPerPage));
  const [currentItems, setCurrentItems] = useState(computeCurrentItems(data, currentPage, itemsPerPage));

  useEffect(() => {
    setTotalPages(computeTotalPages(filteredData, itemsPerPage));
    setCurrentItems(computeCurrentItems(filteredData, currentPage, itemsPerPage));
  }, [filteredData, currentPage, itemsPerPage]);

  
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  let content;
  if (filteredData.length > 0) {
    content = (
      <div>
        
        <div className={styles.pagination}> <div>Page {currentPage} of {totalPages}</div>
          <button onClick={handlePrevPage}>Prev</button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={currentPage === i + 1 ? styles.active : ""}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button onClick={handleNextPage}>Next</button>
        </div>
       
         <DirectoryBox
          data={currentItems}
          onDetailsClick={handleDetailsClick}
          onApplyClick={handleApplyClick}
          backgroundColor="#b2b5b4"
          
        />
        
        
        <div className={styles.pagination}><div>Page {currentPage} of {totalPages}</div> 
  
          <button onClick={handlePrevPage}>Prev</button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={currentPage === i + 1 ? styles.active : ""}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button onClick={handleNextPage}>Next</button>
        </div>
      </div>
    );
  } else {
    content = (
      <div>
        <p className={styles.noResults} >There is no matching results with your criteria... Please try again with other keywords</p>
      </div>
    );
  }

  return (
     <div> 
   
 <Search onSearch={handleSearch} /> 
 {content}
      
      </div>
  );
};

export default Directory;