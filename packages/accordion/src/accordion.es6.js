/**
 * Accordion
 * @file Toggle and disclosure handler.
 */

class Accordion {
  constructor(accordion, accordionClass = 'accordion') {
    this.accordion = accordion;
    this.accordionClass = accordionClass;
    this.toggleClass = `${this.accordionClass}__toggle`;
    this.contentClass = `${this.accordionClass}__content`;
    this.openModifier = `${this.accordionClass}--open`;

    this.init = this.init.bind(this);
    this.handleToggle = this.handleToggle.bind(this);

    this.init();
  }

  init() {
    const toggle = this.accordion.querySelectorAll(`.${this.toggleClass}`);
    toggle.forEach((item) => {
      item.addEventListener('click', this.handleToggle);
    });
  }

  handleToggle(event) {
    const accordion = event.currentTarget.closest('.accordion');

    if (accordion.classList.contains(this.openModifier)) {
      this.close(accordion);
    }
    else {
      this.open(accordion);
    }
  }

  open(accordion) {
    accordion.classList.add(this.openModifier);
    accordion.querySelector(`.${this.toggleClass}`).setAttribute('aria-expanded', 'true');
  }

  close(accordion) {
    accordion.classList.remove(this.openModifier);
    accordion.querySelector(`.${this.toggleClass}`).setAttribute('aria-expanded', 'false');
  }
}

export default Accordion;
