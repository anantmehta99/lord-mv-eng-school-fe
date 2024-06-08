import Messages from "../../components/Messages/Messages";
import "./AboutUs.scss";
import OurInspiration from "../../assets/Home/ourInspiration.jpg";
const AboutUs = () => {
  const facultyDetails = [
    {
      department: "Principal",
      faculties: [
        {
          name: "K. K. Abhilash [M.A(Eng); B.Ed; PGDELT]",
        },
      ],
    },
    {
      department: "Department of English",
      faculties: [
        {
          name: "Afshan Shaikh  [M.A Bed.]",
        },
        {
          name: "Sujata Sonwane [MCA]",
        },
      ],
    },
    {
      department: "Department of Hindi",
      faculties: [
        {
          name: "Archana Kasegaonkar [M.AB.ed]",
        },
        {
          name: "Arti Kharat [M.A , B.ed]",
        },
      ],
    },
    {
      department: "Department of Marathi",
      faculties: [
        {
          name: "Asaram Dhonde [M.A , D.ed]",
        },
      ],
    },
    {
      department: "Department of Mathematics",
      faculties: [
        {
          name: "Promod Yadav [B.tech , B.ed]",
        },
        {
          name: "Kalyani Bhale [Msc ,  B.ed]",
        },
      ],
    },
    {
      department: "Department of Science",
      faculties: [
        {
          name: "Noorvi Pandey [M.sc]",
        },
        {
          name: "Naveen Kumar [B.sc , B.ed]",
        },
        {
          name: "Sandhya Kolse [B.sc , Bed]",
        },
      ],
    },
    {
      department: "Department of Social Science",
      faculties: [
        {
          name: "Neeraj Tripathi [M.A, B.ed]",
        },
        {
          name: "Shweta Talekar [B.sc , D.ed]",
        },
      ],
    },
    {
      department: "Department of Physical Education",
      faculties: [
        {
          name: "Ahamedkha pathan [B.A, BPED]",
        },
        {
          name: "Pratibha Sonkamble [B.A, BPED]",
        },
      ],
    },
    {
      department: "Department of IT",
      faculties: [
        {
          name: "Sushant Lagad [MCA]",
        },
      ],
    },
    {
      department: "Department of Art",
      faculties: [
        {
          name: "Gade Pandurang [ATD , A.M]",
        },
      ],
    },
    {
      department: "Department of Music",
      faculties: [
        {
          name: "Mahesh Raut [B.A , B.ed]",
        },
      ],
    },
    {
      department: "Librarian",
      faculties: [
        {
          name: "Yogita Waghmare [M.A , B.Lib]",
        },
      ],
    },
    {
      department: "Administrative Staff",
      faculties: [
        {
          name: "Shushant Waghule",
        },
        {
          name: "Ravi Wavale",
        },
        {
          name: "Geeta Dani",
        },
        {
          name: "Desai Mahendra",
        },
      ],
    },
    {
      department: "Supporting Staff",
      faculties: [
        {
          name: "Alka Kardule",
        },
        {
          name: "Sangita Dhadge",
        },
        {
          name: "Ashwini Anarse",
        },
        {
          name: "Zumbarbai Mahajan",
        },
        {
          name: "Vimal More",
        },
        {
          name: "Pandurang More",
        },
      ],
    },
    {
      department: "Watchman",
      faculties: [
        {
          name: "Dhanbahadur Thapa",
        },
      ],
    },
  ];
  return (
    <div className="about-us-container">
      <div className="school-profile-container">
        <h2 className="school-profile-header font-doodle-shadow">
          <span className="font-doodle-shadow color-733de9 yellow-underline">
            School
          </span>
          <span className="font-doodle-shadow color-d0b51b"> Profile</span>
        </h2>
        <p className="school-profile-content">
          Mahavir English School started functioning in the year 2008. Initially
          the school was running with the Maharashtra State Syllabus and from
          2016 the school started pursuing the CBSE syllabus. The school is
          affiliated with CBSE Delhi and the affiliation number is 1130705.
          Presently the school runs classes from Nursery to X and expects to
          become Senior Secondary from the coming academic year.
        </p>
      </div>
      <div className="vision-container">
        <h2 className="vision-header font-doodle-shadow">
          <span className="font-satisfy color-d0b51b"> Vision</span>
        </h2>
        <p className="school-profile-content">
          Our vision is to create a unique impression in the surroundings in
          such a way that there students may experience the joy of living! Live
          every moment! Learn new things! Take pleasure in experimenting! They
          may fail at times. Let it not be disillusioned. They may be meant for
          bigger and better things!
        </p>
      </div>
      <div className="mission-container">
        <h2 className="mission-header font-doodle-shadow">
          <span className="font-satisfy color-733de9"> Mission</span>
        </h2>
        <p className="school-profile-content">
          To fill the life of students with a pleasure of discovery. There may
          be a scientist, an astronomer, an artist, a musician, a writer etc
          within them! How would they know, if they never try?
        </p>
      </div>
      <Messages />
      <div className="our-inspiration-parent-container">
        <div className="our-inspiration-text-container">
          <h2>Our Inspiration</h2>
        </div>
        <div className="our-inspiration-image-container">
          <img src={OurInspiration} width={400}></img>
        </div>
        <div className="our-inspiration-name-container color-d0b51b">
          <p>
            <i>Shree Adarsh Rushiji Maharaj</i>
          </p>
        </div>
      </div>
      <div className="faculty-details-parent-container">
        <div className="faculty-details-header-container">
          <h2>Faculty Details</h2>
        </div>
        <div className="faculty-details-table-container">
          {facultyDetails.map((item, index) => (
            <div className="faculty-details-item-container" key={index}>
              <div className="faculty-details-title color-733de9">
                <p>{item.department}</p>
              </div>
              <ul className="faculty-details-name-container">
                {item.faculties.map((faculty, index) => (
                  <li className="faculty-details-name color-d0b51b" key={index}>
                    {faculty.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
