import clsx from "clsx";
import { useState } from "react";

const POT_COLORS = {
    stone: "bg-stone-200",
    slate: "bg-slate-300",
    sky: "bg-sky-700",
    black: "bg-gray-600",
    white: "bg-gray-50",
    amber: "bg-amber-600"
};

const getRandomIdx = (array) => {
    return Math.floor(Math.random() * array.length);
}

const PlantItem = (props) => {
    const { plant } = props;
    const [imageIdx, setImageIdx] = useState(getRandomIdx(plant.images));

    return <div className="my-5 mx-8">
        <img className="w-[280px] h-[320px] rounded-md" src={plant.images[imageIdx].src} />
        <div className="flex justify-between my-3">
            <div className="text-xl font-playfair text-emerald-700">{plant.name}</div>
            <div className="text-lg text-emerald-600">${plant.price}</div>
        </div>
        <div className="flex justify-between">
            <div className="text-sm text-slate-500">{plant.images[imageIdx].pot_color}</div>
            <div className="flex">
                {
                    plant.images.map((image, idx) => (
                    <div
                        key={idx} className={clsx(
                        "w-5 h-5 rounded-full mx-[3px] border border-slate-300", 
                        POT_COLORS[image.pot_color],
                        imageIdx === idx && "outline outline-slate-400 outline-space"
                    )}
                        onMouseEnter={() => setImageIdx(idx)}
                        ></div>
                    ))}

            </div>
        </div>
    </div>
}

export default PlantItem;