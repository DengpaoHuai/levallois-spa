import Header from "./components/Header";
import HomeScreen from "./pages/HomeScreen";
import router from "./router/router";

export function boot() {
  document.body.prepend(Header());
  router();
}

document.addEventListener("click", (event) => {
  if (event.target.matches("[data-link]")) {
    event.preventDefault();
    history.pushState(null, "", event.target.href);
    router();
  }
});
