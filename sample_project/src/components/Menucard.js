
import { url } from "../utilities/helper";


const Menucard = ({ imageId, name, ratings, price, isVeg }) => {

    return (
        <div className="restaurantCard p-2">
            <img src={url + imageId} width="100%" alt="menu" />
            <h6 className="mb-2 text-dark">{name}</h6>
            <h6 className="mb-2 text-dark">Rating : {ratings?.aggregatedRating?.rating}/5</h6>
            <h6 className="mb-2 text-dark">{price / 100}</h6>
            <p className="mb-2 text-dark">{isVeg ? '💚' : '❤️'}</p>
        </div>
    )
}

export default Menucard;