import { init } from "./layout.mjs";
import { initialiseSearch } from "./service.mjs";

window.addEventListener("DOMContentLoaded", () => {
    init();
    initialiseSearch();
});