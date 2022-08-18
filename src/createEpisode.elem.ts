import Person from "./models/person.interface";

export function createEveryEpisode(person: Person) {
    let personEpisodesList = document.createElement('div');
    personEpisodesList.innerText = "Episodes";
    personEpisodesList.className = "episode-list";
    personEpisodesList.addEventListener('click', () => {
        if (personEpisodesList.innerHTML === "Episodes") {
            person.episode.forEach((episode) => {
                const episodeItem = document.createElement('div');
                episodeItem.className = "episode-item";
                episodeItem.innerText = "(" + episode + ")";
                personEpisodesList.append(episodeItem);
            });
        } else {
            personEpisodesList.innerHTML = "Episodes"
        }
    })
    return personEpisodesList;
}
