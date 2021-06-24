import { render, destroy } from "./components/layout";
import func from './assets/js/main';

const options = {
    name: 'world'
};

render(options);
func();

if(module.hot) {
    module.hot.accept();
    destroy();
    render(options);
    func();
}