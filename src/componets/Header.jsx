import IconLuna from "./IconLuna";

const Header = () => {
    return (
        <header className=" container mx-auto px-5 pt-10">
            <div className=" flex justify-between">
                <h1 className=" text-4xl text-white font-semibold tracking-[0.3em] mt-2">
                    TODO
                </h1>
                <button><IconLuna/></button>
            </div>
        </header>
    );
};

export default Header;