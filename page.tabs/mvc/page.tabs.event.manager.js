/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 5:28 PM
 * To change this template use File | Settings | File Templates.
 */

defineP([
  'plugins/widgets/widget.content.event.manager'
], function definePageTabsEventManager(WidgetContentEventManager) {

  /**
   * Define PageTabs event manager
   * @class PageTabsEventManager
   * @constructor
   * @extends BaseEvent
   * @extends WidgetContentEventManager
   */
  var PageTabsEventManager = function PageTabsEventManager() {

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
     * @memberOf WidgetContentEventManager
     * @type {[string]}
     */
    this.onLoadEvents = [
      this.eventList.switchToPage
    ];
  };

  return PageTabsEventManager.extend('PageTabsEventManager', {},
      WidgetContentEventManager.prototype);
});