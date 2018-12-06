/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

import {EmptyElement} from '../../empty/element/empty.element';

/**
 * @class PageTabsElement
 * @extends EmptyElement
 * @type {PageTabsElement}
 */
export class PageTabsElement extends EmptyElement {

  /**
   * @constructor
   * @param {string} [name]
   * @param view
   * @param opts
   */
  constructor(name, view, opts) {
    super(name || 'PageTabsElement', view, opts);

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
         * @type {{type: string, disabled: boolean, value}|PageModel.preferences.showInTabs}
         */
        show = item.model.getConfig('preferences').showInTabs;

        if (show) {

          /**
           * Get order
           * @type {number}
           */
          order = item.model.getConfig('preferences').order;

          /**
           * @constant $tab
           * @type {PageTabsItemElement.$|jQuery}
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
}