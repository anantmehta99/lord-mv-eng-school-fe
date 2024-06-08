import moment from "moment";
import "./TimeLineList.scss";

const TimeLineList = () => {
  const TimeLineListArray = [
    {
      date: "16-01-2024",
      name: "School Event",
      href: "../../assets/Home/teacherprofessor.jpeg",
    },
    {
      date: "16-01-2024",
      name: "School Event",
      href: "../../assets/Home/teacherprofessor.jpeg",
    },
    {
      date: "16-01-2024",
      name: "School Event",
      href: "../../assets/Home/teacherprofessor.jpeg",
    },
    {
      date: "16-01-2024",
      name: "School Event",
      href: "../../assets/Home/teacherprofessor.jpeg",
    },
    {
      date: "16-01-2024",
      name: "School Event",
      href: "../../assets/Home/teacherprofessor.jpeg",
    },
    {
      date: "16-01-2024",
      name: "School Event",
      href: "../../assets/Home/teacherprofessor.jpeg",
    },
  ];

  return (
    <div className="time-line-list-parent-container">
      <ul>
        {TimeLineListArray.map((item, index) => {
          return (
            <li key={index}>
              <div className="time-line-content">
                <a href={item.href} download={"abc.jpeg"}>
                  {item.name}
                </a>
              </div>
              <div className="date-for-line-list">
                <span className="date">{item.date}</span>
                <i className="circle_icon"></i>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TimeLineList;
