/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/24/12
 * Time: 10:13 PM
 * To change this template use File | Settings | File Templates.
 */

/**
 * @constant EmptyView
 * @type {module.EmptyView}
 */
const EmptyView = require('../../empty/mvc/empty.view.js');

/**
 * @constant ContentElement
 * @type {module.PageTabsElement}
 */
const ContentElement = require('../element/page.tabs.element.js');

/**
 * @constant PreferencesElement
 * @type {module.PageTabsPreferencesElement}
 */
const PreferencesElement = require('../element/page.tabs.preferences.element.js');

/**
 * @constant RulesElement
 * @type {module.PageTabsRulesElement}
 */
const RulesElement = require('../element/page.tabs.rules.element.js');

/**
 * @constant ItemElement
 * @type {module.PageTabsItemElement}
 */
const ItemElement = require('../element/page.tabs.item.element.js');

/**
 * @class PageTabsView
 * @extends EmptyView
 * @type {module.PageTabsView}
 */
module.exports = class PageTabsView extends EmptyView {

  /**
   * @constructor
   * @param {string} name
   * @param scope
   */
  constructor(name, scope) {
    super(name || 'PageTabsView', scope, false);
  }

  /**
   * Render page tab element
   * @memberOf PageTabsView
   * @param {Page} pageTab
   * @return {PageTabsItemElement.$|jQuery}
   */
  renderPageTabsItem(pageTab) {

    /**
     * Define page tab item
     * @type {PageTabsItemElement}
     * @return {jQuery}
     */
    const $pageTab = this.fetchElement('Item', {
      $container: this.get$item().$,
      pageTab: pageTab,
      style: 'page-tabs-item'
    });

    this.elements.items[$pageTab.id] = $pageTab;

    return $pageTab.$;
  }

  /**
   * @memberOf PageTabsView
   * @return {{
   *  Content: module.PageTabsElement,
   *  Preferences: module.PageTabsPreferencesElement,
   *  Rules: module.PageTabsRulesElement
   * }}
   */
  static getElements() {
    return {
      Content: ContentElement,
      Preferences: PreferencesElement,
      Rules: RulesElement,
      Item: ItemElement
    }
  }
};