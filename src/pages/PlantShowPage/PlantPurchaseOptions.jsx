import clsx from "clsx";
import { useState } from "react";
import { POT_COLORS, getRandomIdx } from "shared-components/util";
import * as cartService from "services/cart";

const PlantPurchaseOptions = (props) => {
    const { plant, imageIdx, setImageIdx } = props;
    const [quantity, setQuantity] = useState(0);
    const [isLoading , setIsLoading] = useState(false);

    return (
        <>
            <div className="my-10">
                <div className="flex text-emerald-700">
                    <i className="fa-solid fa-bush text-2xl mr-2"></i>
                    <div className="text-lg">Pot Colors</div>
                </div>
                <div className="flex my-4">
                    {plant.images.map((image, idx) =>
                        <div
                            key={image.pot_color}
                            className="mx-2 flex flex-col items-center "
                            onMouseEnter={() => setImageIdx(idx)}
                        >
                            <div className={clsx(
                                "rounded-full w-10 h-10",
                                POT_COLORS[image.pot_color],
                                imageIdx === idx && "outline outline-offset-2 outline-slate-500"
                            )}></div>
                            <div className={clsx("mt-1", imageIdx === idx ? "text-slate-700" : "text-slate-500")}>{image.pot_color}</div>
                        </div>
                    )
                    }
                </div>
            </div>
            <div className="flex">
                <div className="rounded-full flex items-center text-xl text-slate-500 border-2 border-slate-300 px-3 py-4">
                    <button onClick={() => {
                        if (quantity > 1) {
                            setQuantity(quantity-1)
                        }
                    }}>
                        <i className="fa-solid fa-minus"></i>
                    </button>
                    <div className="mx-4 text-2xl text-emerald-700">{quantity}</div>
                    <button onClick={() => setQuantity(quantity+1)}>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
                <button className="flex items-center justify-center flex-1 text-xl rounded-full bg-emerald-700 text-white ml-2 hover:bg-emerald-800"
                onClick={async () => {
                    setIsLoading(true);
                    const response = await cartService.addPlantToCart({
                        quantity,
                        plantId: plant.id,
                        potColor: plant.images[imageIdx].pot_color
                    });
                    console.log(response.status);
                    setIsLoading(false);
                }}
                >
                    {
                        isLoading ? 
                        <i className="fa-solid fa-spinner mr-2 text-2xl animate-spin"></i>:
                        <i className="fa-solid fa-cart-plus text-2xl mr-2"></i>
                    }
                    
                    add to cart
                </button>

            </div>
        </>
    );
}

export default PlantPurchaseOptions;