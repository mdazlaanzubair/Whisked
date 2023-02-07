import About from "./About";
import Chefs from "./Chefs";
import Features from "./Features";
import Quote from "./Quote";

const MainContent = () => {
  const quotes = [
    {
      title: "Austrian-American Master Chef",
      chef: "Wolfgang Puck",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9bXjVlRXBkg3rDcYSHmu5GLnHhgtHnbooRT7X1-rz0TqVPT3Jz7y_&usqp=CAE&s",
      text: "Cooking is like painting or writing a song. Just as there are only so many notes or colors, there are only so many flavors—it’s how you combine them that sets you apart.",
    },
    {
      title: "American Cooking Expert",
      chef: "Julia Child",
      img: "https://cdn.britannica.com/10/198710-050-D3365128/Julia-Child-1978.jpg?w=400&h=300&c=crop",
      text: "The only real stumbling block is fear of failure. In cooking you’ve to have a what-the-hell attitude.",
    },
  ];
  return (
    <>
      <About />

      <Quote quote={quotes[0]} />

      <Features />

      <Chefs />

      <Quote quote={quotes[1]} />
    </>
  );
};

export default MainContent;
