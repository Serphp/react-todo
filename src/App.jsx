//import IconCross from "./componets/IconCross";
import IconCross from "./componets/IconCross";
import IconLuna from "./componets/IconLuna";

const App = () => {
  return (
       
      <div className=" min-h-screen bg-gray-100 bg-[url(.\assets\images\bg-mobile-light.jpg)] bg-contain bg-no-repeat">
           {/* BACKGROUND AND HEADER */}
           <header className=" container mx-auto px-5 pt-10">
              <div className=" flex justify-between">
                  
              <h1 className=" text-4xl text-white font-semibold tracking-[0.3em] mt-2">
                  TODO
              </h1>
              <button><IconLuna/></button>
              </div>
              <form className=" bg-white rounded-md overflow-hidden py-5 px-5 flex gap-6 items-center mt-12">
                <span className=" inline-block h-5 w-5 rounded-full border-2"></span>
                <input 
                type="text" 
                placeholder="Create a new todo..." 
                className=" w-full text-gray-600 outline-none"
                />
              </form>
           </header>

        <main className="container mx-auto px-5 mt-8">
          {/* CONTRAINER */}
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
        </main>

              <section className="container mx-auto px-4 text-bold">
                <div className="px-5 py-5 bg-white mt-6 rounded-md">
                <span className=" flex justify-center gap-4">
                  <button className="hover:text-blue-800">All</button>
                  <button>Active</button>
                  <button>Completed</button>
                </span>
                </div>
              </section>

            <p className="text-center mt-12 text-gray-500">Drag and drop to reorder list</p>
            <div className="mt-20"></div>
      </div>
  );
};

export default App;