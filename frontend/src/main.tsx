import i18next from "i18next";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { Provider } from "react-redux";

import App from "./App.tsx";
import ru from "./locales/ru.ts";
import store from "./store/index.ts";

const i18nextInstance = i18next.createInstance();
await i18nextInstance.use(initReactI18next).init({
  debug: false,
  fallbackLng: "ru",
  resources: { ru },
  interpolation: {
    escapeValue: false,
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18nextInstance}>
        <App />
      </I18nextProvider>
    </Provider>
  </StrictMode>,
);
