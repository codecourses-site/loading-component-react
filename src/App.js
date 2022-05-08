import { useState } from "react";
import Loading from "./componnets/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const toggleLoading = () => {
    if (!isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
    setIsLoading((prevStatus) => !prevStatus);
  };

  return (
    <div className="home">
      <button className="home__toggle-loading" onClick={toggleLoading}>
        Toggle Loading
      </button>
      {isLoading && <Loading />}
    </div>
  );
}

export default App;
