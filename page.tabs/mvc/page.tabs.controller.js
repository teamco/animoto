/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

/**
 * @constant EmptyController
 * @type {EmptyController|*}
 */
const EmptyController = require('../../empty/mvc/empty.controller.js');

/**
 * @class PageTabsController
 * @extends EmptyController
 */
export class PageTabsController extends EmptyController {

  /**
   * @param {string} [name]
   * @param scope
   * @constructor
   */
  constructor(name, scope) {
    super(name || 'PageTabsController', scope, false);
  }

  /**
   * Subscribe to change page title
   * @memberOf PageTabsController
   */
  subscribeChangePageTitleEvent() {

    /**
     * Get workspace
     * @type {Workspace}
     */
    const ws = this.controller.getWorkspace();
    const pages = ws.model.getItems();

    for (let index in pages) {
      if (pages.hasOwnProperty(index)) {

        /**
         * Get page
         * @type {Page}
         */
        const page = pages[index];

        this.controller._subscribePageEventCallback.call(this, 'afterUpdatePreferences',
            this.eventManager.eventList.setEmbeddedContent, page);
      }
    }
  }

  /**
   * Subscribe to after page ordering event
   * @memberOf PageTabsController
   */
  subscribeOrderPagesEvent() {
    this.controller._subscribePageEventCallback.call(this, 'afterPageOrder',
        this.eventManager.eventList.setEmbeddedContent, this.controller.getWorkspace());
  }

  /**
   * Subscribe to after switch page event
   * @memberOf PageTabsController
   */
  subscribeAfterSwitchPageEvent() {
    this.controller._subscribePageEventCallback.call(this, 'afterSwitchToPage',
        this.eventManager.eventList.setActivePageTab, this.controller.getWorkspace());
  }

  /**
   * Subscribe to create page event
   * @memberOf PageTabsController
   */
  subscribeCreatePageEvent() {
    this.controller._subscribePageEventCallback.call(this, 'afterCreateItem',
        this.eventManager.eventList.setEmbeddedContent, this.controller.getWorkspace());
  }

  /**
   * Subscribe to destroy page event
   * @memberOf PageTabsController
   */
  subscribeDestroyPageEvent() {
    this.controller._subscribePageEventCallback.call(this, 'afterDestroyItem',
        this.eventManager.eventList.setEmbeddedContent, this.controller.getWorkspace());

    this.controller._subscribePageEventCallback.call(this, 'afterDestroyItems',
        this.eventManager.eventList.setEmbeddedContent, this.controller.getWorkspace());
  }

  /**
   * Subscribe to create page event
   * @memberOf PageTabsController
   * @private
   * @param {string} eventName
   * @param {string} callbackEvent
   * @param {Workspace|Page} scope
   */
  _subscribePageEventCallback(eventName, callbackEvent, scope) {

    /**
     * Get workspace
     * @type {WorkspaceEventManager|{subscribe, eventList}}
     */
    const eventManager = scope.eventManager;

    /**
     * @constant pageTabs
     * @type {PageTabsController|{observer}}
     */
    const pageTabs = this;

    eventManager.subscribe({
      event: {name: eventManager.eventList[eventName]},
      callback() {
        pageTabs.observer.publish(callbackEvent);
      }
    }, false);
  }

  /**
   * Set embedded content
   * @memberOf PageTabsController
   */
  setEmbeddedContent() {

    /**
     * Get workspace
     * @type {Workspace}
     */
    const ws = this.controller.getWorkspace();

    this.view.get$item().renderEmbeddedContent(ws.model.getItems());
    this.observer.publish(this.eventManager.eventList.setActivePageTab);
  }

  /**
   * Set active tab
   * @memberOf PageTabsController
   */
  setActivePageTab() {

    /**
     * @constant page
     * @type {Page|{}}
     */
    const page = this.controller.getPage();
    this.utils.waitFor(
        () => this.view.get$item(),
        () => this.view.get$item().setPageTabAsCurrent(page),
        () => this.logger.warn('Timeout. Unable to embed content')
    );
  }

  /**
   * Switch to page
   * @memberOf PageTabsController
   * @param {PageTabsItemElement} $page
   * @param {Event} e
   */
  switchToPage($page, e) {
    if ($page.pageUrl) {
      this.logger.debug('Open url', arguments);
      this.observer.publish(this.eventManager.eventList.openUrlOnEvent, [
        $page.pageUrl, true,
        $page.pageTab.model.getConfig('preferences').pageOpenUrlInDialog]);
    } else {

      /**
       * Get workspace
       * @type {Workspace}
       */
      const workspace = this.controller.getWorkspace();

      workspace.observer.publish(workspace.eventManager.eventList.switchToPage, [
        $page.pageTab,
        this.model.getPrefs('pagetabsSwipe')]);

      // Reset event handler
      this.openUrlEventHandler = 0;
    }
  }
};