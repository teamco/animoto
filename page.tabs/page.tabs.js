/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:02 AM
 */

/**
 * @constant Empty
 * @type {module.Empty|*}
 */
const Empty = require('../empty/empty.js');

/**
 * @class PageTabs
 * @type {module.PageTabs}
 */
module.exports = class PageTabs extends Empty {

  /**
   * @param containment
   * @param [opts]
   * @constructor
   */
  constructor(containment, opts) {
    super('PageTabs', containment, opts);

    /**
     * Define defaults
     * @type {{
     *  plugin: boolean,
     *  html: {
     *    style: string,
     *    header: boolean,
     *    footer: boolean,
     *    padding: {top: number, right: number, bottom: number, left: number}
     *  }
     * }}
     */
    const DEFAULTS = {
      plugin: true,
      html: {
        style: 'default',
        header: false,
        footer: false,
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      }
    };

    this.initContent(DEFAULTS, opts);
  };

  /**
   * @memberOf PageTabs
   * @param DEFAULTS
   * @param opts
   */
  initContent(DEFAULTS, opts) {

    /**
     * @constant components
     * @type {{Controller, Model, View, EventManager, Permission}}
     */
    const components = PageTabs.fetchComponents();

    /**
     * @type {module.MVC}
     */
    new MVC({
      scope: this,
      config: [
        {uuid: this.containment.model.getContentUUID()},
        DEFAULTS
      ],
      components: [
        components.Controller,
        components.Model,
        components.View,
        components.EventManager,
        components.Permission
      ],
      render: true
    });

    this.observer.publish(this.eventManager.eventList.initWidget, opts);
    this.observer.batchPublish(
        this.eventManager.eventList.subscribeOrderPagesEvent,
        this.eventManager.eventList.subscribeAfterSwitchPageEvent,
        this.eventManager.eventList.subscribeCreatePageEvent,
        this.eventManager.eventList.subscribeDestroyPageEvent,
        this.eventManager.eventList.subscribeChangePageTitleEvent
    );
  }

  /**
   * @method init
   * @memberOf PageTabs
   * @static
   * @returns {*}
   */
  static fetchComponents() {

    /**
     * @constant PageTabsController
     * @type {module.PageTabsController}
     */
    const PageTabsController = require('./mvc/page.tabs.controller.js');

    /**
     * @constant PageTabsModel
     * @type {module.PageTabsModel}
     */
    const PageTabsModel = require('./mvc/page.tabs.controller.js');

    /**
     * @constant PageTabsView
     * @type {module.PageTabsView}
     */
    const PageTabsView = require('./mvc/page.tabs.view.js');

    /**
     * @constant PageTabsEventManager
     * @type {module.PageTabsEventManager}
     */
    const PageTabsEventManager = require('./mvc/page.tabs.event.manager.js');

    /**
     * @constant PageTabsPermission
     * @type {module.PageTabsPermission}
     */
    const PageTabsPermission = require('./mvc/page.tabs.permission.js');

    return {
      Controller: PageTabsController,
      Model: PageTabsModel,
      View: PageTabsView,
      EventManager: PageTabsEventManager,
      Permission: PageTabsPermission
    };
  }
};