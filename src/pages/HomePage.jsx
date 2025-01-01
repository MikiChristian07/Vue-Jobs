import Hero from '../components/Hero';
import FeaturedJobs from '../components/FeaturedJobs';
import SiteStats from '../components/SiteStats';
import SiteFlow from '../components/SiteFlow';
import PathChoice from '../components/PathChoice';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedJobs />
      <SiteStats />
      <SiteFlow />
      <PathChoice />
    </div>
  );
};

export default HomePage;
