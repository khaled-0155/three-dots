import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import testimonialImg1 from "../assets/images/client/testimonial-1.jpg";
import testimonialImg2 from "../assets/images/client/testimonial-2.jpg";
import testimonialImg3 from "../assets/images/client/testimonial-3.jpg";
import testimonialImg4 from "../assets/images/client/testimonial-4.jpg";
import testimonialImg5 from "../assets/images/client/testimonial-5.jpg";
import testimonialImg6 from "../assets/images/client/testimonial-6.jpg";
import testimonialImg7 from "../assets/images/client/testimonial-7.jpg";
import testimonialImg8 from "../assets/images/client/testimonial-8.jpg";

const testimonialData = [
  {
    text: `Choosing 3 dots means choosing a partner who sees the big picture—and builds to match it.`,
    author: "Aklima",
  },
  // {
  //   text: `Fatima Asrafy standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.`,
  //   author: "Fatima Asrafy",
  // },
  // {
  //   text: `Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.`,
  //   author: "Jannat Tumpa",
  // },
  // {
  //   text: `Standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.`,
  //   author: "Johns Due",
  // },
  // {
  //   text: `John Doe The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.`,
  //   author: "John Doe",
  // },
  // {
  //   text: `Chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.`,
  //   author: "Amar Orthi",
  // },
  // {
  //   text: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.`,
  //   author: "Fatima Ma",
  // },
  // {
  //   text: `Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.`,
  //   author: "JON CUMMINS",
  // },
];

// const testimonialImages = [
//   testimonialImg1,
//   testimonialImg2,
//   testimonialImg3,
//   testimonialImg4,
//   testimonialImg5,
//   testimonialImg6,
//   testimonialImg7,
//   testimonialImg8,
// ];

const Testimonial = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <Tabs>
          {/* Testimonial content */}
          {testimonialData.map((item, index) => (
            <TabPanel key={index}>
              <div className="rn-testimonial-content text-center">
                <div className="inner">
                  <p>{item.text}</p>
                </div>
                {/* <div className="author-info">
                  <h6>
                    <span>{item.author}</span> - COO, AMERIMAR ENTERPRISES, INC.
                  </h6>
                </div> */}
              </div>
            </TabPanel>
          ))}

          {/* Thumbnails */}
          {/* <TabList className="testimonial-thumb-wrapper">
            {testimonialImages.map((img, index) => (
              <Tab key={index}>
                <div className="testimonial-thumbnai">
                  <div className="thumb">
                    <img src={img} alt={`Testimonial ${index + 1}`} />
                  </div>
                </div>
              </Tab>
            ))}
          </TabList> */}
        </Tabs>
      </div>
    </div>
  );
};

export default Testimonial;
