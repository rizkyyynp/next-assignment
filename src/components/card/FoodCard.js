import { useRouter } from "next/router";

export default function FoodCard({ food }) {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/foods/${food.id}`);
    };
    return (
        <div className="bg-white shadow-lg rounded-lg m-2 w-64  flex flex-col cursor-pointer hover:border-2 hover:border-primary hover:transition-all hover:duration-300" onClick={handleClick}>
            <img
                src={food.imageUrl}
                alt="Card image"
                className="w-full h-32 object-cover rounded-t-lg"
            />
            <div className="p-4 flex-1 flex flex-col justify-between items-center bg-secondary rounded-b-lg">
                <div className="overflow-hidden">
                    <h2 className="text-lg font-bold truncate text-slate-50">{food.name}</h2>
                </div>
            </div>
        </div>
    );
}