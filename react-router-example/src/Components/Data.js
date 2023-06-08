import { useLoaderData, useNavigation } from "react-router-dom";

export const Data = () => {
    const dogurl = useLoaderData();
    const navigation = useNavigation()

    if (navigation.state === "Loading") {
        return <h1>Loading...</h1>  
    }

    return (
    <div>
     {" "}   
     <img src={dogurl} alt = ""/>{" "}
     </div>
    );
};

export const dataLoader = async () => {
    const res = await fetch("https://random.dog/woof.json")
    const dog = await res.json()

    return dog.url;
};   