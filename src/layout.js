import template from './layout.hbs';

export function render() {
    document.body.innerHTML = template(require('./assets/data.json'));
}

export function destroy() {
    document.body.innerHTML = '';
}