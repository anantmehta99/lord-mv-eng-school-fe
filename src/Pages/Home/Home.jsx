import HomeCarousel from "../../components/carousel/Carousel";
// import PrincipalImage from "../../assets/Home/PrincipalImage.jpg";
// import ChairmanImage from "../../assets/Home/chairman.jpg";
// import TrusteeImage from "../../assets/Home/Trustee.jpg";
import "./Home.scss";
import SchoolToppers from "../../components/carousel/SchoolToppers";
import TimeLineList from "../../components/TimeLineList/TimeLineList";
// import Spiral from "../../assets/shapes/spiral.svg";
import ImageGallery from "../../components/carousel/ImageGallery/ImageGallery";
import Messages from "../../components/Messages/Messages";
const Home = () => {
  return (
    <div className="home-page-container">
      <div className="home-page-body-container">
        <div className="home-carousel-container">
          <HomeCarousel />
        </div>
        {/* <div className="messages-parent-container">
          <div className="message-container">
            <h3>Principal&apos;s Message</h3>
            <img src={PrincipalImage} width={350} height={200} />
            <div className="message-text-container">
              <p>
                Welcome to the website of Mahavir English School, a part of the
                Vardhman Mahavir Charitable Trust, Kada,Beed district,
                Maharashtra.
              </p>
              <p className="message-bold">
                “Learning is a process that begins from a mother’s womb and ends
                in one’s tomb."
              </p>
              <p className="message-bold">
                21 century learning is the development of highly valuable skills
                set for the future and not merely learning of the facts or
                gaining bookish knowledge. In today’s fast paced world of rapid
                technology advancement and changes, learning throughout life is
                more important than ever.
              </p>
              <p className="message">
                Mahavir English School is truly a home away from home for all
                the students where they feel welcomed, cared for and where they
                are offered appropriate resources conducive for learning.
                <span className="bold">
                  “Committed to the country and its future ” is our motto and it
                  is the driving force behind all our activities. The school
                  offers a diverse range of activities and ensures that all the
                  students find their niche and develop their talents.
                </span>
              </p>
              <p>
                In line with our motto, the school offers a plethora of
                extracurricular activities like music, dance, drama, sports,
                arts and crafts, and other club activities that enrich our
                students learning experiences and enable them to grow into
                well-rounded individuals. Along with this, it has been our
                constant endeavour to instil values in our new generation that
                will lead them in the path of righteousness and happiness. In
                academics, we emphasize more interdisciplinary, learner-centric,
                experiential & application- based teaching-learning practices
                that yield joyful and rich learning outcomes.
              </p>
              <p>
                We welcome our parents to take an active role in the education
                of the child and be involved in our school’s journey. We are
                constantly re-defining and re-designing our pedagogy so as to
                meet the demands of the young learners entrusted to us. As an
                educator, I strongly believe that ‘Education’ is the most
                important tool for transformation of the society through
                enlightenment and empowerment.
                <span className="bold">
                  We will continue our educational journey following in the
                  footsteps of our inspiration Shri Adarsh Rishiji Maharaj.
                </span>
              </p>
              <p>
                I feel privileged to lead a team of dedicated staff, supportive
                parents and passionate students. I owe my gratitude to all the
                stakeholders for their unstinted support and good wishes. The
                academic achievements of Mahavir English School in the previous
                years speak volumes of its scintillating journey on the path of
                success. These incredible achievements are a reflection of the
                steadfast commitment and passion of our educators in preparing
                our students to be successful in the ever evolving world.
                Achieving these mile stones is not the end goal but the
                beginning of new goals and new learning at Mahavir English
                School. May this spirit of learning be an ongoing process in our
                lives and may Mahavir English School achieve great heights of
                success in the years to come.
              </p>
              <p>
                Let’s remember
                <span className="bold">
                  “Education is not preparation for life; education is life
                  itself.”
                </span>
              </p>
              <p className="message-bold">
                Wishing all the students a happy and successful journey of
                learning.
              </p>
              <p className="message-bold">K K Abhilash</p>
              <p className="message-bold">Principal</p>
            </div>
          </div>
          <div className="message-container">
            <h3>Chairman&apos;s Message</h3>
            <img src={ChairmanImage} width={350} height={200} />
            <div className="message-text-container">
              <p>Dear well wishers,</p>
              <p>
                Today, in a world where society is increasingly fragmented and
                polarized, our school remains a community where honesty and
                integrity matter. We are a school community of high
                expectations, academic and all other activities. At the same
                time, we are devoted to helping students develop intellectual,
                artistic, and personal interests contributing to holistic growth
                of each individual.
              </p>
              <p>
                The motto &quot;committed to the country and its future&quot;
                speaks volumes about the spirit of the school and inspires the
                budding students. This educational institution, as in the case
                of every other institution, had a small and humble beginning. It
                had its ups and downs during its past years of existence. In
                spite of its glorious feat as one of the best educational
                institutions in Maharashtra, it never commercializes education
                but continues to remain an institution of service, catering to
                the educational need of children. Mahavir English School has
                tried its best to excel in all departments of its students’
                growth. The specialty of this institute is that it has made
                quality education accessible to all, high and low, rich and
                poor, thanks to the highly motivated staff and the availability
                of quality infrastructure. During the past years, the
                institution has created an environment and ambience that fosters
                learning, as it provides the students with opportunities to
                explore and grow, through situations that challenge them to
                identify their strengths and reinforce them. In this regard the
                words of the great scientist Albert Einstein are memorable when
                he said, &quot; I don&#39;t teach my children. I create
                conditions for them to learn.”
              </p>
              <p>
                Center to our efforts to build an intellectual community is our
                dedicated faculty. Intensely devoted to the success of their
                students; the faculty serve as teachers, coaches, advisors,
                mentors and friends. In every area of school life, the faculty
                seeks to challenge and inspire students to reach new levels of
                enquiry and understanding. While we establish the foundation of
                your child&#39;s learning and ascertain his/her thorough
                development to enhance his present, we also undertake to prepare
                him/her for the highly competitive arena of further studies for
                his/her bright future. I welcome parents and students to be a
                part of the Mahavir English School family to share common ideals
                and aspirations as we build a challenging and enriching
                educational experience for our students.
              </p>
              <p className="bold">Amit Rathode</p>
              <p className="bold">Chairman</p>
              <p className="bold">Vardhaman Mahavir Charitable Trust.</p>
            </div>
          </div>
        </div> */}
        <Messages />
        <div className="school-toppers-container">
          <h2>Meet our School Toppers</h2>
          <div className="school-toppers-carousel-conatiner">
            <SchoolToppers />
          </div>
        </div>
        <div className="school-circulars-parent-containers">
          <div className="school-circulars-containers">
            <h3>Circulars</h3>
            <TimeLineList />
          </div>
          <div className="school-circulars-containers">
            <h3>News And Events</h3>
            <TimeLineList />
          </div>
        </div>
        <div className="school-toppers-container">
          <h2>Image Gallery</h2>
          <div className="school-toppers-carousel-conatiner">
            <ImageGallery />
          </div>
        </div>
        <div className="site-links">
          <div
            className="link-conatiner"
            onClick={() => window.open("https://www.cbse.gov.in/")}
          >
            <span>CBSE Website</span>
          </div>
          {/* <div
            className="link-conatiner"
            onClick={() => window.open("https://www.cbse.gov.in/")}
          >
            <span>Transfer Certificate</span>
          </div>
          <div
            className="link-conatiner"
            onClick={() => window.open("https://www.cbse.gov.in/")}
          >
            <span>Annual Report</span>
          </div> */}
        </div>
      </div>
      {/* <div className="spiral-image-container">
        <img src={Spiral} width="300px"></img>
      </div> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
