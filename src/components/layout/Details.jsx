import React from "react";

const Details = ({ details }) => {
  const {
    status,
    original_language,
    original_title,
    budget,
    spoken_languages,
    tagline,
  } = details;
  const convertToCurrency = (money) => {
    let converted = money
      .toString()
      .split("")
      .reverse()
      .map((item, index) =>
        index !== 0 && index % 3 === 0 ? `${item},` : item
      )
      .reverse()
      .join("");

    return converted;
  };
  const extractLangauages = (languages) => {
    if (languages.length === 1) {
      return languages[0].name;
    }
    const langs = languages.map((lang) => {
      return lang.name;
    });
    return langs.join(",");
  };
  return (
    <div className='details-side'>
      <div className='details-list'>
        <h4>Details</h4>
        <p>
          <span className='detail-title'> Status</span>: {status}
        </p>
        <p>
          <span className='detail-title'> Original Title:</span>{" "}
          {original_title}
        </p>
        <p>
          <span className='detail-title'> Tagline</span>:{" "}
          {tagline === "" ? "-" : tagline}
        </p>
        <p>
          <span className='detail-title'> Original Language</span>:{" "}
          {original_language}
        </p>
        <p>
          <span className='detail-title'> spoken_langages</span>:{" "}
          {spoken_languages ? extractLangauages(spoken_languages) : ""}
        </p>
        <p>
          <span className='detail-title'> Budget </span>:{" "}
          {budget || budget === 0 || budget === null
            ? "-"
            : `${convertToCurrency(budget)}`}
        </p>
      </div>
    </div>
  );
};

export default Details;
