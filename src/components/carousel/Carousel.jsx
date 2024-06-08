import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FistCaraousel from "../../assets/Home/Carousel/1.jpg";
import SecondCaraousel from "../../assets/Home/Carousel/2.jpg";
import ThirdCaraousel from "../../assets/Home/Carousel/3.jpg";
import FourCaraousel from "../../assets/Home/Carousel/4.jpg";
import FiveCaraousel from "../../assets/Home/Carousel/5.jpg";
import SixCaraousel from "../../assets/Home/Carousel/6.jpg";
import SeventhCaraousel from "../../assets/Home/Carousel/7.jpg";

const HomeCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={FistCaraousel} width={400} height={300}></img>
      </div>
      <div>
        <img src={SecondCaraousel} width={400} height={300}></img>
      </div>
      <div>
        <img src={ThirdCaraousel} width={400} height={300}></img>
      </div>
      <div>
        <img src={FourCaraousel} width={400} height={300}></img>
      </div>
      <div>
        <img src={FiveCaraousel} width={400} height={300}></img>
      </div>
      <div>
        <img src={SixCaraousel} width={400} height={300}></img>
      </div>
      <div>
        <img src={SeventhCaraousel} width={400} height={300}></img>
      </div>
    </Slider>
  );
};

export default HomeCarousel;
