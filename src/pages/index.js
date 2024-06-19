import FoodCard from "@/components/card/FoodCard";
import BaseLayout from "@/layouts/BaseLayout";
import axios from "axios";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const resp = await axios.get("https://api-bootcamp.do.dibimbing.id/api/v1/foods", {
    headers: {
      apiKey: "w05KkI9AWhKxzvPFtXotUva-",
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
    },
  });
  const data = resp.data.data;
  return { props: { foods: data } };
}

export default function Home({ foods }) {
  const router = useRouter();
  return (
    <BaseLayout>
      <div className="flex flex-wrap md:flex-col flex-row items-center justify-center bg-abstract pt-32 max-md:pt-20 pb-10">
        {foods.map((food) => (
          <FoodCard food={food} key={food.id} />
        ))}
      </div>
    </BaseLayout>
  );
}