import React, { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import { ReactQueryDevtools } from "react-query/devtools";

import { ReposList } from "./components/repos-list/ReposList";
import { SearchBar } from "./components/search-bar/SearchBar";
import { SearchHistory } from "./components/search-history/SearchHistory";

import "./App.scss";

function App() {
  const [searchParam, setSearchParam] = useState("React");
  const [history, setHistory] = useLocalStorageState("history", []);

  useEffect(() => {
    setHistory([...history, searchParam]);
    // eslint-disable-next-line
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
        <ReposList searchParam={searchParam} />
      </main>
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}

export default App;
