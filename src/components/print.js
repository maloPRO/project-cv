import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import App from "./App";
import '../styles/App.css';

export default function PrintComponent() {
  let componentRef = useRef();

  return (
    <>
      <div>
        {/* button to trigger printing of target component */}
        <ReactToPrint
          trigger={() => <button className="print">Download PDF</button>}
          content={() => componentRef}
        />

        {/* component to be printed */}
        <App ref={(el) => (componentRef = el)} />
      </div>
    </>
  );
}