import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import classNames from 'classnames';

const Table : any = () => {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch(
        `https://s3.amazonaws.com/open-to-cors/assignment.json`,
        {
          method: "GET",
        }
      );

      if (response.ok) {
        // Handle success
        const temp = await response.json();
        setData(temp["products"]);
        console.log(temp["products"]);
        console.log(data);
      } else {
        // Handle error
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>Table</div>
    </>
  );
};

export default Table;