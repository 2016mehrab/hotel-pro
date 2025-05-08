import { supabaseUrl } from "../services/supabase.js";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/cabin-images/`;


const cabins = [
  {
    name: "001",
    capacity: 10,
    price: 1021,
    discount: 4,
    image: "",
    description: `Experience the epitome of luxury and grandeur with your large group in our grand cabin 001. This lavish retreat caters to all needs and desires. Featuring opulent design, high-end finishes, and the finest quality wood. Multiple living areas with fireplaces, a gourmet kitchen, and plush bedrooms with en-suite bathrooms await you. Relax on the private deck with a luxurious hot tub and ample seating.`
  },
  {
    name: "002",
    capacity: 9,
    price: 1127,
    discount: 44,
    image: "",
    description: `Experience the epitome of luxury and grandeur with your large group in our grand cabin 002. This lavish retreat caters to all needs and desires. Featuring opulent design, high-end finishes, and the finest quality wood. Multiple living areas with fireplaces, a gourmet kitchen, and plush bedrooms with en-suite bathrooms await you. Relax on the private deck with a luxurious hot tub and ample seating.`
  },
  {
    name: "003",
    capacity: 10,
    price: 982,
    discount: 91,
    image: "",
    description: `Experience the epitome of luxury and grandeur with your large group in our grand cabin 003. This lavish retreat caters to all needs and desires. Featuring opulent design, high-end finishes, and the finest quality wood. Multiple living areas with fireplaces, a gourmet kitchen, and plush bedrooms with en-suite bathrooms await you. Relax on the private deck with a luxurious hot tub and ample seating.`
  },
  {
    name: "004",
    capacity: 5,
    price: 1468,
    discount: 50,
    image: "",
    description: `Experience the epitome of luxury and grandeur with your large group in our grand cabin 004. This lavish retreat caters to all needs and desires. Featuring opulent design, high-end finishes, and the finest quality wood. Multiple living areas with fireplaces, a gourmet kitchen, and plush bedrooms with en-suite bathrooms await you. Relax on the private deck with a luxurious hot tub and ample seating.`
  },
  {
    name: "005",
    capacity: 3,
    price: 610,
    discount: 0,
    image: "",
    description: `Experience the epitome of luxury and grandeur with your large group in our grand cabin 005. This lavish retreat caters to all needs and desires. Featuring opulent design, high-end finishes, and the finest quality wood. Multiple living areas with fireplaces, a gourmet kitchen, and plush bedrooms with en-suite bathrooms await you. Relax on the private deck with a luxurious hot tub and ample seating.`
  },
  {
    name: "006",
    capacity: 4,
    price: 973,
    discount: 8,
    image: "",
    description: `Experience luxury family living in our medium-sized wooden cabin 006. Perfect for families of up to 4 people, this cabin offers a comfortable and inviting space with all modern amenities. Inside, enjoy warm interiors crafted from high-quality wood, a living area, a fireplace, and a fully-equipped kitchen. The bedrooms feature plush beds and spa-like bathrooms. The private deck with a hot tub and outdoor seating area is perfect for taking in the natural surroundings.`
  },
  {
    name: "007",
    capacity: 3,
    price: 743,
    discount: 27,
    image: "",
    description: `Experience the epitome of luxury and grandeur with your large group in our grand cabin 007. This lavish retreat caters to all needs and desires. Featuring opulent design, high-end finishes, and the finest quality wood. Multiple living areas with fireplaces, a gourmet kitchen, and plush bedrooms with en-suite bathrooms await you. Relax on the private deck with a luxurious hot tub and ample seating.`
  },
  {
    name: "008",
    capacity: 10,
    price: 889,
    discount: 63,
    image: "",
    description: `Experience the epitome of luxury and grandeur with your large group in our grand cabin 008. This lavish retreat caters to all needs and desires. Featuring opulent design, high-end finishes, and the finest quality wood. Multiple living areas with fireplaces, a gourmet kitchen, and plush bedrooms with en-suite bathrooms await you. Relax on the private deck with a luxurious hot tub and ample seating.`
  },
  {
    name: "009",
    capacity: 10,
    price: 422,
    discount: 74,
    image: "",
    description: `Experience the epitome of luxury and grandeur with your large group in our grand cabin 009. This lavish retreat caters to all needs and desires. Featuring opulent design, high-end finishes, and the finest quality wood. Multiple living areas with fireplaces, a gourmet kitchen, and plush bedrooms with en-suite bathrooms await you. Relax on the private deck with a luxurious hot tub and ample seating.`
  },
  {
    name: "010",
    capacity: 4,
    price: 1268,
    discount: 43,
    image: "",
    description: `Experience luxury family living in our medium-sized wooden cabin 010. Perfect for families of up to 4 people, this cabin offers a comfortable and inviting space with all modern amenities. Inside, enjoy warm interiors crafted from high-quality wood, a living area, a fireplace, and a fully-equipped kitchen. The bedrooms feature plush beds and spa-like bathrooms. The private deck with a hot tub and outdoor seating area is perfect for taking in the natural surroundings.`
  },
  {
    name: "011",
    capacity: 8,
    price: 1089,
    discount: 43,
    image: "",
    description: `Accommodate your large group or multiple families in the grand wooden cabin 011. Designed for up to 8 people, this cabin offers a secluded retreat in the heart of forests and mountains. Featuring warm interiors, multiple living areas with fireplaces, and a fully-equipped kitchen. Comfortable bedrooms with en-suite bathrooms make it perfect. The private deck has a hot tub and outdoor seating area to enjoy nature.`
  },
  {
    name: "012",
    capacity: 8,
    price: 803,
    discount: 2,
    image: "",
    description: `Accommodate your large group or multiple families in the grand wooden cabin 012. Designed for up to 8 people, this cabin offers a secluded retreat in the heart of forests and mountains. Featuring warm interiors, multiple living areas with fireplaces, and a fully-equipped kitchen. Comfortable bedrooms with en-suite bathrooms make it perfect. The private deck has a hot tub and outdoor seating area to enjoy nature.`
  },
  {
    name: "013",
    capacity: 6,
    price: 493,
    discount: 16,
    image: "",
    description: `Enjoy a comfortable getaway with your group or family in our spacious cabin 013. Designed to accommodate up to 6 people, this cabin offers a retreat in the heart of nature. Inside, enjoy warm wood-crafted interiors, a living area with a fireplace, and a fully-equipped kitchen. Comfortable bedrooms with en-suite bathrooms make it a perfect choice. Step outside to your private deck to relax in the hot tub.`
  },
  {
    name: "014",
    capacity: 9,
    price: 228,
    discount: 73,
    image: "",
    description: `Experience the epitome of luxury and grandeur with your large group in our grand cabin 014. This lavish retreat caters to all needs and desires. Featuring opulent design, high-end finishes, and the finest quality wood. Multiple living areas with fireplaces, a gourmet kitchen, and plush bedrooms with en-suite bathrooms await you. Relax on the private deck with a luxurious hot tub and ample seating.`
  },
  {
    name: "015",
    capacity: 9,
    price: 362,
    discount: 51,
    image: "",
    description: `Experience the epitome of luxury and grandeur with your large group in our grand cabin 015. This lavish retreat caters to all needs and desires. Featuring opulent design, high-end finishes, and the finest quality wood. Multiple living areas with fireplaces, a gourmet kitchen, and plush bedrooms with en-suite bathrooms await you. Relax on the private deck with a luxurious hot tub and ample seating.`
  },
  {
    name: "016",
    capacity: 6,
    price: 408,
    discount: 45,
    image: "",
    description: `Enjoy a comfortable getaway with your group or family in our spacious cabin 016. Designed to accommodate up to 6 people, this cabin offers a retreat in the heart of nature. Inside, enjoy warm wood-crafted interiors, a living area with a fireplace, and a fully-equipped kitchen. Comfortable bedrooms with en-suite bathrooms make it a perfect choice. Step outside to your private deck to relax in the hot tub.`
  },
  {
    name: "017",
    capacity: 7,
    price: 1440,
    discount: 14,
    image: "",
    description: `Experience the epitome of luxury and grandeur with your large group in our grand cabin 017. This lavish retreat caters to all needs and desires. Featuring opulent design, high-end finishes, and the finest quality wood. Multiple living areas with fireplaces, a gourmet kitchen, and plush bedrooms with en-suite bathrooms await you. Relax on the private deck with a luxurious hot tub and ample seating.`
  },
  {
    name: "018",
    capacity: 5,
    price: 999,
    discount: 31,
    image: "",
    description: `Experience the epitome of luxury and grandeur with your large group in our grand cabin 018. This lavish retreat caters to all needs and desires. Featuring opulent design, high-end finishes, and the finest quality wood. Multiple living areas with fireplaces, a gourmet kitchen, and plush bedrooms with en-suite bathrooms await you. Relax on the private deck with a luxurious hot tub and ample seating.`
  },
  {
    name: "019",
    capacity: 8,
    price: 1308,
    discount: 6,
    image: "",
    description: `Accommodate your large group or multiple families in the grand wooden cabin 019. Designed for up to 8 people, this cabin offers a secluded retreat in the heart of forests and mountains. Featuring warm interiors, multiple living areas with fireplaces, and a fully-equipped kitchen. Comfortable bedrooms with en-suite bathrooms make it perfect. The private deck has a hot tub and outdoor seating area to enjoy nature.`
  },
  {
    name: "020",
    capacity: 4,
    price: 1299,
    discount: 7,
    image: "",
    description: `Experience luxury family living in our medium-sized wooden cabin 020. Perfect for families of up to 4 people, this cabin offers a comfortable and inviting space with all modern amenities. Inside, enjoy warm interiors crafted from high-quality wood, a living area, a fireplace, and a fully-equipped kitchen. The bedrooms feature plush beds and spa-like bathrooms. The private deck with a hot tub and outdoor seating area is perfect for taking in the natural surroundings.`
  },
  {
    name: "021",
    capacity: 7,
    price: 1383,
    discount: 22,
    image: "",
    description: `Experience the epitome of luxury and grandeur with your large group in our grand cabin 021. This lavish retreat caters to all needs and desires. Featuring opulent design, high-end finishes, and the finest quality wood. Multiple living areas with fireplaces, a gourmet kitchen, and plush bedrooms with en-suite bathrooms await you. Relax on the private deck with a luxurious hot tub and ample seating.`
  },
  {
    name: "022",
    capacity: 5,
    price: 1324,
    discount: 60,
    image: "",
    description: `Experience the epitome of luxury and grandeur with your large group in our grand cabin 022. This lavish retreat caters to all needs and desires. Featuring opulent design, high-end finishes, and the finest quality wood. Multiple living areas with fireplaces, a gourmet kitchen, and plush bedrooms with en-suite bathrooms await you. Relax on the private deck with a luxurious hot tub and ample seating.`
  },
  {
    name: "023",
    capacity: 9,
    price: 1342,
    discount: 51,
    image: "",
    description: `Experience the epitome of luxury and grandeur with your large group in our grand cabin 023. This lavish retreat caters to all needs and desires. Featuring opulent design, high-end finishes, and the finest quality wood. Multiple living areas with fireplaces, a gourmet kitchen, and plush bedrooms with en-suite bathrooms await you. Relax on the private deck with a luxurious hot tub and ample seating.`
  },
  {
    name: "024",
    capacity: 7,
    price: 495,
    discount: 86,
    image: "",
    description: `Experience the epitome of luxury and grandeur with your large group in our grand cabin 024. This lavish retreat caters to all needs and desires. Featuring opulent design, high-end finishes, and the finest quality wood. Multiple living areas with fireplaces, a gourmet kitchen, and plush bedrooms with en-suite bathrooms await you. Relax on the private deck with a luxurious hot tub and ample seating.`
  },
  {
    name: "025",
    capacity: 5,
    price: 918,
    discount: 61,
    image: "",
    description: `Experience the epitome of luxury and grandeur with your large group in our grand cabin 025. This lavish retreat caters to all needs and desires. Featuring opulent design, high-end finishes, and the finest quality wood. Multiple living areas with fireplaces, a gourmet kitchen, and plush bedrooms with en-suite bathrooms await you. Relax on the private deck with a luxurious hot tub and ample seating.`
  },
  {
    name: "026",
    capacity: 6,
    price: 1476,
    discount: 43,
    image: "",
    description: `Enjoy a comfortable getaway with your group or family in our spacious cabin 026. Designed to accommodate up to 6 people, this cabin offers a retreat in the heart of nature. Inside, enjoy warm wood-crafted interiors, a living area with a fireplace, and a fully-equipped kitchen. Comfortable bedrooms with en-suite bathrooms make it a perfect choice. Step outside to your private deck to relax in the hot tub.`
  },
  {
    name: "027",
    capacity: 7,
    price: 1133,
    discount: 64,
    image: "",
    description: `Experience the epitome of luxury and grandeur with your large group in our grand cabin 027. This lavish retreat caters to all needs and desires. Featuring opulent design, high-end finishes, and the finest quality wood. Multiple living areas with fireplaces, a gourmet kitchen, and plush bedrooms with en-suite bathrooms await you. Relax on the private deck with a luxurious hot tub and ample seating.`
  },
  {
    name: "028",
    capacity: 3,
    price: 814,
    discount: 75,
    image: "",
    description: `Experience the epitome of luxury and grandeur with your large group in our grand cabin 028. This lavish retreat caters to all needs and desires. Featuring opulent design, high-end finishes, and the finest quality wood. Multiple living areas with fireplaces, a gourmet kitchen, and plush bedrooms with en-suite bathrooms await you. Relax on the private deck with a luxurious hot tub and ample seating.`
  },
  {
    name: "029",
    capacity: 3,
    price: 240,
    discount: 70,
    image: "",
    description: `Experience the epitome of luxury and grandeur with your large group in our grand cabin 029. This lavish retreat caters to all needs and desires. Featuring opulent design, high-end finishes, and the finest quality wood. Multiple living areas with fireplaces, a gourmet kitchen, and plush bedrooms with en-suite bathrooms await you. Relax on the private deck with a luxurious hot tub and ample seating.`
  },
  {
    name: "030",
    capacity: 7,
    price: 981,
    discount: 47,
    image: "",
    description: `Experience the epitome of luxury and grandeur with your large group in our grand cabin 030. This lavish retreat caters to all needs and desires. Featuring opulent design, high-end finishes, and the finest quality wood. Multiple living areas with fireplaces, a gourmet kitchen, and plush bedrooms with en-suite bathrooms await you. Relax on the private deck with a luxurious hot tub and ample seating.`
  }
];

const updatedCabins = cabins.map(cabin => {
  let nums = 1 + Math.round(Math.random() * 6);
  const constructedImage = "" + imageUrl + `cabin-00${nums}.jpg`;
  return {
    ...cabin,
    image: constructedImage
  }
});
export default updatedCabins;
