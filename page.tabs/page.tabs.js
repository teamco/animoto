/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:02 AM
 */

/**
 * @constant Empty
 * @type {Empty|*}
 */
const Empty = require('../empty/empty.js');

/**
 * @class PageTabs
 * @type {PageTabs}
 */
export class PageTabs extends Empty {

  /**
   * @param name
   * @param containment
   * @param [opts]
   * @constructor
   */
  constructor(name, containment, opts) {
    super(name || 'PageTabs', containment, opts);
  };

  /**
   * @memberOf PageTabs
   * @param opts
   */
  initContent(opts) {

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
        style: 'red',
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

    /**
     * @constant components
     * @type {{Controller, Model, View, EventManager, Permission}}
     */
    const components = PageTabs.fetchComponents();

    /**
     * @constant MVC
     * @type {MVC}
     */
    const MVC = require('../../../core/lib/modules/MVC.js');

    /**
     * @type {MVC}
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
     * @type {PageTabsController}
     */
    const PageTabsController = require('./mvc/page.tabs.controller.js');

    /**
     * @constant PageTabsModel
     * @type {PageTabsModel}
     */
    const PageTabsModel = require('./mvc/page.tabs.model.js');

    /**
     * @constant PageTabsView
     * @type {PageTabsView}
     */
    const PageTabsView = require('./mvc/page.tabs.view.js');

    /**
     * @constant PageTabsEventManager
     * @type {PageTabsEventManager}
     */
    const PageTabsEventManager = require('./mvc/page.tabs.event.manager.js');

    /**
     * @constant PageTabsPermission
     * @type {PageTabsPermission}
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