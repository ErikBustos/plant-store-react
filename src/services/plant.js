import apiFetch from "./apiFetch";

export const getPlants = () => apiFetch("GET", "/plants");