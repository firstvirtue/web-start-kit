import gsap from "gsap";

export default class Pod1 {
    constructor() {
        this.init();
    }

    init() {
        gsap.to('ul > li:first-child', { x: 20 });
    }
}