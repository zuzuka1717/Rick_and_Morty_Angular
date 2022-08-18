import Person from "./models/person.interface";

export function createPersonCard (person: Person) {
    let card = document.createElement('div');
    let personImg = document.createElement('img');
    let personName = document.createElement('div');

    card.className = "card";

    personImg.src = person.image;
    personImg.className = "card__img";
    card.append(personImg);

    personName.innerText = person.name;
    personName.className = "card__first-name";
    card.append(personName);

    return card;
}