import React from "react";

export const mobileMenu = {
  value: false,
};

const MobileMenuContext = React.createContext({});

export const MobileMenuProvider = MobileMenuContext.Provider;

export default MobileMenuContext;
