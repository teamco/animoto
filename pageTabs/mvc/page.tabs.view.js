/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/24/12
 * Time: 10:13 PM
 * To change this template use File | Settings | File Templates.
 */

import {EmptyView} from '../../empty/mvc/empty.view';
import {PageTabsItemElement} from '../element/page.tabs.item.element';
import {PageTabsRulesElement} from '../element/page.tabs.rules.element';
import {PageTabsPreferencesElement} from '../element/page.tabs.preferences.element';
import {PageTabsElement} from '../element/page.tabs.element';

/**
 * @class PageTabsView
 * @extends EmptyView
 * @type {PageTabsView}
 */
export class PageTabsView extends EmptyView {

  /**
   * @constructor
   * @param {string} name
   * @param scope
   */
  constructor(name, scope) {
    super(name || 'PageTabsView', scope);
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
   *  Content: PageTabsElement,
   *  Preferences: PageTabsPreferencesElement,
   *  Rules: PageTabsRulesElement
   * }}
   */
  static getElements() {
    return {
      Content: PageTabsElement,
      Preferences: PageTabsPreferencesElement,
      Rules: PageTabsRulesElement,
      Item: PageTabsItemElement
    }
  }
}