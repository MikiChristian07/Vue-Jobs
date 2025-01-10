import Hero from '../components/Hero';
import FeaturedJobs from '../components/FeaturedJobs';
import SiteStats from '../components/SiteStats';
import SiteFlow from '../components/SiteFlow';
import PathChoice from '../components/PathChoice';
import HomeContact from '../components/HomeContact';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedJobs isHome={true} />
      <SiteStats />
      <SiteFlow />
      <PathChoice />
      <HomeContact />
    </div>
  );
};

export default HomePage;
