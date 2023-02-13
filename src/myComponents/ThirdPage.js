import React from "react";
import Footer from "./Footer";
import ListCounter from "./ListCounter";
import ExtraEle from "./ExtraEle";
function ThirdPage() {
  return (
    <section id="thirdSection">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 m-5   ">
        <ListCounter />
        <ExtraEle />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}

export default ThirdPage;
