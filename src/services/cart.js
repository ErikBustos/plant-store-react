import apiFetch from "./apiFetch"

export const addPlantToCart = ({ plantId, quantity, potColor } ) => apiFetch("POST", `/cart/plants/${plantId}`, {
    quantity,
    pot_color: potColor
});