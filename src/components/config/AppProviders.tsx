import React from "react";

/*
  AppProviders is a wrapper component that provides the app with the necessary context providers.
*/

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
