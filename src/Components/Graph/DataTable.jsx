import React, { useEffect } from "react";
import styles from "./Graphs.module.css";
import Header from "./Header";

const DataTable = (props) => {
  const title = props.title;
  const differ = props.differ;

  const data = [
    { category: "Sales", thisMonth: 1194.58, ytd: 11418.29 },
    { category: "Advertising", thisMonth: 6879.02, ytd: 9217.36 },
    { category: "Inventory", thisMonth: 4692.26, ytd: 9768.09 },
    { category: "Entertainment", thisMonth: 0.00, ytd: 0.00 },
    { category: "Product", thisMonth: 4652.10, ytd: 2529.90 },
  ];

  useEffect(()=>{

  },[differ])

  return (
    <div className={styles.box}>
      <Header title={title}/>
      <table>
        <thead>
          <tr>
            <th>Account</th>
            <th>This Month</th>
            <th>YTD</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.category}</td>
              <td>{(row.thisMonth * differ).toFixed(2)}</td>
              <td>{(row.ytd * differ).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
