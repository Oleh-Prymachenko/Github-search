import React from "react";
import PropTypes from "prop-types";

import "./search-history.scss";

export const SearchHistory = ({ history }) => {
  return (
    <div className="history">
      Search history:
      <ul className="history-list">
        {history.length !== 0 ? (
          history.slice(history.length - 5, history.length).map((el, i) => (
            <li className="history-item" key={i}>
              {el}
            </li>
          ))
        ) : (
          <div>history empty</div>
        )}
      </ul>
    </div>
  );
};

SearchHistory.propTypes = {
  history: PropTypes.arrayOf(PropTypes.string),
};
