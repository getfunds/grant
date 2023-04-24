import styles from "../directory/Directory.module.css";

const DirectoryBox = ({ data, onDetailsClick, onApplyClick, backgroundColor }) => {
    
  return (
    <div className={styles.directory}>
      
      
      {data.map((item, index) => (
        
        <tr key={index} className={styles.box} style={{ backgroundColor: backgroundColor  }}>
            <thead>
  <tr className="text-sm text-left uppercase" style={{color: "#6a6a6a"}}>
    <td className={styles.tl}>
        <span>Grant Program</span>
    </td>
    <tr>
  <td className={styles.grantdetails}>Grant Details</td>
  <td>
    <button
      className={styles.details}
      onClick={() => onDetailsClick(item["Grant Program Details-href"])}
    >
      Details
    </button>
  </td>


    <td className={styles.ap}>Apply For Grant</td>
    <td>
    <button
            className={styles.apply}
            onClick={() => onApplyClick(item["Apply For Grant-href"])}
          >
            Apply
          </button>
    </td>
    </tr>
  </tr>
</thead>
          <div className={styles.grantProgram}  >
            {item["Grant Program Details"]}
          </div>
          <div className={styles.description}>{item["description"]}</div>

          
          
        </tr>
      ))}
    </div>
  );
};

export default DirectoryBox;