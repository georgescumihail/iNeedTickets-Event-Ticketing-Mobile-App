import { API_ROUTE } from "./Common";

const event_api = API_ROUTE + "events/";

export const GetEvents = async () => {
    return fetch(event_api).then(res => res.json());
}

export const GetEventById = async id => {
    return fetch(event_api + id).then(res => res.json());
}

export const GetEventsByQuery = async query => {
    return fetch(event_api + "search?" + new URLSearchParams({ query })).then(res => res.json());
}