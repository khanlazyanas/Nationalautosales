import pulsarN125Img from "../assets/pulsar-125.webp";
import pulsarN250Img from "../assets/Pulsar N250.webp";
import pulsarN160Img from "../assets/N160.webp";
import pulsarNS400zImg from "../assets/Pulsar NS400z.webp";
import pulsarNS200Img from "../assets/NS200.webp";
import pulsarNS160Img from "../assets/NS160.webp";
import pulsarNS125Img from "../assets/pulsar-ns125.webp";
import pulsarRS200Img from "../assets/pulsar-rs200.webp";
import pulsar125Img from "../assets/pulsar-125.webp";
import pulsar150Img from "../assets/Pulsar 150.webp";
import pulsar220FImg from "../assets/Pulsar 220F.webp";

import dominar250Img from "../assets/Dominar 250.webp";
import dominar400Img from "../assets/Dominar 400.webp";

import platina100Img from "../assets/Platina 100 Drum.webp";
import platina110Img from "../assets/Platina 100.webp";

import avenger220Img from "../assets/Avenger 220 Cruise.webp";
import avenger160Img from "../assets/Avenger 160 Street.webp";

const slugify = (name) =>
  name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

const bikes = [
  {
    name: "Pulsar",
    variants: [
      { name: "Pulsar N125", img: pulsarN125Img, engine: "124.45 cc", maxPower: "11.03 kW @ 8500 rpm", maxTorque: "11.7 Nm @ 7000 rpm", price: "₹1,05,000" },
      { name: "Pulsar N250", img: pulsarN250Img, engine: "249 cc", maxPower: "24.5 kW @ 9500 rpm", maxTorque: "21.5 Nm @ 8000 rpm", price: "₹1,45,000" },
      { name: "Pulsar N160", img: pulsarN160Img, engine: "160 cc", maxPower: "15 PS @ 8500 rpm", maxTorque: "13.7 Nm @ 7000 rpm", price: "₹1,25,000" },
      { name: "Pulsar NS400z", img: pulsarNS400zImg, engine: "373 cc", maxPower: "40 PS @ 9000 rpm", maxTorque: "35 Nm @ 7000 rpm", price: "₹2,35,000" },
      { name: "Pulsar NS200", img: pulsarNS200Img, engine: "199.5 cc", maxPower: "24.5 PS @ 9500 rpm", maxTorque: "18.5 Nm @ 8000 rpm", price: "₹1,50,000" },
      { name: "Pulsar NS160", img: pulsarNS160Img, engine: "160 cc", maxPower: "15 PS @ 8500 rpm", maxTorque: "13.7 Nm @ 7000 rpm", price: "₹1,20,000" },
      { name: "Pulsar NS125", img: pulsarNS125Img, engine: "124 cc", maxPower: "11 PS @ 8500 rpm", maxTorque: "11 Nm @ 7000 rpm", price: "₹1,05,000" },
      { name: "Pulsar RS200", img: pulsarRS200Img, engine: "199.5 cc", maxPower: "24.5 PS @ 9500 rpm", maxTorque: "18.5 Nm @ 8000 rpm", price: "₹1,65,000" },
      { name: "Pulsar 125", img: pulsar125Img, engine: "124 cc", maxPower: "11 PS @ 8500 rpm", maxTorque: "11 Nm @ 7000 rpm", price: "₹95,000" },
      { name: "Pulsar 150", img: pulsar150Img, engine: "149 cc", maxPower: "13 PS @ 8500 rpm", maxTorque: "12 Nm @ 7000 rpm", price: "₹1,10,000" },
      { name: "Pulsar 220F", img: pulsar220FImg, engine: "220 cc", maxPower: "20 PS @ 8500 rpm", maxTorque: "18.5 Nm @ 7000 rpm", price: "₹1,35,000" },
    ],
  },
  {
    name: "Dominar",
    variants: [
      { name: "Dominar 250", img: dominar250Img, engine: "248.8 cc", maxPower: "27.5 PS @ 9000 rpm", maxTorque: "23.5 Nm @ 7000 rpm", price: "₹2,00,000" },
      { name: "Dominar 400", img: dominar400Img, engine: "373 cc", maxPower: "40 PS @ 9000 rpm", maxTorque: "35 Nm @ 7000 rpm", price: "₹2,60,000" },
    ],
  },
  {
    name: "Platina",
    variants: [
      { name: "Platina 100", img: platina100Img, engine: "102 cc", maxPower: "7 PS @ 7500 rpm", maxTorque: "8 Nm @ 5500 rpm", price: "₹65,000" },
      { name: "Platina 110 Drum", img: platina110Img, engine: "110 cc", maxPower: "8 PS @ 7500 rpm", maxTorque: "9 Nm @ 5500 rpm", price: "₹70,000" },
    ],
  },
  {
    name: "Avenger",
    variants: [
      { name: "Avenger 220 Cruise", img: avenger220Img, engine: "220 cc", maxPower: "19 PS @ 8500 rpm", maxTorque: "17.5 Nm @ 7000 rpm", price: "₹1,55,000" },
      { name: "Avenger 160 Street", img: avenger160Img, engine: "160 cc", maxPower: "15 PS @ 8500 rpm", maxTorque: "13.7 Nm @ 7000 rpm", price: "₹1,11,569" },
    ],
  },
];

// 🔥 Add slug automatically to each variant
bikes.forEach((category) => {
  category.variants.forEach((v) => {
    v.slug = slugify(v.name);
  });
});

export default bikes;
