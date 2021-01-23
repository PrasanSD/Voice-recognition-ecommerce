import storeItems from "./items.json";
import Store from "./components/Store";
import Cart from "./components/Cart";
import useAlanAI from "./hooks/useAlanAI";

function App() {
  useAlanAI();
  return (
    <>
      <Store items={storeItems} />
      <Cart />
    </>
  );
}

export default App;
