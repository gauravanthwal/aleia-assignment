import type { NextPage } from "next";
import Houses from "../components/house/Houses";

const Home: NextPage = () => {
  return (
    <main className="max-w-[1024px] mx-auto mt-10 px-4">
      <div className="heading flex justify-between mb-10">
        <h1 className="text-4xl max-w-[50%]">
          We are an award winning interior design Agency
        </h1>
        <div>
          <button className="border-2 border-black p-2 hover:px-3 transition-all">
            View all properties &rarr;
          </button>
        </div>
      </div>

      <Houses/>
    </main>
  );
};

export default Home;
