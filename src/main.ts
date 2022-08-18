import {fetchCharacterList} from "./api/api.service";
import {createPersonCard} from "./createPerson.elem";
import {createPersonDetails} from "./createPerson.details";

let appRoot = document.getElementById('root') as HTMLElement || null;
let page: number = 1;
let totalPages: number = 1;

async function loadPage() {
    appRoot.innerHTML = ""
    const {info, results: person} = await fetchCharacterList(page)
        totalPages = info.pages
    person.forEach((person) => {
        const personElem = createPersonCard(person);
        const personDetails = createPersonDetails(person);
        appRoot.append(personElem);
        appRoot.append(personDetails);

        personElem.addEventListener('click', function () {
            if (personDetails.style.visibility == "visible") {
                personDetails.style.visibility = "hidden";
            } else if (personDetails.style.visibility == "hidden") {
                personDetails.style.visibility = "visible"
            }
        })
    })
}

function clickButtons() {
    let buttonPrevious = document.querySelector('.pagination__button_previous') as HTMLButtonElement || null;
    buttonPrevious.addEventListener('click', () => {
        if (buttonPrevious != null) {
            if (page === 1) {
                buttonPrevious.disabled = true;
            } else {
                page--;
                buttonNext.disabled = false;
                loadPage();
            }
        }
    });

    let buttonNext = document.querySelector('.pagination__button_next') as HTMLButtonElement || null;
    buttonNext.addEventListener('click', () => {
        if (buttonNext != null) {
            if (page === totalPages) {
                buttonNext.disabled = true;
            } else {
                page++;
                buttonPrevious.disabled = false;
                loadPage();
            }
        }
    });
}

await loadPage();
clickButtons();
