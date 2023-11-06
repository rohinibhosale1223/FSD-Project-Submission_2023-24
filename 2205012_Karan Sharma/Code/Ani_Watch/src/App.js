import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "./Comp/HomePage";
import ItemPage from "./Comp/Components/ItemPage";
import ItemPage2 from "./Comp/Components/ItemPage2";
import ItemPage3 from "./Comp/Components/ItemPage3";
function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path= '/' element = {<HomePage/>}/>
        <Route path='/anime/:id' element={<ItemPage/>}/>
        <Route path='/aniwatch/:id' element={<ItemPage2/>}/>
        <Route path='/aniwatch/recomend/:id' element={<ItemPage3/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
