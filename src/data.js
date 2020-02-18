import FarmhouseThaiCuisineLogo from "./assets/farmhouse-thai-cuisine.jpg";
import LerRosLogo from "./assets/ler-ros.jpg";

var title = "My App";

var subLine1 = "Hello, Assistant to the Regional Manager Dwight! ";
var subLine2 =
  " wants to know where you'd like to take the Paper Company investors to dinner tonight.";
var userName = "Michael Scott";

var restaurants = [
  {
    title: "Farmhouse Thai Cuisine",
    image: FarmhouseThaiCuisineLogo,
    rates: 4,
    reviews: 1528,
    bestRecommendation:
      "They do have some vegan options, like the roti and curry, plus they have a ton of salad stuff and noodles can be ordered without meat! They have something for everyone here"
  },
  {
    title: "Ler Ros",
    image: LerRosLogo,
    rates: 4,
    reviews: 2082,
    bestRecommendation:
      "I would really recommend the Yum Koh Moo Yang - Spicy lime dressing and roasted quick marinated pork shoulder, basil leaves, chili & rice powder."
  },
  {
    title: "Farmhouse Thai Cuisine",
    image: FarmhouseThaiCuisineLogo,
    rates: 4,
    reviews: 1528,
    bestRecommendation:
      "They do have some vegan options, like the roti and curry, plus they have a ton of salad stuff and noodles can be ordered without meat! They have something for everyone here"
  },
  {
    title: "Ler Ros",
    image: LerRosLogo,
    rates: 4,
    reviews: 2082,
    bestRecommendation:
      "I would really recommend the Yum Koh Moo Yang - Spicy lime dressing and roasted quick marinated pork shoulder, basil leaves, chili & rice powder."
  }
];

var filters = [
  {
    name: "Farmhouse",
    action: () => alert("Clicked Farmhouse")
  },
  {
    name: "Kin Khao",
    action: () => alert("Clicked Kin Khao")
  },
  {
    name: "Ler Ros",
    action: () => alert("Clicked Ler Ros")
  }
];

export { title, subLine1, subLine2, userName, restaurants, filters };
