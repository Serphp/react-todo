import Header from "./componets/Header";
import Form from "./componets/Form";
import List from "./componets/List";
import Selector from "./componets/selector";

const App = () => {
  return (    
      <div className=" min-h-screen bg-gray-100 bg-[url(.\assets\images\bg-mobile-light.jpg)] bg-contain bg-no-repeat">
          <Header/>
          <Form />
        <main className="container mx-auto px-5 mt-8">
          <List/>
          <Selector/>
        </main>
          <p className="text-center mt-12 text-gray-500">
            Drag and drop to reorder list
          </p>
      </div>
  );
};

export default App;