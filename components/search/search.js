import styles from "../directory/Directory.module.css";


const DirectorySearch = ({ onSearch }) => {
  return (
    
    <div > <span className={styles.searchgrants}>
      Find A Relevant Grant:  </span>
      <input 
      className={styles.searchContainer}
        type="text"
        placeholder="Project Keyword"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  )
}

export default DirectorySearch;