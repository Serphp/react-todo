import IconCross from "./IconCross";

const List = () => {
    return (
        <div className=" rounded-md bg-white [&>article]:text-gray-400:text-bold"> 
            <article className=" flex gap-4 border-b border-b-gray-200 py-5 px-5">
                    <button className=" flex-none inline-block h-5 w-5 rounded-full border-4"></button>
                    <p className=" grow">Complete online JavaScript course</p>
                    <button className=" flex-none"><IconCross/></button>
            </article>
            <article className=" flex gap-4 border-b border-b-gray-200 py-5 px-5">
                    <button className=" flex-none inline-block h-5 w-5 rounded-full border-4"></button>
                    <p className=" grow">Complete online JavaScript course</p>
                    <button className=" flex-none"><IconCross/></button>
            </article>
            <article className=" flex gap-4 border-b border-b-gray-200 py-5 px-5">
                    <button className=" flex-none inline-block h-5 w-5 rounded-full border-4"></button>
                    <p className=" grow">Complete online JavaScript course</p>
                    <button className=" flex-none"><IconCross/></button>
            </article>
            <article className=" flex gap-4 border-b border-b-gray-200 py-4 px-4">
                    <button className=" flex-none inline-block h-5 w-5 rounded-full border-4"></button>
                    <p className=" grow">Complete online JavaScript course</p>
                    <button className=" flex-none"><IconCross/></button>
            </article>
            <section className=" flex px-5 py-5 text-gray-500 ">
            <span className=" grow">2 items left</span>
            <button className="flex-none">Clear Complete</button>
            </section>
        </div>
    );
};

export default List;