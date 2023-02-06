
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

// perndo l'elemento html che conterrà le card
const card_container = document.getElementById('contenitore');

// definiamo l'array del team

const teams = [
    {
        nome: 'Wayne',
        cognome: 'Barnett',
        ruolo: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg',
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
        nome: 'Scott',
        cognome: 'Extrada',
        ruolo: 'Developer',
        img: 'walter-gordon-office-manager.jpg',
    },

    {
        nome: 'arbara',
        cognome: 'Ramos',
        ruolo: 'Graphic Designer',
        img: 'barbara-ramos-graphic-desiner.jpg',
    },
]

// cicolo per prendere e mostrare a schermo i dati per ogni collega 
for (const log_single_member of teams) {
    console.log(`
    ${log_single_member.img}
    il nome e cognome del collega è: ${log_single_member.nome} ${log_single_member.cognome},
    e ha il ruolo di: ${log_single_member.ruolo}
    `)
}

// creo un ciclo che modifica i DOM e mostra le schede per ogni collega

for (const member of teams) {
    card_container.innerHTML += `
    <div class="col-4">
        <div class="card" style="width: 18rem;">
            <img src="${member.img}" class="card-img-top" alt="#">
            <div class="card-body text-center">
                <h5>${member.nome} ${member.cognome}</h>
                <h6>${member.ruolo}</h6>
            </div>
        </div>
    </div>

    `
}




