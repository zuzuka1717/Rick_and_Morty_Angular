import Person from "./models/person.interface";
import {createEveryEpisode} from "./createEpisode.elem";

export function createPersonDetails(person: Person) {
    let detailsCard = document.createElement('div');
    let personLocationName = document.createElement('div');
    let personLocationUrl = document.createElement('div');
    let personEpisodesDiv = createEveryEpisode(person);

    detailsCard.className = "details-card";
    personLocationName.className = "location-name";
    personLocationUrl.className = "location-url";
    detailsCard.style.visibility = "hidden";
    personEpisodesDiv.className = "episodes";
    personLocationName.innerText = "Location: " + person.location.name;
    personLocationUrl.innerText = "(" + person.location.url + ")";

    detailsCard.append(personLocationName);
    detailsCard.append(personLocationUrl);
    detailsCard.append(personEpisodesDiv)
    return detailsCard;
}
