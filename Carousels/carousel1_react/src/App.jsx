import Carousel from "./components/Carousel";

function App() {
  const slides = [
    {
      title: "Slide 1",
      className: "red"
    },
    {
      title: "Slide 2",
      className: "blue"
    },
    {
      title: "Slide 3",
      className: "green"
    },
    {
      title: "Slide 4",
      className: "purple"
    },
    {
      title: "Slide 5",
      className: "orange"
    },
    {
      title: "Slide 6",
      className: "teal"
    }
  ];

  return (
    <Carousel slides={slides} />
  );
}

export default App;