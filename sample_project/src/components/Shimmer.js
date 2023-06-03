import { Component } from "react";
import { ShimmerPostList } from "react-shimmer-effects";

class Shimmer extends Component {
  render() {
    return( 
        <div className="container">
            <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={3} gap={30} />
        </div>
    )
  }
}

export default Shimmer;