/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:02 AM
 */

import './page.tabs.scss';
import './images/page.tabs.png';

import {Empty} from '../empty/empty';
import {MVC} from '../../../modules/MVC';
import {PageTabsController} from './mvc/page.tabs.controller';
import {PageTabsModel} from './mvc/page.tabs.model';
import {PageTabsView} from './mvc/page.tabs.view';
import {PageTabsEventManager} from './mvc/page.tabs.event.manager';
import {PageTabsPermission} from './mvc/page.tabs.permission';

/**
 * @class PageTabs
 * @type {PageTabs}
 * @extends Empty
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
    return {
      Controller: PageTabsController,
      Model: PageTabsModel,
      View: PageTabsView,
      EventManager: PageTabsEventManager,
      Permission: PageTabsPermission
    };
  }
}