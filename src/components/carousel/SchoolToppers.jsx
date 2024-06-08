import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FistCaraousel from "../../assets/Home/SchoolToppers/class1.jpeg";
import SecondCaraousel from "../../assets/Home/SchoolToppers/class2.jpeg";
import ThirdCaraousel from "../../assets/Home/SchoolToppers/class3.jpeg";
import FourCaraousel from "../../assets/Home/SchoolToppers/class4.jpeg";
import FiveCaraousel from "../../assets/Home/SchoolToppers/class5.jpeg";
import SixCaraousel from "../../assets/Home/SchoolToppers/class6.jpeg";
import SevenCaraousel from "../../assets/Home/SchoolToppers/class7.jpeg";
import EightCaraousel from "../../assets/Home/SchoolToppers/class8.jpeg";
import NineCaraousel from "../../assets/Home/SchoolToppers/class9.jpeg";
import TenCaraousel from "../../assets/Home/SchoolToppers/class10.jpeg";
import "./SchoolToppers.scss";

const SchoolToppers = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 4,
    autoplay: true,
    centerMode: true,
  };
  const schoolToppers = [
    {
      src: FistCaraousel,
      class: "I",
      name: "Wayal Sanskruti",
    },
    {
      src: SecondCaraousel,
      class: "II",
      name: "Sourabh Pawar",
    },
    {
      src: ThirdCaraousel,
      class: "III",
      name: "Shekade Snehal",
    },
    {
      src: FourCaraousel,
      class: "IV",
      name: "Aditi Garje",
    },
    {
      src: FiveCaraousel,
      class: "V",
      name: "Ayush kaswa",
    },
    {
      src: SixCaraousel,
      class: "VI",
      name: "Arnav Dahitode",
    },
    {
      src: SevenCaraousel,
      class: "VII",
      name: "Nishita Nahar",
    },
    {
      src: EightCaraousel,
      class: "VIII",
      name: "Grisha Bhandari",
    },
    {
      src: NineCaraousel,
      class: "IX",
      name: "Sharvil Bhalgat",
    },
    {
      src: TenCaraousel,
      class: "X",
      name: "Shubhankar Dabitode",
    },
  ];
  return (
    <Slider {...settings}>
      {schoolToppers.map((item, index) => {
        return (
          <div className="school-toppers-carousel-image-container" key={index}>
            <div className="school-toppers-carousel-image">
              <img src={item.src} width={200}></img>
            </div>
            <div className="school-toppers-carousel-Class bold">
              <p>Class: {item.class}</p>
            </div>
            <div className="school-toppers-carousel-name">
              <p>{item.name}</p>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default SchoolToppers;
