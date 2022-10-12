import { useState } from "react";
import MenuFilter from "./MenuFilter";
import MenuItem from "./MenuItem";

function Menu({ menuItems, ...props }) {

    // const [menuItems, setMenuItems] = useState(INITIAL_MENU_ITEMS)
    const [filter, setFilter] = useState()

    const updateFilter = (value) => {
        setFilter(value);
    };

    const menuList = menuItems
    .filter((item) => filter ? item.type === filter : item)
    .map((item) => <MenuItem key={item.id} item={item} updateOrder={props.updateOrder} />);

  return (
    <div className="main-menu">
        <MenuFilter updateFilter={updateFilter}/>
        <ul className="menu-list">{menuList}</ul>
    </div>
  );
}

export default Menu;
