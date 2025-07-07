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

  const title = "Services";
  const description =
    "We deliver end-to-end digital solutions across three core pillars";

  return (
    <div className="row">
      <div className="col-lg-4 col-12">
        <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
          <h2 className="title">{title}</h2>
          <p>{description}</p>
          <div className="service-btn">
            <a className="btn-transparent rn-btn-dark" href="/services">
              <span className="text">Discover Our Services</span>
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-8 col-12 mt_md--50">
        <div className="row service-one-wrapper">
          {ServiceList.map((val, i) => (
            <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
              <Link to={`/services/${val?.link}`}>
                <div className="service service__style--2">
                  <div className="icon">{val.icon}</div>
                  <div className="content">
                    <h3 className="title">{val.title}</h3>
                    <p>{val.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceTwo;
