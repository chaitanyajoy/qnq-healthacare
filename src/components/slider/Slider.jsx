import React from "react";

const SliderHome = () => {
  return (
    <>
      {/* <base href="#" /> */}
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.js"
        type="text/javascript"
      ></script>
      <div id="slider">
        <figure>
          <img src="/assets/img/slider/1.png" />
          <img src="/assets/img/slider/2.png" />
          <img src="/assets/img/slider/3.png" />
          <img src="/assets/img/slider/4.png" />
          <img src="/assets/img/slider/5.png" />
        </figure>
      </div>
    </>
  );
};

export default SliderHome;
