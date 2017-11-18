/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/24/12
 * Time: 10:13 PM
 * To change this template use File | Settings | File Templates.
 */

defineP([
  'modules/View',
  'element/header.element',
  'element/footer.element',
  'plugins/widgets/page.tabs/element/page.tabs.element',
  'plugins/widgets/page.tabs/element/page.tabs.preferences.element',
  'plugins/widgets/page.tabs/element/page.tabs.rules.element',
  'plugins/widgets/page.tabs/element/page.tabs.item.element'
], function definePageTabsView(BaseView, Header, Footer, PageTabsElement,
    PageTabsPreferencesElement, PageTabsRulesElement, PageTabsItemElement) {

  /**
   * Define view
   * @class PageTabsView
   * @extends BaseView
   * @constructor
   */
  var PageTabsView = function PageTabsView() {
  };

  return PageTabsView.extend('PageTabsView', {

    /**
     * Render page.tabs element
     * @memberOf PageTabsView
     */
    renderPageTabs: function renderPageTabs() {

      this.header(Header, this.get$container());

      /**
       * Define $page.tabs
       * @type {PageTabsElement}
       */
      this.elements.$pagetabs = new PageTabsElement(this, {
        $container: this.get$container().$,
        style: 'page-tabs-container'
      });

      this.footer(Footer, this.get$container());

      this.scope.observer.publish(
          this.scope.eventmanager.eventList.analyzeEmbeddedContent
      );
    },

    /**
     * Render page tab element
     * @memberOf PageTabsView
     * @param {Page} pageTab
     * @return {PageTabsItemElement}
     */
    renderPageTabsItem: function renderPageTabsItem(pageTab) {

      /**
       * Define page tab item
       * @type {PageTabsItemElement}
       * @return {jQuery}
       */
      var $pageTab = new PageTabsItemElement(this, {
        $container: this.get$item().$,
        pageTab: pageTab,
        style: 'page-tabs-item'
      });

      this.elements.items[$pageTab.id] = $pageTab;

      return $pageTab.$;
    },

    /**
     * Render Prefs
     * @memberOf PageTabsView
     * @returns {PageTabsPreferencesElement}
     */
    renderPreferences: function renderPreferences() {

      /**
       * Define PageTabs Preferences Element
       * @type {PageTabsPreferencesElement}
       */
      this.elements.$preferences = new PageTabsPreferencesElement(this, {
        data: this.controller.getPreferences()
      });

      return this.get$preferences();
    },

    /**
     * Render Rules
     * @memberOf PageTabsView
     * @param widgetRules
     * @param contentRules
     * @returns {PageTabsRulesElement}
     */
    renderRules: function renderRules(widgetRules, contentRules) {

      /**
       * Define PageTabs Rules Element
       * @type {PageTabsRulesElement}
       */
      this.elements.$rules = new PageTabsRulesElement(this, {
        data: this.controller.getRules(),
        rules: {
          widget: widgetRules,
          content: contentRules
        }
      });

      return this.get$rules();
    },

    /**
     * Render page.tabs
     * @memberOf PageTabsView
     */
    render: function render() {

      this.scope.observer.publish(
          this.scope.eventmanager.eventList.successRendered,
          this.renderPageTabs.bind(this)
      );
    }

  }, BaseView.prototype)
});