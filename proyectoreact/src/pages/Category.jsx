import { UserLayout } from "../components/UserLayout";
import { useParams } from "react-router-dom";

export const Category = () => {
    const params = useParams();
    console.log({ params })
    return (
        <UserLayout>

        </UserLayout>
    )
}