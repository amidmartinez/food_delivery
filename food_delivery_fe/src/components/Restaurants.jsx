import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function Restaurant() {
    const { restaurantId } = useParams();
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const getRestaurant = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/restaurants/`);
                setRestaurants(response.data);
            } catch (e) {
                console.error("Error fetching", e);
            }
        };

        getRestaurant();
    }, [restaurantId]);

    return (
      <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">All Restaurants near you</h1>
      {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="max-w-sm rounded overflow-hidden shadow-lg mb-4 mx-auto">
              <Link to={`/restaurants/${restaurant.id}/menuitems`} className="block p-4 hover:bg-gray-100">
                  <h2 className="font-bold text-xl mb-2">{restaurant.name}</h2>
              </Link>
              <div className="px-4 py-2">
                  <h3 className="text-gray-700 text-base">{restaurant.address}</h3>
                  <h3 className="text-gray-600 text-sm">Monday - Sunday Opens: {restaurant.idmonday_open} - Closes: {restaurant.sunday_open}</h3>
              </div>
          </div>
            ))}
        </div>
    );
}
