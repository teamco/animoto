/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

defineP([
  'plugins/plugin.element'
], function definePageTabsElement(PluginElement) {

  /**
   * Define PageTabs Element
   * @param view
   * @param opts
   * @returns {PageTabsElement}
   * @constructor
   * @class PageTabsElement
   * @extends PluginElement
   */
  var PageTabsElement = function PageTabsElement(view, opts) {

    this._config(view, opts, $('<ul class="nav nav-tabs" />')).build({
      $container: opts.$container,
      destroy: true
    });

    /**
     * Define current page class name
     * @type {string}
     */
    this.current = 'active';

    this.addCSS('page.tabs', {resource: '/widgets'});

    return this;
  };

  return PageTabsElement.extend('PageTabsElement', {

    /**
     * Render Embedded content
     * @memberOf PageTabsElement
     * @param {object} pages
     */
    renderEmbeddedContent: function renderEmbeddedContent(pages) {

      this.empty();

      /**
       * Define page tab items
       * @memberOf PageTabsView
       * @type {object}
       */
      this.view.elements.items = {};

      this.view.controller.clearParentThumbnail();

      var item, index,
          tabs = [], $tab,
          order, show;

      for (index in pages) {

        if (pages.hasOwnProperty(index)) {

          /**
           * Get item
           * @type {Page}
           */
          item = pages[index];

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
            $tab = this.view.renderPageTabsItem(item);

            typeof(order) === 'number' ?
                tabs[order] = $tab :
                tabs.push($tab);
          }
        }
      }

      this.$.append(tabs);
    },

    /**
     * Set page tab as current
     * @memberOf PageTabsElement
     * @param {Page} page
     */
    setPageTabAsCurrent: function setPageTabAsCurrent(page) {

      // Reset current state
      $('li', this.$).removeClass(this.current);

      /**
       * Get current page title
       * @type {string}
       */
      var title = page.model.getItemTitle();

      $('li:contains("' + title + '")', this.$).
          addClass(this.current);
    }

  }, PluginElement.prototype);

});