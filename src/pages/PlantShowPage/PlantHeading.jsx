const PlantHeading = (props) => {
    const { plant } = props;
    return (
        <>
        <div className="flex justify-between items-center text-emerald-700">
            <div className="text-4xl font-playfair">{plant.name}</div>
            <div className="text-3xl">${plant.price}</div>
        </div>
        <div className="pl-px my-2 text-lg italic text-slate-500">{plant.botanical_name}</div>
        </>

    );
}

export default PlantHeading;