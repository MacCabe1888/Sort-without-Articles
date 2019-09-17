const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere but Here",
  "An Old Dog"
];

function strip(name) {
  return name.replace(/^(the |a |an )/i, "").trim();
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector("#bands").innerHTML = sortedBands.map(name => `<li>${name}</li>`).join("");
