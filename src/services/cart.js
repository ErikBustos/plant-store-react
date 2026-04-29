import apiFetch from "./apiFetch"

export const getCart = () => apiFetch("GET", "/cart");

export const addPlantToCart = ({ plantId, quantity, potColor } ) => apiFetch("POST", `/cart/plants/${plantId}`, {
    quantity,
    pot_color: potColor
});