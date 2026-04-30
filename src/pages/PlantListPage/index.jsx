import { useEffect, useState } from "react";
import NavBar from "shared-components/NavBar";
import RedirectToSignInIfSignedOut from "shared-components/RedirectToSignInIfSignedOut";
import * as plantService from "services/plant";
import PlantItem from "./PlantItem";
import LoadingSpinner from "shared-components/LoadingSpinner";
import { motion } from "framer-motion";


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
                <LoadingSpinner/>
            ) : (
                <div className="flex justify-center py-24">
                    <div className=" w-full max-w-5xl">
                        <div className="px-4 mb-6 text-4xl font-playfair text-emerald-800">
                            Plants in Stock
                        </div>
                        <div className="flex flex-wrap justify-center">
                            {
                                plants.map((plant, idx) => (
                                    <motion.div key={plant.name}
                                    initial={{ opacity: 0, translateY: "20px"}}
                                    whileInView={{ opacity: 1, translateY: 0}}
                                    viewport={{once:true}} 
                                    transition={{ delay: 0.3 + (idx % 3) * 0.2,duration: 0.4}}>
                                        <PlantItem plant={plant} />
                                    </motion.div>
                            ))
                            }
                        </div>
                    </div>
                </div>
            )}
        </div>
    </RedirectToSignInIfSignedOut>
};

export default PlantListPage;