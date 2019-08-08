/**
 * Header
 * @file Handle accessible toggle of menus on small screens.
 */

class MobileToggle {
  constructor(toggle, selector) {
    this.toggle = toggle;
    this.toggleOpenClass = 'global__toggle--open';
    this.targetId = selector;
    this.targetOpenClass = `${selector}--open`;
    this.menuIconClass = 'icon--menu';
    this.closeIconClass = 'icon--close';

    this.init();
  }

  init() {
    this.toggle.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick() {
    const target = document.querySelectorAll(`.${this.targetId}`);
    const ariaExpanded = this.toggle.getAttribute('aria-expanded') === 'true';

    this.toggle.classList.toggle(this.toggleOpenClass);
    this.toggle.classList.toggle(this.menuIconClass);
    this.toggle.classList.toggle(this.closeIconClass);
    this.toggle.setAttribute('aria-expanded', !ariaExpanded);

    target.forEach((el) => {
      el.classList.toggle(this.targetOpenClass);
      el.setAttribute('aria-expanded', !ariaExpanded);
    });
  }
}

export default MobileToggle;
