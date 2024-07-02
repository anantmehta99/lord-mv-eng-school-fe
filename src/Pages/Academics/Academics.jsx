import "./Academics.scss";
import download from "../../assets/Icons/download-arrow-icon.svg";
const Academics = () => {
  const transferCertificates = [
    {
      path: "../../assets/Documents/TC/TC695.pdf",
      fileName: "695.pdf",
      title: "695",
    },
  ];
  return (
    <div className="academics-container">
      <div className="transfer-certificate-parent-container">
        <div className="transfer-certificate-text-container">
          <h2>Transfer Certificate</h2>
        </div>
        <div className="faculty-details-table-container">
          {transferCertificates.map((item, index) => (
            <div className="tc-container">
              <a href={item.path} download={item.fileName}>
                {item.title}
                <img src={download} width={25}></img>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academics;
