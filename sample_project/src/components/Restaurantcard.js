import { Link } from 'react-router-dom'

const Restaurantcard = ({ cloudinaryImageId, name, cuisines, avgRating, costForTwoString, aggregatedDiscountInfo,id}) => {
    const url = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

    //    console.log(props,"props");
    return (
        <Link to={`/menu/${id}`}className="restaurantCard p-2">
                <img src={url + cloudinaryImageId} width="100%" alt="restaurant" />
                <h6 className="mb-2 text-dark">{name}</h6>
                <h6 className="mb-2 text-secondary">{cuisines.join("✌️ ")}</h6>
                <h6 className="mb-2 text-dark">Rating {avgRating}/5</h6>
                <h6 className="mb-2 text-dark">{costForTwoString}</h6>
                <h6 className="mb-2 text-dark">Offer : {aggregatedDiscountInfo?.header}</h6>
        </Link>
    )
}


export default Restaurantcard;