import "./Header.scss";
import schoolLogo from "../../assets/logo.png";
import cbseLogo from "../../assets/cbselogo.png";
import { useRef, useState } from "react";
const Header = () => {
  const [activeNavLink, setActiveNavLink] = useState("home");
  const [isMandatoryDisclosureOpen, setIsMandatoryDisclosureOpen] =
    useState(false);
  const mandatoryDisclosureRef = useRef(null);
  const mandatoryDisclousers = [
    {
      path: "../../assets/Documents/Trust Registration .pdf",
      fileName: "Trust Registration.pdf",
      title: "Trust Registration",
    },
    {
      path: "../../assets/Documents/NOC State Government.pdf",
      fileName: "NOC State Government.pdf",
      title: "State Government NOC",
    },
    {
      path: "../../assets/Documents/school information-1.xlsx",
      fileName: "school information-1.xlsx",
      title: "School Information & Faculty Details",
    },
    {
      path: "../../assets/Documents/Self Certificate.pdf",
      fileName: "Self Certification.pdf",
      title: "Self Certification",
    },
    {
      path: "../../assets/Documents/Affiliation Letter 2020-2025.pdf",
      fileName: "Affiliation Letter 2020-2025.pdf",
      title: "Affiliation Letter",
    },
    {
      path: "../../assets/Documents/Fire and Safety Certificate.pdf",
      fileName: "Fire and Safety Certificate.pdf",
      title: "Fire and Safety Certificate",
    },
    {
      path: "../../assets/Documents/Building Safety Certificate.pdf",
      fileName: "Building Safety Certificate.pdf",
      title: "Building Safety Certificate",
    },
    {
      path: "../../assets/Documents/Water and sanitation Certificate.pdf",
      fileName: "Water and sanitation Certificate.pdf",
      title: "Water and sanitation Certificate",
    },
    {
      path: "../../assets/Documents/Affidavit 2024.pdf",
      fileName: "Affidavit 2024.pdf",
      title: "Affidavit 2024",
    },
  ];
  const handleOnClickOutside = (event) => {
    if (
      mandatoryDisclosureRef.current &&
      !mandatoryDisclosureRef.current.contains(event.target)
    ) {
      setIsMandatoryDisclosureOpen(false);
    }
  };

  return (
    <div className="header-container">
      <div className="school-logo-container">
        <img src={schoolLogo} width={60}></img>
      </div>
      {isMandatoryDisclosureOpen && (
        <div
          className="mandatory-disclosure-items-parent"
          onClick={handleOnClickOutside}
        >
          <div
            className="mandatory-disclosure-items-containers-hidden"
            ref={mandatoryDisclosureRef}
          >
            {mandatoryDisclousers.map((item, key) => {
              return (
                <div className="mandatory-disclosure-item" key={key}>
                  <a
                    className="mandatory-disc-link"
                    href={item.path}
                    download={item.fileName}
                  >
                    {item.title}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className="school-name-contact-and-nav-container">
        <div className="school-name-contact-container">
          <div className="school-name-container">
            <span className="trust-name">
              Vardhaman Mahavir Charitable Trust&apos;s
            </span>
            <span className="school-name">Lord Mahavir English School</span>
          </div>
          <div className="school-contact-container">
            <span className="telephon-number">Tel.: +91 96331 66181</span>
            <span className="email-id">Email: lmctenglishschool@gmail.com</span>
          </div>
        </div>
        <div className="navigation-bar">
          <div
            className={
              activeNavLink === "home" ? "nav-link-active" : "nav-link"
            }
            onClick={() => setActiveNavLink("home")}
          >
            <a href="/">Home</a>
          </div>
          <div
            className={
              activeNavLink === "about-us" ? "nav-link-active" : "nav-link"
            }
            onClick={() => setActiveNavLink("about-us")}
          >
            <a href="/about-us">About Us</a>
          </div>
          <div
            className={
              activeNavLink === "academics" ? "nav-link-active" : "nav-link"
            }
            onClick={() => setActiveNavLink("academics")}
          >
            <a href="/academics">Academics</a>
          </div>
          <div
            className={
              activeNavLink === "facilities" ? "nav-link-active" : "nav-link"
            }
            onClick={() => setActiveNavLink("facilities")}
          >
            <a href="/">Facilities</a>
          </div>
          <div
            className={
              activeNavLink === "activities" ? "nav-link-active" : "nav-link"
            }
            onClick={() => setActiveNavLink("activities")}
          >
            <a href="/">Activities</a>
          </div>
          <div
            className={
              activeNavLink === "contact-us" ? "nav-link-active" : "nav-link"
            }
            onClick={() => setActiveNavLink("contact-us")}
          >
            <a href="/">Contact Us</a>
          </div>
          <div
            className={`${
              activeNavLink === "mandatory-disclosure"
                ? "nav-link-active"
                : "nav-link"
            } mandatory-disclosure-parent`}
            onClick={() => {
              setActiveNavLink("mandatory-disclosure");
              setIsMandatoryDisclosureOpen((previous) => !previous);
            }}
          >
            <a href="#">Mandatory Disclosure</a>
          </div>
        </div>
      </div>
      <div className="cbse-logo-container">
        <img src={cbseLogo} width={60}></img>
      </div>
    </div>
  );
};

export default Header;
