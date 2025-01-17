import axios from "axios";
import BaseLayout from "@/layouts/BaseLayout";
import FoodForm from "@/components/Form/FoodForm";
import FoodCard from "@/components/card/FoodCard";

export async function getServerSideProps(context) {
    const resp = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.params.id}`, {
        headers: {
            apiKey: "w05KkI9AWhKxzvPFtXotUva-",
            "Content-Type": "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
        },
    });
    const data = resp.data.data;
    return { props: { food: data } };
}

export default function FoodDetails({ food }) {
    return (
        <BaseLayout>
            <div className="flex flex-col items-center max-md:px-4 pt-20 max-md:mb-10">
                <FoodCard food={food} />
                <FoodForm isEdit={true} defaultFormData={{ name: food.name, imageUrl: food.imageUrl, description: food.description, ingredients: food.ingredients.join(",") }} />
            </div>
        </BaseLayout>
    );
}
