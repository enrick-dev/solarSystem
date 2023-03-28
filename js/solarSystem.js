
let sizeBorderPlanets 

// -9.5
const planets = [
  {
    name: 'Pluto',
    width: 3.87,
    height: 3.87,
    alt: 'Planeta Anão Plutão'
  },
  {
    name: 'Neptune',
    width: 5.36,
    height: 5.36,
    alt: 'Planeta Netuno'
  },
  {
    name: 'Uranus',
    width: 5.79,
    height: 5.79,
    alt: 'Planeta Urano'
  },
  {
    name: 'Saturn',
    width: 10.8,
    height: 9.12,
    alt: 'Planeta Saturno'
  },
  {
    name: 'Jupiter',
    width: 7.95,
    height: 7.95,
    alt: 'Planeta Jupiter'
  },
  {
    name: 'Marte',
    width: 4.65,
    height: 4.65,
    alt: 'Planeta Marte'
  },
  {
    name: 'Terra',
    width: 5.58,
    height: 5.58,
    alt: 'Planeta Terra'
  },
  {
    name: 'Venus',
    width: 4.84,
    height: 4.84,
    alt: 'Planeta Venus'
  },
  {
    name: 'Mercurio',
    width: 3.99,
    height: 3.99,
    alt: 'Planeta Mercurio'
  },
]



planets.filter((planet) => {
  let containerSolarSystem = document.querySelector('.solarContainer');

  let containerDiv = document.createElement('div');
  let contentDiv = document.createElement('div');
  let img = document.createElement('img');


  contentDiv.appendChild(img)
  containerDiv.appendChild(contentDiv);
  containerSolarSystem.appendChild(containerDiv);

  
  containerDiv.className = `containerCircle container${planet.name}Circle`
  contentDiv.className = `containerPlanets container${planet.name}`
  img.className = `planet${planet.name}`
  img.src = `./assets/planets/${planet.name}.svg`
  img.alt = `${planet.alt}`

})