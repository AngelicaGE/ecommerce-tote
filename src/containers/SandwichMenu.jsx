import React, {useState} from 'react';
import '../styles/SandwichMenu.scss';


const SandwichMenu = () => {
    const [menuSelected, setmenuSelected] = useState(false);

    const classChange = "SandwichMenu container change";
    const classNotChange = "SandwichMenu container";

    return (
        <div className={menuSelected? classChange: classNotChange } onClick={() => setmenuSelected(!menuSelected)}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    );
};

export default SandwichMenu;
