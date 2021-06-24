import template from './layout-dev.hbs';

export function render() {
    document.body.innerHTML = template(require('./assets/data.json'));
}

export function destroy() {
    document.body.innerHTML = '';
}