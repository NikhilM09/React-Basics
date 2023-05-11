import { useRouteError } from "react-router-dom";

const Errorelement = () => {
    const error = useRouteError();
    console.log("errror", error);
    return(
        <div className="text-center">
            <h1 className="h1">Oops</h1>
            <h3 className="h3">Something went wrong....</h3>
            <h4 className="h4">Status code : {error.status}</h4>
            <h4 className="h4">Details : {error.error.message}</h4>
        </div>
    )
}

export default Errorelement;