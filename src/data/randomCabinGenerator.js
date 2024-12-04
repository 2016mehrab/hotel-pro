import fs from "fs"

const generateCabins = (length) => {
  const descriptions = {
    2: "Discover the ultimate luxury getaway for couples in the cozy wooden cabin {name}. Nestled in a picturesque forest, this stunning cabin offers a secluded and intimate retreat. Inside, enjoy modern high-quality wood interiors, a comfortable seating area, a fireplace, and a fully-equipped kitchen. The plush king-size bed, dressed in fine linens, guarantees a peaceful night's sleep. Relax in the spa-like shower and unwind on the private deck with a hot tub.",
    4: "Experience luxury family living in our medium-sized wooden cabin {name}. Perfect for families of up to 4 people, this cabin offers a comfortable and inviting space with all modern amenities. Inside, enjoy warm interiors crafted from high-quality wood, a living area, a fireplace, and a fully-equipped kitchen. The bedrooms feature plush beds and spa-like bathrooms. The private deck with a hot tub and outdoor seating area is perfect for taking in the natural surroundings.",
    6: "Enjoy a comfortable getaway with your group or family in our spacious cabin {name}. Designed to accommodate up to 6 people, this cabin offers a retreat in the heart of nature. Inside, enjoy warm wood-crafted interiors, a living area with a fireplace, and a fully-equipped kitchen. Comfortable bedrooms with en-suite bathrooms make it a perfect choice. Step outside to your private deck to relax in the hot tub.",
    8: "Accommodate your large group or multiple families in the grand wooden cabin {name}. Designed for up to 8 people, this cabin offers a secluded retreat in the heart of forests and mountains. Featuring warm interiors, multiple living areas with fireplaces, and a fully-equipped kitchen. Comfortable bedrooms with en-suite bathrooms make it perfect. The private deck has a hot tub and outdoor seating area to enjoy nature.",
    10: "Experience the epitome of luxury and grandeur with your large group in our grand cabin {name}. This lavish retreat caters to all needs and desires. Featuring opulent design, high-end finishes, and the finest quality wood. Multiple living areas with fireplaces, a gourmet kitchen, and plush bedrooms with en-suite bathrooms await you. Relax on the private deck with a luxurious hot tub and ample seating.",
  };

  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const cabins = Array.from({ length }, (_, i) => {
    const name = String(i + 1).padStart(3, "0");
    const capacity = getRandomInt(2, 10);
    const price = getRandomInt(200, 1500);
    const discount = getRandomInt(0, 100);
    const description = descriptions[capacity]
      ? descriptions[capacity].replace(/{name}/g, name)
      : descriptions[10].replace(/{name}/g, name); // Default to the largest description

    return {
      name: name,
      capacity: capacity,
      price: price,
      discount: discount,
      image: "",
      description: description,
    };
  });

  return cabins;
};

// Configuration
const arrayLength = 30; // Number of cabins to generate
const imageUrl = "https://example.com/images/";

// Generate the data
const cabins = generateCabins(arrayLength, imageUrl);

// Prepare JavaScript objects as a string
const cabinsString = `const cabins = [\n${cabins
  .map(
    (cabin) => `  {
    name: "${cabin.name}",
    capacity: ${cabin.capacity},
    price: ${cabin.price},
    discount: ${cabin.discount},
    image: "${cabin.image}",
    description: \`${cabin.description}\`
  }`
  )
  .join(",\n")}\n];\n\nexport default cabins;`;

// Write the string to a JavaScript file
const filename = "RandomCabins.js";
fs.writeFileSync(filename, cabinsString);

console.log(`JavaScript array saved to ${filename}!`);
