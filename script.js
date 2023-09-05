// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix')
let error = document.querySelector('small')
let formulaire = document.querySelector('#formulaire')
let amin = document.querySelector('span')
// test perso
amin.onclick = () =>{
    let promptamin = "AMIN LE BOSS"
    let promptautre
    do {
        promptautre = prompt('Si tu veux rejouer écris "AMIN LE BOSS"')
    } while (promptautre != promptamin);
    
    location.href="https://houssni-amin.github.io/Juste-prix/"
}

// Etape 2 - Cacher l'erreur
error.style.display = 'none'

//nombre max
let nombremax = 1001

// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * nombremax)
let coup = 0
let nombreChoisi

// Etape 6 - Créer la fonction vérifier
function verifier(nombre) {
    let instructuion = document.createElement('div')

    if (nombre < nombreAleatoire ) {
        instructuion.textContent = `#${coup} (${nombre}) C'est plus !`
        instructuion.className = 'instruction plus'
    }else if (nombre > nombreAleatoire) {
        instructuion.textContent = `#${coup} (${nombre}) C'est moins !`
        instructuion.className = 'instruction moins'
    }else{
        instructuion.textContent = `#${coup} (${nombre}) Félicitation vous avez trouvé le juste prix ! Si tu veux rejouer clique sur #Amin !!!`
        instructuion.className = 'instruction fini'
        input.disabled = true
    }
    document.querySelector('#instructions').prepend(instructuion)
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
    if (isNaN(input.value)) {
        error.style.display = 'inline'
    }else{
        error.style.display = 'none'
    }
})

// Etape 5 - Agir à l'envoi du formulaire*
formulaire.addEventListener('submit', (e) => {
    e.preventDefault()

    if (isNaN(input.value) || input.value == "") {
        input.style.borderColor = 'red'
    }else{
        coup++
        input.style.borderColor = 'silver'
        nombreChoisi = input.value
        input.value = ""
        verifier(nombreChoisi)
    }
})
