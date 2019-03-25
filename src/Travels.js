import React from "react";
import TravelItem from './TravelItem';

// src/Travels.js
const travels = [
  {
    trip: "My trip to China",
    destination: "China",
    image:"http://www.theflagman.co.uk/wp-content/uploads/2017/03/flag-of-china.jpg"
  },
  {
    trip: "My trip to Mongolia",
    destination: "Mongolia",
    image:"https://vignette.wikia.nocookie.net/micronations/images/4/4a/Mongolia_flag.gif/revision/latest?cb=20140819122833"
  },
  {
    trip: "My trip to Peru",
    destination: "Peru",
    image:"http://flags.fmcdn.net/data/flags/w580/pe.png"
  },
  {
    trip:"My trip to Albania",
    destination: "Albany",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/200px-Flag_of_Albania.svg.png"
  },
  {
    trip:"My trip to Germany",
    destination: "Germany",
    image: "https://www.flagsonline.it/uploads/2016-6-6/420-272/germany.jpg"
  }
];

const Travels = () => (
  <div>
    {travels.map(travel => (
      <TravelItem image ={travel.image} destination = {travel.destination} />
    ))}
  </div>
);

export default Travels;