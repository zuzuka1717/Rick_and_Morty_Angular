export default interface Person {
    name: string;
    image: string;
    location: {
        "name": string,
        "url": string
    };
    episode: string[];
};