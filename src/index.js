import { render, destroy } from "./layout-dev.js";
import func from './assets/js/main';

render();
func();

if(module.hot) {
    module.hot.accept();
    destroy();
    render();
    func();
}