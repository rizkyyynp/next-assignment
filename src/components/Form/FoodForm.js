import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function FoodForm({ defaultFormData, isEdit }) {
    const router = useRouter();
    const [formData, setFormData] = useState(defaultFormData || { name: "", imageUrl: "", description: "", ingredients: "" });

    const onSubmit = async (event) => {
        event.preventDefault();
        const ingredientsArray = formData.ingredients.split(",");
        const urlEdit = `https://api-bootcamp.do.dibimbing.id/api/v1/update-food/${router.query.id}`;
        const urlCreate = "https://api-bootcamp.do.dibimbing.id/api/v1/create-food";
        const resp = await axios.post(
            isEdit ? urlEdit : urlCreate,
            {
                name: formData.name,
                imageUrl: formData.imageUrl,
                description: formData.description,
                ingredients: ingredientsArray,
            },
            {
                headers: {
                    apiKey: "w05KkI9AWhKxzvPFtXotUva-",
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
                },
            }
        );
        if (resp.data.code === "200") {
            if (isEdit) {
                router.reload();
            } else {
                router.push("/");
            }
        }
    };

    return (
        <div className="flex flex-col justify-center items-center mt-10">
            <h1 className="text-3xl font-bold mb-5 text-slate-50 bg-primary p-5 rounded">{isEdit ? "Update" : "Create"} Menu</h1>
            <form className="w-full h-full bg-zinc-100 p-4 rounded-lg border-2 border-secondary" onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Menu Name"
                    className="w-full p-3 mb-3 rounded-lg"
                    value={formData.name}
                    onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    className="w-full p-3 mb-3 rounded-lg"
                    value={formData.imageUrl}
                    onChange={(event) => setFormData({ ...formData, imageUrl: event.target.value })}
                />
                <input
                    type="text"
                    placeholder="Input Description"
                    className="w-full p-3 mb-3 rounded-lg"
                    value={formData.description}
                    onChange={(event) => setFormData({ ...formData, description: event.target.value })}
                />
                <input
                    type="text"
                    placeholder="Input Ingredients (comma separated)"
                    className="w-full p-3 mb-3 rounded-lg"
                    value={formData.ingredients}
                    onChange={(event) => setFormData({ ...formData, ingredients: event.target.value })}
                />
                <button type="submit" className="w-full bg-primary text-white p-3 rounded-lg hover:border-4 hover:border-secondary hover:transition-all hover:duration-300">
                    {isEdit ? "Update Menu" : "Add New Menu"}
                </button>
            </form>
        </div>
    );
}
