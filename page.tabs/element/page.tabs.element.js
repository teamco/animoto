/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

const EmptyElement = require('../../empty/element/empty.element.js');

/**
 * @class PageTabsElement
 * @extends EmptyElement
 * @type {module.PageTabsElement}
 */
module.exports = class PageTabsElement extends EmptyElement {

  /**
   * @constructor
   * @param {string} [name]
   * @param view
   * @param opts
   */
  constructor(name, view, opts) {
    super(name || 'PageTabsElement', view, false);

    /**
     * Define current page class name
     * @property PageTabsElement
     * @type {string}
     */
    this.current = 'active';
  }

  /**
   * @memberOf PageTabsElement
   * @param view
   * @param opts
   */
  configElement(view, opts) {
    this._config(view, opts, $('<ul class="nav nav-tabs" />')).build(opts);
    this.addCSS('page.tabs', {resource: '/widgets'});
  }

  /**
   * Render Embedded content
   * @memberOf PageTabsElement
   * @param {object} pages
   */
  renderEmbeddedContent(pages) {
    this.empty();

    /**
     * Define page tab items
     * @memberOf PageTabsView
     * @type {*}
     */
    this.view.elements.items = {};
    this.view.controller.clearParentThumbnail();

    let tabs = [], order, show;

    for (let index in pages) {
      if (pages.hasOwnProperty(index)) {

        /**
         * Get item
         * @type {Page}
         */
        const item = pages[index];

        /**
         * Show page in tabs
         * @type {PagesPreferences.defaultPrefs.showInTabs|*}
         */
        show = item.model.getConfig('preferences').showInTabs;

        if (show) {

          /**
           * Get order
           * @type {number}
           */
          order = item.model.getConfig('preferences').order;

          /**
           * Define tab
           * @type {jQuery}
           */
          const $tab = this.view.renderPageTabsItem(item);

          typeof(order) === 'number' ? tabs[order] = $tab : tabs.push($tab);
        }
      }
    }

    this.$.append(tabs);
  }

  /**
   * Set page tab as current
   * @memberOf PageTabsElement
   * @param {Page} page
   */
  setPageTabAsCurrent(page) {

    // Reset current state
    $('li', this.$).removeClass(this.current);

    /**
     * Get current page title
     * @type {string}
     */
    const title = page.model.getItemTitle();

    $('li:contains("' + title + '")', this.$).addClass(this.current);
  }
};