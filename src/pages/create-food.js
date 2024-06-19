import FoodForm from "@/components/Form/FoodForm";
import BaseLayout from "@/layouts/BaseLayout";

export default function CreateFood() {
    return (
        <BaseLayout>
            <div className="pt-20 px-4">
                <FoodForm />
            </div>
        </BaseLayout>
    );
}