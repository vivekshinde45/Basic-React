import RestaurantCard from '../components/RestaurantCard'
import { resList } from '../utils/constants';


const Body = () => {
    return (
        <div className="body">
            <div className="search-bar">Search</div>
            <div className="res-container">
                {resList.map((restaurant) => {
                    return (
                        <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                    );
                })};
            </div>
        </div>
    );
}

export default Body;