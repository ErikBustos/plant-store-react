import apiFetch from "./apiFetch";

export const getPlants = () => apiFetch("GET", "/plants");

export const getPlantById = ({id}) => apiFetch("GET", `/plants/${id}`);