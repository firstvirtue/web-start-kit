import gsap from 'gsap';
import Pod1 from './pod1';

export default function() {
    gsap.to('#canv', { y: 120, x: 10 });

    const pod1 = new Pod1();
};