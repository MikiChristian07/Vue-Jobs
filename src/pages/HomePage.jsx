import Hero from '../components/Hero';
import FeaturedJobs from '../components/FeaturedJobs';
import SiteStats from '../components/SiteStats';
import SiteFlow from '../components/SiteFlow';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedJobs />
      <SiteStats />
      <SiteFlow />
    </div>
  );
};

export default HomePage;
