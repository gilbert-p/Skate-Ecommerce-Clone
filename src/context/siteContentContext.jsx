import React from "react";

export const siteContent = {
  toggleDefault: () => {},
};

const SiteContentContext = React.createContext({});

export const SiteContentProvider = SiteContentContext.Provider;

export default SiteContentContext;
