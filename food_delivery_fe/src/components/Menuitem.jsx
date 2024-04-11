import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Menuitem = () => {
  const { restaurantId } = useParams();
  console.log('Restaurant ID:', restaurantId)

  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const getMenuItems = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/menuitems/`);
        console.log('Fetched data:', response.data);

        const filteredItems = response.data.filter(item => item.restaurantId === restaurantId);
        console.log('Filtered Items:', filteredItems);
        setMenuItems(filteredItems);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };
  
    getMenuItems();
  }, [restaurantId]); 
    
  return (
    <div className="menu-items">
      <h1>Menu Items</h1>
      {menuItems.map((menuitem) => (
        <div key={menuitem.id}>
          <h2>{menuitem.name}</h2>
          <p>{menuitem.description}</p>
          <p>${menuitem.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Menuitem;
