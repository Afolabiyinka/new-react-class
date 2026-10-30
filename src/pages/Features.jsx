import { Clock, DollarSign, Truck } from "lucide-react";
import FeatureCard from "../components/FeatureCard";

const Features = () => {
  return (
    <div className="flex items-center justify-center p-20 gap-10">
      <FeatureCard
        icon={<Truck size={30} />}
        title={`Free shipping`}
        desc={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, `}
      />

      <FeatureCard
        icon={<Clock size={30} />}
        title={`Support 24/7`}
        desc={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, `}
      />
      <FeatureCard
        icon={<DollarSign size={30} />}
        title={`Money Return`}
        desc={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, `}
      />
    </div>
  );
};

export default Features;
