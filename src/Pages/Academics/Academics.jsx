import "./Academics.scss";
import download from "../../assets/Icons/download-arrow-icon.svg";
import { useState } from "react";
import { useEffect } from "react";
const Academics = () => {
  const [query, setQuery] = useState("");
  const transferCertificates = [
    {
      path: "/assets/Documents/TC/TC695.pdf",
      fileName: "TC695.pdf",
      title: "TC695.pdf",
    },
    {
      path: "/assets/Documents/TC/PujitKothari.pdf",
      fileName: "PujitKothari.pdf",
      title: "PujitKothari.pdf",
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
