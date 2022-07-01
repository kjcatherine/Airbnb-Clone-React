// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './components/data.js';

export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        item={item}
        //item={...item}
        // img={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // title={item.title}
        // price={item.price}
        // openSpots={item.openSpots}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

// <Card
// img="/exp-icon.png"
// rating="5.0"
// reviewCount={6}
// country="USA"
// title="Life Lessons with Katie Zaferes"
// price={136}
// />
// <Card
// img="/exp-icon2.png"
// rating="5.0"
// reviewCount={30}
// country="USA"
// title="Life Learn wedding photography"
// price={125}
// />
// <Card
// img="exp-icon3.png"
// rating="4.8"
// reviewCount={2}
// country="USA"
// title="Group mountain biking"
// price={50}
// />
