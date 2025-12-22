import { FiCast, FiLayers, FiUsers, FiMonitor } from "react-icons/fi";
import { Link } from "react-router-dom";

const defaultConetnt = [
  {
    icon: <FiCast />,
    title: "Business Strategy",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <FiLayers />,
    title: "Website Development",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <FiUsers />,
    title: "Marketing & Reporting",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <FiMonitor />,
    title: "Mobile App Development",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
];

const ServiceTwo = ({ content }) => {
  const ServiceList = content || defaultConetnt;

  return (
    <div className="service-area ptb--120 bg_color--5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb--30">
              <h2>How We Work</h2>
              <h4>
                <span>Clarity Agility Execution</span>
              </h4>
              <p>
                Our process is built around one goal: getting real results, not
                just delivering deliverables. We work closely with each client,
                combining strategy, design, and tech to solve the right problems
                in the right way.
              </p>
            </div>
          </div>
        </div>
        <div className="row service-one-wrapper">
          {ServiceList.map((val, i) => (
            <div className="col-lg-6 col-md-6 col-sm-12 col-12" key={i}>
              <a href="/service-details">
                <div className="service service__style--2">
                  <h3 className="number">{val.number}</h3>

                  <div className="icon">{val.icon}</div>

                  <div className="content">
                    <h3 className="title">{val.title}</h3>
                    <p>{val.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceTwo;
