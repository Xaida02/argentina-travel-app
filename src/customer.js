import { FaStar, FaStarHalf } from "react-icons/fa";

const customers = [
  {
    name: "Juán Hernandez",
    img: "/customers/1.jpg",
    review: (
      <>
        "I recently took a tour of Buenos Aires with VisitAR and it was an
        unforgettable experience! The guides were incredibly knowledgeable and
        made the city come to life.
        <br /> I loved learning about the history and culture of Buenos Aires,
        and the tour included stops at some of the most iconic landmarks in the
        city. I would highly recommend VisitAR to anyone looking for a unique
        and immersive tour experience."
      </>
    ),
    stars: [
      <FaStar className="star" />,
      <FaStar className="star" />,
      <FaStar className="star" />,
      <FaStar className="star" />,
      <FaStarHalf className="star" />,
    ],
  },
  {
    name: "Diana Varane",
    img: "/customers/2.jpg",
    review: (
      <>
        "I went on a tour of Formosa with VisitAR and it was truly amazing! I
        never exdivected to see such beautiful landscapes and wildlife in
        Argentina.
        <br /> The guides were very friendly and took great care of us
        throughout the tour. I felt like I was born here in the desert. I would
        definitely recommend VisitAR to anyone looking for an adventure in
        Argentina"
      </>
    ),
    stars: [
      <FaStar className="star" />,
      <FaStar className="star" />,
      <FaStar className="star" />,
      <FaStar className="star" />,
      <FaStarHalf className="star" />,
    ],
  },
  {
    name: "Julio Roca",
    img: "/customers/3.jpg",
    review: (
      <>
        "I recently took a tour of Cordoba with VisitAR and it was an amazing
        experience! The guides were very passionate about the history of the
        city. I loved learning about the architecture and the culture of
        Cordoba, and the tour included stops at some of the most iconic
        landmarks in the city.
        <br /> I would highly recommend VisitAR to anyone looking for a unique
        and immersive tour experience."
      </>
    ),
    stars: [
      <FaStar className="star" />,
      <FaStar className="star" />,
      <FaStar className="star" />,
      <FaStar className="star" />,
    ],
  },
  {
    name: "James Wang",
    img: "/customers/4.jpg",
    review: (
      <>
        {" "}
        "I went on a tour of Misiones with VisitAR and it was a wonderful
        experience. The guides were very friendly and confident moving us
        throughout the area. I loved learning about the history and culture of
        Misiones, and the tour included stops at some of the most beautiful
        places in the province.
        <br /> I would definitely recommend VisitAR to anyone looking for an
        unforgettable tour experience in Argentina."
      </>
    ),
    stars: [
      <FaStar className="star" />,
      <FaStar className="star" />,
      <FaStar className="star" />,
      <FaStar className="star" />,
      <FaStarHalf className="star" />,
    ],
  },
  {
    name: "Jane Doe",
    img: "/customers/5.jpg",
    review: (
      <>
        "I recently took a tour of Ushuaia with VisitAR and it was a fantastic
        experience! The guides were very knowledgeable and passionate about the
        area.
        <br /> I loved learning about the history and culture of Ushuaia and the
        tour included stops at some of the most iconic landmarks in the city. I
        would highly recommend VisitAR to anyone looking for a unique and
        immersive tour experience."
      </>
    ),
    stars: [
      <FaStar className="star" />,
      <FaStar className="star" />,
      <FaStar className="star" />,
      <FaStar className="star" />,
      <FaStar className="star" />,
    ],
  },
];

export default customers;
