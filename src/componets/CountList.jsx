const CountList = ({count, ClearList}) => {
    return (
        <section className=" flex px-5 py-5 text-gray-500 rounded-md bg-white ">
        <span className=" grow">{count} items left</span>
        <button className="flex-none" onClick={ClearList}>Clear Complete</button>
        </section>
    )
}

export default CountList;