/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/27/14
 * Time: 11:46 PM
 */

import {PluginController} from '../plugin.controller';
import {WidgetContentControllerRules} from '../rules/widget/widget.content.controller.rules';
import {WidgetSubscribe} from '../rules/widget/widget.subscribe';
import {BasePreferences} from '../../modules/Preferences';
import {WidgetContentPreferencesController} from '../preferences/widget.content.preferences.controller';
import {aggregation} from '../../lib/extends/aggregation';

/**
 * @class WidgetContentController
 * @extends {PluginController, BasePreferences, WidgetContentPreferencesController, WidgetContentControllerRules}
 */
export class WidgetContentController extends aggregation(PluginController, BasePreferences,
    WidgetContentPreferencesController, WidgetContentControllerRules) {

  /**
   * @param {string} [name]
   * @param scope
   * @constructor
   */
  constructor(name, scope) {
    super(name || 'WidgetContentController', scope, false);

    /**
     * @property WidgetContentController
     * @type {WidgetSubscribe}
     */
    this.simulator = new WidgetSubscribe();
  }

  /**
   * Init widget
   * @memberOf WidgetContentController
   * @param {*} opts
   */
  initWidget(opts) {

    /**
     * Define observer
     * @type {Observer|{batchPublish, publish}}
     */
    const observer = this.observer;

    /**
     * Init open Url Event Handler
     * @property WidgetContentController
     * @type {number}
     */
    this.openUrlEventHandler = 0;

    /**
     * Define event list
     * @type {Object}
     */
    const eventList = this.eventManager.eventList;

    observer.batchPublish(
        eventList.loadPreferences,
        eventList.loadRules,
        eventList.successCreated,
        eventList.defineContainer
    );

    this.view.render();

    observer.publish(eventList.transferEvents, (opts || {}).events || {});
    observer.publish(eventList.transferRules, (opts || {}).rules || {});
    observer.batchPublish(eventList.executeOnWidgetContentOnLoadEvent);

    // Allow to store prefs via parent controller
    this.permission.setCapability('store', true);
  }

  /**
   * Transfer containment events
   * @memberOf WidgetContentController
   * @param events
   */
  transferEvents(events) {
    for (let event in events) {
      if (events.hasOwnProperty(event)) {

        /**
         * Define event
         * @type {*}
         */
        const params = events[event];
        this.logger.debug('Transfer event', event, params);
        this.observer.publish(this.eventManager.eventList[event], params);
      }
    }
  }

  /**
   * Execute on widget event
   * @memberOf WidgetContentController
   * @param {string} eventName
   */
  executeOnWidgetEvent(eventName) {

    /**
     * Define widget
     * @type {Widget}
     */
    const widget = this.controller.getContainment();

    if (!widget.eventManager.eventList.hasOwnProperty(eventName)) {
      this.logger.warn('Undefined event', eventName);
      return false;
    }

    widget.observer.publish(widget.eventManager.eventList[eventName]);
  }

  /**
   * Execute widget content events onload
   * @memberOf WidgetContentController
   */
  executeOnWidgetContentOnLoadEvent() {
    this.eventManager.executeEventsOnLoad();
  }

  /**
   * Alternative save in consumption mode
   * @memberOf WidgetContentController
   * @param {string} key
   * @param value
   * @param {boolean} [save]
   */
  alternativeSavePreferences(key, value, save) {

    // Define save
    save = typeof (save) === undefined ? true : save;

    // Transfer prefs to widget
    this.observer.publish(this.eventManager.eventList.transferContentPreferences, [key, value]);

    if (save) {
      this.controller.store();
    }
  }

  /**
   * Alternative save all prefs in consumption mode
   * @memberOf WidgetContentController
   */
  alternativeSaveAllPreferences() {
    const prefs = this.model.preferences;

    for (let index in prefs) {
      if (prefs.hasOwnProperty(index)) {
        this.observer.publish(this.eventManager.eventList.alternativeSavePreferences,
            [index, prefs[index].value, false]);
      }
    }
    this.controller.store();
  }

  /**
   * Define referrer
   * @memberOf WidgetContentController
   * @param referrer
   */
  defineReferrer(referrer) {

    /**
     * Define referrer
     * @property WidgetContent
     */
    this.referrer = referrer;
  }

  /**
   * Define container
   * @memberOf WidgetContentController
   */
  defineContainer() {

    /**
     * Define widget
     * @type {Widget}
     */
    const widget = this.controller.getContainment();

    /**
     * Define $container
     * @type {WidgetContentElement}
     */
    this.view.elements.$container = widget.view.elements.$content;
  }

  /**
   * Clear default thumbnail
   * @memberOf WidgetContentController
   */
  clearParentThumbnail() {

    /**
     * Define widget
     * @type {Widget}
     */
    const widget = this.getContainment();

    widget.observer.publish(widget.eventManager.eventList.clearThumbnail);
  }

  /**
   * Get DOM
   * @memberOf WidgetContentController
   * @param type
   * @returns {*}
   */
  getDOMPreferences(type) {

    /**
     * Define widget
     * @type {Widget}
     */
    const widget = this.scope.controller.getContainment();
    return (widget.model.getDOM() || {})[type];
  }

  /**
   * Check if widget is Metamorphic
   * @memberOf WidgetContentController
   * @returns {boolean}
   */
  isMetamorphic() {

    /**
     * Get view
     * @type {BaseView}
     */
    const view = this.getView();
    const $container = view.get$container(),
        $element = view.get$item();

    return $container.isMetamorphicElement() && !$element.isMetamorphicElement();
  }

  /**
   * Fetch gallery widgets
   * @param {{metamorphicType}} prefs
   * @memberOf WidgetContentController
   * @returns {*}
   */
  fetchGalleryWidgets(prefs) {

    /**
     * Get scope
     * @type {Metamorphic|{name, referrer}}
     */
    const scope = this.scope;

    try {

      /**
       * Get page data
       * @type {PageData}
       */
      const pageData = scope.referrer;

      /**
       * Get gallery
       * @type {Gallery}
       */
      const gallery = pageData.controller.getContainment().controller.getGallery();
      const widgetsList = gallery.model.getDataProvider();

      // Get widgets list
      prefs.metamorphicType.list = $.map(widgetsList, widget => {
        if (widget.resource !== 'metamorphic' && !widget.is_external) {
          return {
            resource: widget.resource,
            name: widget.name,
            description: widget.description,
            tooltip: true
          };
        }
      });

    } catch (e) {
      scope.logger.warn('Unable to fetch gallery widgets', e);
    }
    return prefs;
  }

  /**
   * Fetch metamorphic widget prefs
   * @memberOf WidgetContentController
   * @param {string} resource
   */
  fetchMetamorphicPreferences(resource) {

    /**
     * Get widget
     * @type {Widget}
     */
    const widget = this.controller.getContainment();

    if (resource === 'metamorphic' || !this.model.getPrefs('metamorphicAllowChangeContent')) {
      return false;
    }

    this.logger.debug('Fetch metamorphic content', resource);
    widget.controller.fetchInternalContent(resource);
  }

  /**
   * Provide statistics before transfer
   * @memberOf WidgetContentController
   * @param {Event} e
   */
  provideStats(e) {
    if (!this.model.getPrefs('statistics')) {
      this.logger.debug('No Statistics available', e);
      return false;
    }

    /**
     * Define widget
     * @type {Widget}
     */
    const widget = this.controller.getContainment();

    /**
     * Define uuid
     * @type {string}
     */
    const uuid = widget.model.getUUID();
    this.observer.publish(this.eventManager.eventList.transferStatistics, [uuid, e.target]);
  }

  /**
   * Check if Content Mimicry
   * @memberOf WidgetContentController
   * @returns {boolean}
   */
  isContentMimicry() {

    /**
     * Get widget
     * @type {Widget}
     */
    const widget = this.getContainment();
    return widget.model.getConfig('metamorphic');
  }

  /**
   * Define embedded content analyzer
   * @memberOf WidgetContentController
   */
  analyzeEmbeddedContent() {

    // Fetch mimicry content
    const mimicry = this.controller.isContentMimicry();

    // if (mimicry) {
    //
    //     this.logger.debug('Skip rendering real content, mimicry',
    // mimicry); return false; }

    this.observer.publish(this.eventManager.eventList.setEmbeddedContent);
  }

  /**
   * Transfer stats
   * @memberOf WidgetContentController
   * @param {string} uuid
   * @param $element
   */
  transferStatistics(uuid, $element) {
    this.logger.debug('Transfer Stats', uuid, $element);
  }
}