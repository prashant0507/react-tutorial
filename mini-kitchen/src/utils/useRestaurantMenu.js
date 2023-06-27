import {useEffect, useState} from 'react';
import {MENU_API} from "../utils/appConstant";

const useRestaurantMenu = (resId) => {

    const [restMenu, setRestMenu] = useState(null);
    
    useEffect(() => {
        fetchData();
    }, []); // [] once call

    const fetchData = async () => {
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setRestMenu(json.data);
    }

    return restMenu;
}

export default useRestaurantMenu;