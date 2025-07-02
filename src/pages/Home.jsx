import React from "react";

import HomeDiv from "../components/HomeDiv";
import ContactLogo from "../components/Contectlogo";
function Home() {
  return (
     <div className="w-full md:w-[80%] flex flex-col float-none md:float-end overflow-y-auto">

    <HomeDiv />
    <ContactLogo />
    
    </div>
  


  );
}
export default Home;