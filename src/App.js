import { createContext, useState } from "react";
import Header from "./components/header";
import Images from "./components/Images";
import SearchField from "./components/SearchField";
import useAxios from "./hooks/useAxios";

//create context
export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState("");
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=cars&client_id=${process.env.REACT_APP_ACCESS_KEY}`
  );

  //console.log(response);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };

  return (
    <ImageContext.Provider value={value}>
      <Header>
        <SearchField></SearchField>
      </Header>
      <Images />
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
    </ImageContext.Provider>
  );
}

export default App;
