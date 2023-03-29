const planets = [
  {
    name: 'Pluto',
    width: 3.87,
    height: 3.87,
    alt: 'Planeta Anão Plutão',
    veloc: 7376 / 8
  },
  {
    name: 'Neptune',
    width: 5.36,
    height: 5.36,
    alt: 'Planeta Netuno',
    veloc: 4537 / 8
  },
  {
    name: 'Uranus',
    width: 5.79,
    height: 5.79,
    alt: 'Planeta Urano',
    veloc: 3006 / 8
  },
  {
    name: 'Saturn',
    width: 10.8,
    height: 9.12,
    alt: 'Planeta Saturno',
    veloc: 1503 / 8
  },
  {
    name: 'Jupiter',
    width: 7.95,
    height: 7.95,
    alt: 'Planeta Jupiter',
    veloc: 816 / 8
  },
  {
    name: 'Marte',
    width: 4.65,
    height: 4.65,
    alt: 'Planeta Marte',
    veloc: 249 / 8
  },
  {
    name: 'Terra',
    width: 5.58,
    height: 5.58,
    alt: 'Planeta Terra',
    veloc: 152 / 8
  },
  {
    name: 'Venus',
    width: 4.84,
    height: 4.84,
    alt: 'Planeta Venus',
    veloc: 108 / 8
  },
  {
    name: 'Mercurio',
    width: 3.99,
    height: 3.99,
    alt: 'Planeta Mercurio',
    veloc: 69 / 8
  },
]

let mainContainer = document.querySelector('.estiloModificadoPorJs');
let topPlanet = [];
let leftPlanet = [];
let sizeBorderPlanets = [97.6];

planets.filter((planet, index) => {
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


  if(index > 0) {
    sizeBorderPlanets[index] = sizeBorderPlanets[index-1] - 9.5;
  }
  
  leftPlanet[index] = planet.width / 2;
  topPlanet[index] = planet.height / 2;
  // console.log(sizeBorderPlanetsArray[index].toFixed(1))
  containerDiv.style.width = `${sizeBorderPlanets[index].toFixed(1)}rem`;
  containerDiv.style.height = `${sizeBorderPlanets[index].toFixed(1)}rem`;
  
  img.style.width = `${planet.width}rem`;
  img.style.height = `${planet.height}rem`;
  img.style.left = `-${leftPlanet[index].toFixed(2)}rem`;
  img.style.top = `-${topPlanet[index].toFixed(2)}rem`;
  img.style.position = 'absolute';
  

  let planetsAnimation = document.querySelector(`.container${planet.name}`);

  planetsAnimation.style.animation = `spin ${planet.veloc}s linear infinite`;
  planetsAnimation.style.webkitAnimation = `spin ${planet.veloc}s linear infinite`;
  planetsAnimation.style.mozAnimation = `spin ${planet.veloc}s linear infinite`;
  planetsAnimation.style.rotate = `${planet.veloc / 2}deg`


})

