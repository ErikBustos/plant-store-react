import { useEffect, useState } from "react";
import NavBar from "shared-components/NavBar";
import RedirectToSignInIfSignedOut from "shared-components/RedirectToSignInIfSignedOut";
import * as plantService from "services/plant";
import PlantItem from "./PlantItem";


const PlantListPage = () => {
    const [plants, setPlants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const response = await plantService.getPlants();
            const data = await response.json();
            setPlants(data);
            setIsLoading(false);
        })()
    }, []);

    return <RedirectToSignInIfSignedOut>
        <NavBar />
        <div className="min-h-screen bg-green-50">
            {isLoading ? (
                <div className="flex justify-center pt-40">
                    <i className="fa-duotone fa-spinner-third animate-spin text-3xl text-emerald-600"></i>
                </div>
            ) : (
                <div className="flex justify-center py-24">
                    <div className=" w-full max-w-5xl">
                        <div className="px-4 mb-6 text-4xl font-playfair text-emerald-800">
                            Plants in Stock
                        </div>
                        <div className="flex flex-wrap justify-center">
                            {
                                plants.map((plant, idx) => <PlantItem key={plant.name} plant={plant} />)
                            }
                        </div>
                    </div>
                </div>
            )}
        </div>
    </RedirectToSignInIfSignedOut>
};

export default PlantListPage;