import './App.css';
import { useState } from "react";

import HeaderComponent from './components/header.component/header.component';
import ItemsComponent from './components/items.component/items.component';

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <HeaderComponent onSearch={setSearchValue} />
      <ItemsComponent searchValue={searchValue} />
    </>
  );
}

export default App;
