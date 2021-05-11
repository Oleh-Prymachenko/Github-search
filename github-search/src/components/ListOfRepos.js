import React from "react";
import PropTypes from "prop-types";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const ListOfRepos = ({ status, data }) => {
  if (status === "fetching")
    return <p className="response-status">Fetching :(</p>;
  if (status === "loading")
    return (
      <Loader
        className="response-status"
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    );
  if (status === "error") return <p className="response-status">Error :(</p>;

  return (
    <div className="repos">
      <ul className="repos-list">
        {/* data.incomplete_results === false && */}
        {data.items.map((rep) => {
          return (
            <li key={rep.id} className="repos-card">
              <a
                href={rep.html_url}
                className="card-name"
                target="_blank"
                rel="noreferrer"
              >
                {rep.name}
              </a>
              <p className="card-language">Language: {rep.language}</p>
              <p className="card-description">Description: {rep.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ListOfRepos.propTypes = {
  data: PropTypes.object,
  status: PropTypes.string.isRequired,
};
