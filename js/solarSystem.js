
// Calculo para responsividade usando de base uma tela 1920 //
// 1920 = 97.6 = 100%
// 19,20 = 0.976 = 1%
let sizeWindowWidth = window.innerWidth;;
let calcWindowSize = sizeWindowWidth / 19.20;

let sizeBorderCalc = calcWindowSize * 0.916;
let sizeSpaceBorderCalc = calcWindowSize * 0.090;


const planets = [
  {
    name: 'pluto',
    width: 0.0364,
    height: 0.0367,
    alt: 'Planeta Anão Plutão',
    veloc: 7376 / 5.2
  },
  {
    name: 'neptune',
    width: 0.0504,
    height: 0.0504,
    alt: 'Planeta Netuno',
    veloc: 4537 / 5.2
  },
  {
    name: 'uranus',
    width: 0.0544,
    height: 0.0544,
    alt: 'Planeta Urano',
    veloc: 3006 / 5.2
  },
  {
    name: 'saturn',
    width: 0.1014,
    height: 0.0856,
    alt: 'Planeta Saturno',
    veloc: 1503 / 5.2
  },
  {
    name: 'jupiter',
    width: 0.0747,
    height: 0.0747,
    alt: 'Planeta Jupiter',
    veloc: 816 / 5.2
  },
  {
    name: 'marte',
    width: 0.0437,
    height: 0.0437,
    alt: 'Planeta Marte',
    veloc: 249 / 5.2
  },
  {
    name: 'terra',
    width: 0.0524,
    height: 0.0524,
    alt: 'Planeta Terra',
    veloc: 152 / 5.2
  },
  {
    name: 'venus',
    width: 0.0455,
    height: 0.0455,
    alt: 'Planeta Venus',
    veloc: 108 / 5.2
  },
  {
    name: 'mercurio',
    width: 0.0375,
    height: 0.0375,
    alt: 'Planeta Mercurio',
    veloc: 69 / 5.2
  },
]

let mainContainer = document.querySelector('.estiloModificadoPorJs');
let topPlanet = [];
let leftPlanet = [];
let sizeBorderPlanets = [sizeBorderCalc];

// Criação de toda a construção do sistema Solar
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
    sizeBorderPlanets[index] = sizeBorderPlanets[index-1] - sizeSpaceBorderCalc;
  }
  
  containerDiv.style.width = `${sizeBorderPlanets[index].toFixed(1)}rem`;
  containerDiv.style.height = `${sizeBorderPlanets[index].toFixed(1)}rem`;
  
  // Tamanho e posicionamento dos planetas
  let planetWidth = calcWindowSize * planet.width
  let planetHeight = calcWindowSize * planet.height
  leftPlanet = planetWidth / 2;
  topPlanet = planetHeight / 2;

  img.style.width = `${planetWidth}rem`;
  img.style.height = `${planetHeight}rem`;
  img.style.left = `-${leftPlanet.toFixed(2)}rem`;
  img.style.top = `-${topPlanet.toFixed(2)}rem`;
  img.style.position = 'absolute';
  
  // Animação de rotação dos planetas
  let planetsAnimation = document.querySelector(`.container${planet.name}`);

  planetsAnimation.style.animation = `spin ${planet.veloc}s linear infinite`;
  planetsAnimation.style.webkitAnimation = `spin ${planet.veloc}s linear infinite`;
  planetsAnimation.style.mozAnimation = `spin ${planet.veloc}s linear infinite`;
  planetsAnimation.style.rotate = `${planet.veloc / 2}deg`;

})

let calcTextContenth1 = calcWindowSize * 0.128;
let calcTextContentp1 = calcWindowSize * 0.036;
let calcTextContentp2 = calcWindowSize * 0.032;

let textContenth1 = document.querySelector('.textContent h1');
let textContentp1 = document.querySelector('.textContent p:nth-child(2)');
let textContentp2 = document.querySelector('.textContent p:nth-child(3)');

textContenth1.style.fontSize = `${calcTextContenth1}rem`;
textContentp1.style.fontSize = `${calcTextContentp1}rem`;
textContentp2.style.fontSize = `${calcTextContentp2}rem`;


// Responsividade
// if(sizeWindowWidth < 1600) {


//   // Tamanho dos Planetas
//   let decreasingValue = 28;

//   planets.filter((planet, index) => {
//     let img = document.querySelector(`.planet${planet.name}`);
//     let newWidth = (planet.width - ((planet.width / 100) * decreasingValue)).toFixed(2);
//     let newHeight = (planet.height - ((planet.height / 100) * decreasingValue)).toFixed(2);
//     let newLeft = (newWidth / 2).toFixed(2);
//     let newTop = (newHeight / 2).toFixed(2);

//     img.style.width = `${newWidth}rem`;
//     img.style.height = `${newHeight}rem`;
//     img.style.left = `-${newLeft}rem`;
//     img.style.top = `-${newTop}rem`;
//   })
// }


