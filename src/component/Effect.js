


import Slider from "./Slider";
const Effect = () => {
  const slides = [
    { url: "http://localhost:3000/clear.jpg", title: "beach" },
    { url: "http://localhost:3000/tram.jpg", title: "boat" },
    { url: "http://localhost:3000/tramsco.jpg", title: "forest" },
    { url: "http://localhost:3000/image-4.jpg", title: "city" },
    { url: "http://localhost:3000/image-5.jpg", title: "italy" },
  ];
  const containerStyles = {
    width: "100%",
    height: "100vh",
    margin: "0 auto",
  };
  return (
    <div>
  
      <div style={containerStyles}>
        <Slider slides={slides} />
      </div>
    </div>
  );
};

export default  Effect;