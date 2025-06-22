// import MyUI from "./pages/MyUI";

import { useState } from "react";
import Son from "./pages/Son";
import Daughter from "./pages/Daughter";

const App = () => {
  // const jagga="durbarmarg"
  const [jagga, setJagga] = useState("Durbar marg");
  // return (
  //   <>
  //     <Son property={jagga} changeJagga={setJagga} />
  //     <Daughter sampati={jagga} changeSampatti={setJagga} />
  //   </>
  // );
  const [products] = useState([
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Smartphones", price: 1300 },
    { id: 3, name: "Headphones", price: 2000 },
  ]);
  return (
    <>
      {products.map((item) => (
        <div>item name is {item.name}</div>
      ))}
    </>
  );
};

export default App;
