import { ArrowRight, House } from "lucide-react";
import CustomBtn from "../components/CustomBtn";

const Home = () => {
  return (
    <div
      className="
    h-[90vh]
    bg-[url(assets/model_man.jpg)] bg-center bg-cover bg-no-repeat flex items-center text-white"
    >
      <div className="pl-10 flex flex-col items-center gap-2 justify-center text-center">
        <span className="w-full flex items-center  gap-3 justify-center">
          <div className="h-0.5 w-16 bg-white rounded-full" />
          <h3 className="text-5xl">Stylish</h3>

          <div className="h-0.5 w-16 bg-white" />
        </span>

        <h1 className="text-7xl">Male Clothes</h1>
        <p className="text-2xl">30% off Summer Vacations</p>
        <CustomBtn text={`SHOP NOW`} rightIcon={<ArrowRight />} />
      </div>
    </div>
  );
};

export default Home;
