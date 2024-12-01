import fs from "fs"
import { countries } from "./country-data.js";

//sample url 'https://flagcdn.com/pt.svg';
const url = 'https://flagcdn.com/';
const countriesString = `const countries = [\n${countries
  .map(
    (country) => `  {
    name: "${country.name}",
    flagcdn: "${url}${country.code.toLowerCase()}.svg",
    code: \`${country.code.toLowerCase()}\`
  }`
  )
  .join(",\n")}\n];\n\nexport default countries;`;

// Write the string to a JavaScript file
const filename = "data-countries.js";
fs.writeFileSync(filename, countriesString);

console.log(`JavaScript array saved to ${filename}!`);
