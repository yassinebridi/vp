import React from "react";

export interface HomePageProps {}
const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h2 className="text-xl text-gray-700 dark:text-gray-400">
          No projects at the moment
        </h2>
      </div>
    </div>
  );
};

export default HomePage;
