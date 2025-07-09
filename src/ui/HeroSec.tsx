import HeroSecLeftPart from './HeroSecLeftPart';
import HeroSecRightPart from './HeroSecRightPart';

const HeroSec = () => {
  return (
    <div className="flex h-full w-full flex-col md:flex-row">
      <HeroSecLeftPart />
      <HeroSecRightPart />
    </div>
  );
};

export default HeroSec;
