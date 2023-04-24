import styles from "../directory/Directory.module.css";

const DirectoryBox = ({ data, onDetailsClick, onApplyClick, backgroundColor }) => {
    
  return (
    <div className={styles.directory}>
      
      
      {data.map((item, index) => (
        
        <tr key={index} className={styles.box} style={{ backgroundColor: backgroundColor  }}>
            <thead>
  <tr className="text-sm text-left uppercase" style={{color: "#6a6a6a"}}>
    <td className={styles.tl}>
      <div className="flex gap-1 items-center">
        <span>Grant Program</span>
      </div>
      
    </td>
    <td className={styles.grantdetails}>Grant Details</td>
    <td className={styles.ap}>Apply For Grant</td>
  </tr>
</thead>
          <div className={styles.grantProgram}  >
            {item["Grant Program Details"]}
          </div>
          <div className={styles.description}>{item["description"]}</div>

          <button
            className={styles.details}
            onClick={() => onDetailsClick(item["Grant Program Details-href"])}
          >
            Details
          </button>
          <button
            className={styles.apply}
            onClick={() => onApplyClick(item["Apply For Grant-href"])}
          >
            Apply
          </button>
        </tr>
      ))}
    </div>
  );
};

export default DirectoryBox;