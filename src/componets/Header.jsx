import { useEffect, useState } from "react";
import IconLuna from "./IconLuna";
import IconSun from "./IconSun";

const InicialTheme = localStorage.getItem('theme') === 'dark';

const Header = () => {

    const [theme, setTheme] = useState(InicialTheme);

    useEffect(() => {
    if (theme){
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
}, [theme]);

    {/* const HandleTheme = () => {
        console.log("click");
    };*/}

    return (
        <header className=" container mx-auto px-5 pt-10">
            <div className=" flex justify-between">
                <h1 className=" text-4xl text-white font-semibold tracking-[0.3em] mt-2">
                    TODO
                </h1>
                <button onClick={() => setTheme(!theme)}>
                    {theme ? <IconSun /> : <IconLuna />}
                </button>
            </div>
        </header>
    );
};

export default Header;