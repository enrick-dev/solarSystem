let gridMainScale = document.querySelector('.mainContainer')
let detailBackground = document.querySelector('.detailBackground')
let backgroundStars =  document.querySelector('body');
let solarContainer = document.querySelector('.solarContainer')
let introductionContainer = document.querySelector('.introductionContainer')

// Exemplo de uso

// Calculo para responsividade usando de base uma tela 1920 //
// 1920 = 97.6 = 100%
// 19,20 = 0.976 = 1%
let calcWindowSize = window.innerWidth / 19.20;

if(window.innerWidth < 500) {
  let calcGridMainScale1 = calcWindowSize * 0.10;
  let calcGridMainScale2 = calcWindowSize * 0.05;
  gridMainScale.style.gridTemplateRows = `${calcGridMainScale1}rem 44.5fr 2fr 53.5fr ${calcGridMainScale2}rem`
} else {
  let calcGridMainScale1 = calcWindowSize * 0.10;
  let calcGridMainScale2 = calcWindowSize * 0.05;
  gridMainScale.style.gridTemplateColumns = `${calcGridMainScale1}rem 44.5fr 2fr 53.5fr ${calcGridMainScale2}rem`
}


let calcBackgroundStars = calcWindowSize * 1.92;
backgroundStars.style.backgroundSize = `${calcBackgroundStars}rem`;
let calcDetailBackground = calcWindowSize * 0.892;
detailBackground.style.backgroundSize = `${calcDetailBackground}rem`;



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

// Escala, objetos diminuirem quando a tela dimiuir o width
let logoImg = document.querySelector('.logoImg');

let textContenth1 = document.querySelector('.textContent h1');
let textContentp1 = document.querySelector('.textContent p:nth-child(2)');
let textContentp2 = document.querySelector('.textContent p:nth-child(3)');
let clickTextContent = document.querySelector('.clickTextContent');
let clickText = document.querySelector('.clickTextContent p');

let containerCircle = document.querySelectorAll('.containerCircle');
let solImg = document.querySelector('.sol');


let calcLogoImgWidth = calcWindowSize * 0.488;
let calcLogoImgHeight = calcWindowSize * 0.135;
  logoImg.style.width = `${calcLogoImgWidth}rem`;
  logoImg.style.height = `${calcLogoImgHeight}rem`;

let calcTextContenth1 = calcWindowSize * 0.128;
let calcTextContentp1 = calcWindowSize * 0.036;
let calcTextContentp2 = calcWindowSize * 0.032;
let calcTextContentp2Width = calcWindowSize * 0.709;
  textContenth1.style.fontSize = `${calcTextContenth1}rem`;
  textContentp1.style.fontSize = `${calcTextContentp1}rem`;
  textContentp2.style.fontSize = `${calcTextContentp2}rem`;
  textContentp2.style.width = `${calcTextContentp2Width}rem`;

let calcClickTextContent = calcWindowSize * 0.005;
let calcClickTextFont = calcWindowSize * 0.027;
let calcClickTextWidth = calcWindowSize * 0.305;
  clickTextContent.style.borderBottom = `${calcClickTextContent}rem solid #f2f2f2`;
  clickText.style.fontSize = `${calcClickTextFont}rem`;
  clickText.style.width = `${calcClickTextWidth}rem`;


let calcContainerCircle = calcWindowSize * 0.036;
let calcSolImgWidth = calcWindowSize * 0.3221;
let calcSolImgHeight = calcWindowSize * 0.3221;
  solImg.style.width = `${calcSolImgWidth}rem`;
  solImg.style.width = `${calcSolImgHeight}rem`;

  containerCircle.forEach(function(index) {
    index.style.border = `${calcContainerCircle}px solid #f1f1f1`;
  })




// Responsividade






if(window.innerWidth < 900) {
  let calcWindowSize = window.innerWidth / 19.20;
  let calcGridMainScale1 = calcWindowSize * 0.20;
  let calcGridMainScale2 = calcWindowSize * 0.20;
  // mudar de grid column para row
  gridMainScale.style.gridTemplateColumns = `${calcGridMainScale1}rem 1fr ${calcGridMainScale2}rem`;
  gridMainScale.style.gridTemplateRows = `${calcGridMainScale1}rem 53.5fr 2fr 30fr ${calcGridMainScale2}rem`;

  gridMainScale.style.paddingTop = '10px'
  solarContainer.style.gridColumn = '2';
  solarContainer.style.gridRow = '2';
  
  introductionContainer.style.gridColumn = '2';
  introductionContainer.style.gridRow = '4';

}

















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


