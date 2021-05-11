import React, { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";

import "./App.scss";
import { ListOfRepos } from "./components/ListOfRepos";
import { SearchBar } from "./components/SearchBar";
import { SearchHistory } from "./components/SearchHistory";

// https://api.github.com/search/repositories?q=html
function App() {
  const [searchParam, setSearchParam] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [repos, setRepos] = useState([]);
  const [history, setHistory] = useLocalStorageState("history", []);

  useEffect(() => {
    if (!searchParam) {
      return;
    }
    setIsLoading(true);
    fetch("https://api.github.com/search/repositories?q=" + searchParam)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setRepos(data.items);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(true);
        console.error(err);
      });
    setHistory([...history, searchParam]);
  }, [searchParam]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <span className="logo-image">logo</span>
          <div className="logo-title">
            <h1 className="title-name">requestum</h1>
            <span className="title-description">web development company</span>
          </div>
        </div>
        <span className="app-name">github users search app</span>
      </header>
      <div className="line"></div>
      <main className="App-main">
        <aside className="search">
          <SearchBar setSearchParam={setSearchParam} />
          <SearchHistory history={history} />
        </aside>
        <ListOfRepos error={error} repos={repos} isLoading={isLoading} />
      </main>
    </div>
  );
}

export default App;
