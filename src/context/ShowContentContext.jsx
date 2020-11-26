import React from "react";

export const showContent = {
  toggleContent: () => {
    alert("toggling content");
  },
};

const ShowContentContext = React.createContext({});

export const ShowContentProvider = ShowContentContext.Provider;

export default ShowContentContext;
