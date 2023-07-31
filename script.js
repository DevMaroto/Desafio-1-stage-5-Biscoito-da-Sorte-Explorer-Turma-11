// VARIABLES
const screen1 = document.querySelector('.hero')
const screen2 = document.querySelector('.hero-open-cookie')
const cookie = document.querySelector('#cookie')
const otherCookie = document.querySelector('#open-other-cookie')
const cookiePhrase = document.querySelector(".hero-open-cookie p")
const messages = [
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "Não há que ser forte. Há que ser flexível.",
  "A maior de todas as torres começa no solo.", 
  "Não importa o tamanho da montanha, ela não pode tapar o sol.", 
  "Uma iniciativa mal-sucedida não significa o final de tudo. Sempre existe uma nova oportunidade.", 
  "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.", 
  "Faça pequenas coisas agora e maiores coisas lhe serão confiadas cada dia.", 
  "Sua visão se tornará clara apenas quando você puder olhar dentro de seu coração.", 
  "Todas as coisas são difíceis antes de se tornarem fáceis.", 
  "O pessimista vê a dificuldade em cada oportunidade; O otimista vê a oportunidade em cada dificuldade.", 
  "Quem quer vencer um obstáculo deve armar-se da força do leão e da prudência da serpente.", 
  "A adversidade desperta em nós capacidades que, em circunstâncias favoráveis, teriam ficado adormecidas.", 
  "A nossa vida tem 4 sentidos…amar, sofrer, lutar e vencer. Ame muito, sofra pouco,lute bastante e vença sempre!", 
  "Nada é por acaso…Acredite em seus sonhos e nos seus potenciais….Na vida tudo se supera...",
  "Acredite em milagres, mas não dependa deles.",
  "Realize o óbvio, pense no improvável e conquiste o impossível Latumia.", 
  "Você sempre será a sua melhor companhia!"
]

// FUNCTIONS
function clickCookie() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')

  cookiePhrase.innerHTML = `${randomMessage()}`

}

function randomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]; 
}


function openOtherCookie() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')

  return messages[Math.floor(Math.random() * messages.length)];
}


// EVENTS
cookie.addEventListener('click', clickCookie)
otherCookie.addEventListener('click', openOtherCookie)
