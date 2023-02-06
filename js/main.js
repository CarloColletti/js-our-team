
/**
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
*/



// definiamo l'array del team

const teams = [
    {
        nome: 'Wayne',
        cognome: 'Barnett',
        ruolo: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.pg',
    },

    {
        nome: 'Angela',
        cognome: 'Caroll',
        ruolo: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg',
    },

    {
        nome: 'Walter',
        cognome: 'Gordon',
        ruolo: 'Office Manager',
        img: 'walter-gordon-office-managr.jpg',
    },

    {
        nome: 'Angela',
        cognome: 'Lopez',
        ruolo: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg',
    },

    {
        nome: 'arbara',
        cognome: 'Ramos',
        ruolo: 'Graphic Designer',
        img: 'barbara-ramos-graphic-desiner.jpg',
    },
]

// cicolo per prendere e mostrare a schermo i dati per ogni collega 
for (const prova of teams) {
    console.log(`
    ${prova.img}
    il nome e cognome del collega è: ${prova.nome} ${prova.cognome},
    e ha il ruolo di: ${prova.ruolo}
    `)
}




