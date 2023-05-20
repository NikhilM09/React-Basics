

const Shimmer = () => {
    return(
        <div className="shimmerWrapper">
            {
                Array(10).fill().map((item, index) => {
                    return(
                            <div className="shimmerCard"></div>
                )})
            }
        </div>
    )
}


export default Shimmer;