import React from "react";

const ReviewCards = () => {
  const reviewData = [
    {
      id: 1,
      name: "Vatsal Agarval",
      year: 2020,
      img: "https://imgv3.fotor.com/images/gallery/anime-male-avatar-with-a-pair-of-glasses-made-in-fotor-ai-anime-avatar-creator_2023-06-25-054224_ybzr.jpg",
      review: "4.4",
    },
    {
      id: 2,
      name: "Vanya Agarval",
      year: 2019,
      img: "https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA",
      review: "4.5",
    },
    {
      id: 3,
      name: "Seema Agarval",
      year: 2018,
      img: "https://blush-design.imgix.net/collections/rChdrB8vX8xQJunpDPp8/v16/Master/Avataaar/cropped/Default.svg?w=500&auto=compress&cs=srgb",
      review: "4.7",
    },
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center mt-5 fw-bold">
        Here is what a few of our customers have to say about us
      </h1>
      <div className="row justify-content-center">
        {reviewData.map((item) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={item.id}>
            <div className="card p-5 m-5">
              <div className="d-flex ">
                <div className="rounded-circle border-2 ">
                  <img
                    style={{ width: "3rem", height: "3rem" }}
                    src={item.img}
                    alt={item.name}
                  />
                </div>
                <div className="d-flex flex-column mx-3">
                  <small className=" fw-bold mt-3">{item.name}</small>
                  <small
                    className="text-muted fw-bold"
                    style={{ fontSize: "11px" }}>
                    Customer since {item.year}
                  </small>
                </div>
              </div>
              <small className="bg-success text-light text-center rounded w-25 my-2">
                <i
                  className="fw-bold text-warning "
                  style={{ fontSize: "11px" }}>
                  {item.review}
                </i>
              </small>
              <small>
                Awesome travel experience with reserve. Excellent staff
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCards;
