/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 5:28 PM
 * To change this template use File | Settings | File Templates.
 */

import {EmptyEventManager} from '../../empty/mvc/empty.event.manager';

/**
 * @class PageTabsEventManager
 * @type {PageTabsEventManager}
 */
export class PageTabsEventManager extends EmptyEventManager {

  /**
   * @constructor
   * @param {string} name
   * @param {PageTabs} scope
   */
  constructor(name, scope) {
    super(name || 'PageTabsEventManager', scope);

    this.updateEventList({
      switchToPage: 'switch.to.page',
      setActivePageTab: 'set.active.page.tab',
      subscribeChangePageTitleEvent: 'subscribe.change.page.title.event',
      subscribeAfterSwitchPageEvent: 'subscribe.after.switch.page.event',
      subscribeCreatePageEvent: 'subscribe.create.page.event',
      subscribeDestroyPageEvent: 'subscribe.destroy.page.event',
      subscribeOrderPagesEvent: 'subscribe.order.pages.event'
    });

    /**
     * Define on load events
     * @property WidgetContentEventManager
     * @type {[string]}
     */
    this.onLoadEvents = [this.eventList.switchToPage];
  }
}