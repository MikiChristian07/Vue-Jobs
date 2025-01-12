import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Pricing = () => {
  const plans = [
    {
      name: "Standard plan",
      price: 49,
      features: [
        "2 team members",
        "20GB Cloud storage",
        "Integration help",
        "Sketch Files",
      ],
      unavailable: ["API Access", "Complete documentation"],
    },
    {
      name: "Premium plan",
      price: 99,
      features: [
        "10 team members",
        "100GB Cloud storage",
        "Integration help",
        "Sketch Files",
        "API Access",
      ],
      unavailable: ["Complete documentation"],
    },
    {
      name: "Enterprise plan",
      price: 199,
      features: [
        "Unlimited team members",
        "1TB Cloud storage",
        "Integration help",
        "Sketch Files",
        "API Access",
        "Complete documentation",
      ],
      unavailable: [],
    },
    {
      name: "Ultimate plan",
      price: 299,
      features: [
        "Unlimited team members",
        "5TB Cloud storage",
        "Priority Integration help",
        "Sketch Files",
        "API Access",
        "Complete documentation",
        "24/7 Support",
      ],
      unavailable: [],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Slower autoplay speed
    nextArrow: <div style={{ color: "black", fontSize: "24px", right: "10px", zIndex: 1 }}>Next</div>,
    prevArrow: <div style={{ color: "black", fontSize: "24px", left: "10px", zIndex: 1 }}>Prev</div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-4">Our Pricing Plans</h2>
      <p className="text-center text-gray-600 mb-12">
        Choose the plan that best fits your needs. Whether ${`you're`} a small team or a large enterprise, we have a plan for you.
      </p>
      <Slider {...settings}>
        {plans.map((plan, index) => (
          <div key={index} className="p-4">
            <div className="w-full max-w-sm p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gray-700">
              <h5 className="mb-4 text-xl font-medium text-green-400">
                {plan.name}
              </h5>
              <div className="flex items-baseline text-green-400">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-extrabold tracking-tight">
                  {plan.price}
                </span>
                <span className="ms-1 text-xl font-normal text-green-500">
                  /month
                </span>
              </div>
              <ul role="list" className="space-y-5 my-7">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-green-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-green-400 ms-3">
                      {feature}
                    </span>
                  </li>
                ))}
                {plan.unavailable.map((feature, idx) => (
                  <li key={idx} className="flex line-through decoration-gray-500">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Pricing;