/**
 * Main Navigation
 * @file Drop down navigation handler.
 */

class MainNavigation {
  constructor(nav, navClass) {
    this.nav = nav;
    this.navClass = navClass;
    this.openModifier = `${this.navClass}--open`;
    this.levelOpenModifier = `${this.navClass}__level--open`;
    this.level1Class = `${this.navClass}__level-1`;
    this.level2Class = `${this.navClass}__level-2`;
    this.reverseClass = `${this.navClass}--reverse`;
    this.level3Class = `${this.navClass}__level-3`;
    this.subNavClass = `${this.navClass}__has-subnav`;
    this.subToggleClass = `${this.navClass}__sub-toggle`;
    this.activeClass = 'menu--active';
    this.subNavWidth = 271;
    this.fired = 0;

    this.init = this.init.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.setOrientation = this.setOrientation.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.setHeight = this.setHeight.bind(this);

    this.init();
  }

  init() {
    const subNavItems = this.nav.querySelectorAll(`.${this.subNavClass}`);
    const subNavLinks = this.nav.querySelectorAll(`.${this.subNavClass} > a`);
    const subNavL2Items = this.nav.querySelectorAll(`.${this.level2Class} .${this.subNavClass}`);
    const subNavL2Links = this.nav.querySelectorAll(`.${this.level2Class} .${this.subNavClass} > a`);
    const navLinks = this.nav.querySelectorAll('li > a');
    const subNavToggles = this.nav.querySelectorAll(`.${this.subToggleClass}`);
    const activeMenu = this.nav.querySelectorAll(`.${this.activeClass}`);

    subNavItems.forEach((item) => {
      this.setOrientation(item);
      item.addEventListener('mouseenter', this.handleToggle);
      item.addEventListener('mouseleave', this.handleToggle);
    });

    subNavLinks.forEach((item) => {
      item.addEventListener('touchend', this.handleToggle);
    });

    subNavL2Items.forEach((item) => {
      this.setOrientation(item);
      item.addEventListener('mouseenter', this.handleToggle);
      item.addEventListener('mouseleave', this.handleToggle);
    });

    subNavL2Links.forEach((item) => {
      item.addEventListener('touchend', this.handleToggle);
    });

    navLinks.forEach((item) => {
      item.addEventListener('keydown', this.handleKeyPress);
    });

    subNavToggles.forEach((item) => {
      item.addEventListener('click', this.handleToggle);
    });

    activeMenu.forEach((item) => {
      const submenu = item.querySelector('ul');
      if (submenu) {
        this.openLevel(submenu, item);
      }
    });
  }

  handleToggle(event) {
    if (
      (event.type === 'mouseenter' || event.type === 'mouseleave')
      && window.matchMedia('(max-width: 720px)').matches
    ) {
      return;
    }
    let menuItem = event.target;
    if (menuItem.tagName !== 'LI') {
      menuItem = menuItem.parentElement;
    }
    const subNav = menuItem.querySelector('ul');

    if (subNav.classList.contains(this.openModifier)) {
      this.closeLevel(subNav, menuItem);
    }
    else {
      if (event.type === 'touchend') {
        event.preventDefault();
      }
      this.openLevel(subNav, menuItem);
    }
  }

  openLevel(subNav, menuItem) {
    subNav.classList.add(this.openModifier);
    menuItem.classList.add(this.levelOpenModifier);
    menuItem.querySelector('a').setAttribute('aria-expanded', 'true');
    this.setHeight(subNav, true);
    this.setWidth(subNav, true);
  }

  closeLevel(subNav, menuItem) {
    subNav.classList.remove(this.openModifier);
    this.setOrientation(menuItem);
    menuItem.classList.remove(this.levelOpenModifier);
    menuItem.querySelector('a').setAttribute('aria-expanded', 'false');
    this.setHeight(subNav);
    this.setWidth(subNav);
  }

  setHeight(subNav, set) {
    if (subNav.classList.contains(this.level3Class) && !window.matchMedia('(max-width: 720px)').matches) {
      const parent = subNav.parentElement.closest('ul');

      if (set) {
        const subNavHeight = subNav.getBoundingClientRect().height;
        parent.style.height = `${subNavHeight}px`;
      }
      else {
        parent.style.height = 'auto';
      }
    }
  }

  setWidth(subNav, set) {
    if (
      subNav.classList.contains(this.level3Class)
      && !window.matchMedia('(max-width: 720px)').matches
    ) {
      const parent = subNav.parentElement.closest('ul');

      if (set) {
        parent.style.width = `${this.subNavWidth * 2}px`;
      }
      else {
        parent.style.width = `${this.subNavWidth}px`;
      }
    }
  }

  setOrientation(item) {
    const subNav = item.querySelector(`.${this.level2Class}`);
    const { reverseClass } = this;
    let subNavRight = 0;
    if (subNav && subNav.getBoundingClientRect()) {
      subNavRight = subNav.getBoundingClientRect().right;
    }

    if (window.innerWidth < subNavRight) {
      subNav.classList.add(reverseClass);
    }
  }

  handleKeyPress(event) {
    const parent = event.currentTarget.parentNode;
    const nav = parent.parentNode;

    if (parent === nav.firstElementChild) {
      // If we shift tab past the first child, toggle this level.
      if (event.key === 'Tab' && event.shiftKey === true) {
        this.closeLevel(nav, nav.parentNode);
      }
    }
    else if (parent === nav.lastElementChild) {
      // If we tab past the last child, toggle this level.
      if (event.key === 'Tab' && event.shiftKey === false) {
        this.closeLevel(nav, nav.parentNode);
      }
    }

    // Toggle nav on Space (32) or any Arrow key (37-40).
    switch (event.keyCode) {
      case 32:
      case 37:
      case 38:
      case 39:
      case 40:
        event.preventDefault();
        this.handleToggle(event);
        break;
      default:
        break;
    }
  }
}

export default MainNavigation;
