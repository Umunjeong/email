import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Email } from "./page/email/email";
import { NotFound } from "./page/notFound/notFound";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Email />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
