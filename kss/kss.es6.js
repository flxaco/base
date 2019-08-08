/**
 * @file Imports and runs JS specifically for KSS.
 */

import objectFitImages from 'object-fit-images';
import MobileToggle from '../packages/global/src/mobile-toggle.es6';
import MainNavigation from '../packages/navigation/src/navigation.es6';
import Accordion from '../packages/accordion/src/accordion.es6';

objectFitImages();

document.querySelectorAll('.global__toggle > button').forEach((obj) => {
  const selector = obj.getAttribute('aria-controls');
  const mobileToggle = new MobileToggle(obj, selector);
});

document.querySelectorAll('.nav--dropdown').forEach((obj) => {
  const mainNavigation = new MainNavigation(obj, 'nav');
  mainNavigation.init();
});

document.querySelectorAll('.js-accordion').forEach((obj) => {
  const accordion = new Accordion(obj, 'accordion');
  accordion.init();
});
