import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FistCaraousel from "../../../assets/Home/ImageGallery/1.jpg";
import SecondCaraousel from "../../../assets/Home/ImageGallery/2.jpg";
import ThirdCaraousel from "../../../assets/Home/ImageGallery/3.jpg";
import FourCaraousel from "../../../assets/Home/ImageGallery/4.jpg";
import FiveCaraousel from "../../../assets/Home/ImageGallery/5.jpg";
import SixCaraousel from "../../../assets/Home/ImageGallery/6.jpg";
import SevenCaraousel from "../../../assets/Home/ImageGallery/7.jpg";
import EightCaraousel from "../../../assets/Home/ImageGallery/8.jpg";
import NineCaraousel from "../../../assets/Home/ImageGallery/9.jpg";
import TenthCaraousel from "../../../assets/Home/ImageGallery/10.jpg";
import ElevenCaraousel from "../../../assets/Home/ImageGallery/11.jpg";
import TwelveCaraousel from "../../../assets/Home/ImageGallery/12.jpg";
import ThirteenCaraousel from "../../../assets/Home/ImageGallery/13.jpg";
import FourteenCaraousel from "../../../assets/Home/ImageGallery/14.jpg";
import FifteenCaraousel from "../../../assets/Home/ImageGallery/15.jpg";
import SixteenCaraousel from "../../../assets/Home/ImageGallery/16.jpg";
import SeventeenCaraousel from "../../../assets/Home/ImageGallery/17.jpg";
import EighteenCaraousel from "../../../assets/Home/ImageGallery/18.jpg";
import "./imagegallery.scss";

const ImageGallery = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    centerMode: true,
  };
  const IMAGE_WIDTH = 500;
  const IMAGE_HEIGHT = 300;

  const carouselArray = [
    {
      path: FistCaraousel,
    },
    {
      path: SecondCaraousel,
    },
    {
      path: ThirdCaraousel,
    },
    {
      path: FourCaraousel,
    },
    {
      path: FiveCaraousel,
    },
    {
      path: SixCaraousel,
    },
    {
      path: SevenCaraousel,
    },
    {
      path: EightCaraousel,
    },
    {
      path: NineCaraousel,
    },
    {
      path: TenthCaraousel,
    },
    {
      path: ElevenCaraousel,
    },
    {
      path: TwelveCaraousel,
    },
    {
      path: ThirteenCaraousel,
    },
    {
      path: FourteenCaraousel,
    },
    {
      path: FifteenCaraousel,
    },
    {
      path: SixteenCaraousel,
    },
    {
      path: SeventeenCaraousel,
    },
    {
      path: EighteenCaraousel,
    },
  ];
  return (
    <Slider {...settings}>
      {carouselArray.map((item, index) => {
        return (
          <div className="image-gallery-carousel-image" key={index}>
            <img
              src={item.path}
              width={IMAGE_WIDTH}
              height={IMAGE_HEIGHT}
            ></img>
          </div>
        );
      })}
    </Slider>
  );
};

export default ImageGallery;
