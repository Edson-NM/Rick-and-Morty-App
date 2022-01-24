import React from "react";

//styles
import "./Suggestions.styles.css";

const Suggestions = ({ suggestions, handleSuggest, handleFocus }) => {
  return (
    <div onClick={handleFocus}>
      {suggestions &&
        suggestions.map((suggestion, i) => (
          <div
            className="suggestions"
            key={i}
            onClick={() => handleSuggest(suggestion.name, suggestion.id)}
          >
            <div>
              <p>{suggestion.name}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Suggestions;
