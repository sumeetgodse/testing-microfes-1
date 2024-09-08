import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import AppText1 from "./components/AppText1";

const App = () => <AppText1 />;
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
