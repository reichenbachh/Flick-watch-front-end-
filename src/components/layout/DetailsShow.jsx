import React from "react";

const DetailsShow = ({ details }) => {
  const {
    created_by,
    status,
    languages,
    in_production,
    type,
    original_name,
    original_language,
    number_of_episodes,
    number_of_seasons,
    last_episode_to_air,
    next_episode_to_air,
    networks,
  } = details;
  const extractLangauages = (languages) => {
    if (languages.length === 1) {
      return languages[0];
    }
    const langs = languages.map((lang) => {
      return lang;
    });
    return langs.join(",");
  };
  const extractCreated = (created) => {
    if (created.length === 1) {
      return created[0].name;
    }
    const langs = languages.map((lang) => {
      return lang.name;
    });
    return langs.join(",");
  };
  const extractNetworks = (networks) => {
    if (networks.length === 1) {
      return networks[0].name;
    }
    const net = networks.map((nets) => {
      return nets.name;
    });
    return net.join(",");
  };
  return (
    <div className='details-side'>
      <div className='details-list'>
        <h4>Details</h4>
        <p>
          <span className='detail-title'> Status</span>: {status}
        </p>
        <p>
          <span className='detail-title'> In production</span>:{" "}
          {in_production === true ? (
            <i className='fas fa-check'></i>
          ) : (
            <i className='fas fa-times'></i>
          )}
        </p>
        <p>
          <span className='detail-title'> Original Title:</span> {original_name}
        </p>
        <p>
          <span className='detail-title'> Type</span>: {type}
        </p>
        <p>
          <span className='detail-title'> Original Language</span>:{" "}
          {original_language}
        </p>
        <p>
          <span className='detail-title'> spoken_langages</span>:{" "}
          {extractLangauages(languages)}
        </p>
        <p>
          <span className='detail-title'> Created By </span>:
          {extractCreated(created_by)}
        </p>
        <p>
          <span className='detail-title'> Number of episodes </span>:
          {number_of_episodes}
        </p>
        <p>
          <span className='detail-title'> Number of seasons </span>:
          {number_of_seasons}
        </p>
        <p>
          <span className='detail-title'> Networks</span>:
          {extractNetworks(networks)}
        </p>
      </div>
    </div>
  );
};

export default DetailsShow;
