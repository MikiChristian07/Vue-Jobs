import CountUp from 'react-countup';

const SiteStats = () => {
  const stats = [
    { label: 'Jobs Posted', value: 1200 },
    { label: 'Companies', value: 300 },
    { label: 'Active Users', value: 5000 },
    { label: 'Applications', value: 15000 },
  ];

  return (
    <div className="bg-white w-full p-4 my-10">
      <h2 className="text-3xl font-bold text-center mt-10 mb-4 font-inter">Company Stats</h2>
      <p className="text-center text-gray-700 mb-8">
        Here are some key statistics showcasing the activities and reach of our company.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center text-center">
        {stats.map((stat, index) => (
          <div key={stat.label} className="flex flex-col md:flex-row items-center p-6">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-light mb-2 font-inter">
                <CountUp end={stat.value} duration={4} />
              </h3>
              <p className="text-gray-700">{stat.label}</p>
            </div>
            {index < stats.length - 1 && (
              <div className="hidden md:block h-16 border-l border-gray-300 mx-8"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SiteStats;