const address = {
    street: "D Block, st #05, Satellite Town",
    city: "Rawalpindi",
    country: "Pakistan"
}

// Method used before destructuring
const st = address.street;
const cty = address.city;
const cnty = address.country;

// Destructuring Method
const { street: str, city: ctiy, country: cntry } = address;