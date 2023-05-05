

const Restaurantcard = ({cloudinaryImageId, name, cuisines, avgRating, costForTwoString}) => {
const url = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

//    console.log(props,"props");
    return(
        <div className="restaurantCard p-2">
            <img src={url+cloudinaryImageId} width="100%" alt="restaurant" />
            <h6 className="mb-2">{name}</h6>
            <h6 className="mb-2 text-secondary">{cuisines.join("✌️ ")}</h6>
            <h6 className="mb-2">Rating {avgRating}/5</h6>
            <h6 className="mb-2">{costForTwoString}</h6>
        </div>
    )
}


export default Restaurantcard;