import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-column">
        <a href="/">Home</a>
        <a href="/">About Us</a>
        <a href="/">Academics</a>
        <a href="/">Facilities</a>
        <a href="/">Activities</a>
        <a href="/">Contact Us</a>
        <div className="school-address">
          <p>Lord Mahavir English School</p>
          <p>Santnagar, Kada</p>
          <p>Tal. Ashti, Dist. Bid, Maharashtra - 414202</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
