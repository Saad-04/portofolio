import AOS from 'aos' 
import 'aos/dist/aos.css'
  AOS.init();
  AOS.init({  disable: false, 
  startEvent: 'DOMContentLoaded', 
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate', 
  useClassNames: false, 
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99, 
  offset: 120,
  delay: 100, 
  duration: 1000, 
  easing: 'ease', 
  once: false, 
  mirror: false, 
  anchorPlacement: 'top-bottom',
})