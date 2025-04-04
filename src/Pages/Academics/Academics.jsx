import "./Academics.scss";
import download from "../../assets/Icons/download-arrow-icon.svg";
import { useState } from "react";
import { useEffect } from "react";
const Academics = () => {
  const [query, setQuery] = useState("");
  const transferCertificates = [
    {
      path: "/assets/Documents/TC/TC695.pdf",
      fileName: "695.pdf",
      title: "695",
    },
    {
      path: "/assets/Documents/TC/PujitKothari.pdf",
      fileName: "945.pdf",
      title: "945",
    },
  ];

  const handleDownload = () => {
    const file = transferCertificates.find((doc) => doc.title === query);
    if (file) {
      const link = document.createElement("a");
      link.href = file.path;
      link.setAttribute("download", file.fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("File not found!");
    }
  };

  return (
    <div className="academics-container">
      <div className="transfer-certificate-parent-container">
        <div className="transfer-certificate-text-container">
          <h2>Transfer Certificate</h2>
        </div>
        <div className="faculty-details-table-container">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginRight: "20px",
            }}
          />
          <button onClick={handleDownload}>Go</button>
        </div>
      </div>
    </div>
  );
};

export default Academics;
