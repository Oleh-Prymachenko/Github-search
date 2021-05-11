import React, { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import { ReactQueryDevtools } from "react-query/devtools";
import PropTypes from "prop-types";

import { ListOfRepos } from "./components/ListOfRepos";
import { SearchBar } from "./components/SearchBar";
import { SearchHistory } from "./components/SearchHistory";
import useRepos from "./apiHooks/useReposList";
import "./App.scss";

function App() {
  const [searchParam, setSearchParam] = useState("React");
  const [history, setHistory] = useLocalStorageState("history", []);

  const { status, data } = useRepos(searchParam);

  useEffect(() => {
    console.log(data);
    console.log(status);
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
        <ListOfRepos status={status} data={data} />
      </main>
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}

App.propTypes = {
  searchParam: PropTypes.array,
};

export default App;
