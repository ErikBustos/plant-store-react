import PlantHeading from "./PlantHeading";

const PlantInfoSection = (props) => {
    const { plant } = props;

    return <div className="flex flex-col md:flex-row">
        <div className="flex flex-col flex-1">
            <div className="block md:hidden mb-8">
                <PlantHeading plant={plant}/>
            </div>
            <img className="rounded-lg" src={plant.images[0].src} />
            <div>
                todo
            </div>
        </div>
        <div className="flex flex-col flex-1 md:px-8">
            <div className="hidden md:block">
                <PlantHeading plant={plant}/>
            </div>
            <p className="text-slate-600 mt-4">
                {plant.description}
            </p>
        </div>
    </div>

};

export default PlantInfoSection;