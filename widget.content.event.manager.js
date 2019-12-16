/**
 * Created by teamco on 4/30/14.
 */

import {BaseEvent} from '../../modules/Event';

/**
 * @class WidgetContentEventManager
 * @extends BaseEvent
 */
export class WidgetContentEventManager extends BaseEvent {

  /**
   * @constructor
   * @param {string} name
   * @param {Page} scope
   */
  constructor(name, scope) {
    super(name || 'WidgetContentEventManager', scope);

    /**
     * @property WidgetContentEventManager
     */
    this.events = {};

    /**
     * @property WidgetContentEventManager
     * @type {Array}
     */
    this.onLoadEvents = [];

    /**
     * Define event list
     * @property WidgetContentEventManager
     * @type {{
     *  initWidget: string,
     *  updateTranslations: string,
     *  defineContainer: string,
     *  defineReferrer: string,
     *  setEmbeddedContent: string,
     *  analyzeEmbeddedContent: string,
     *  loadPreferences: string,
     *  transferContentPreferences: string,
     *  alternativeSavePreferences: string,
     *  loadRules: string,
     *  publishRule: string,
     *  registerRules: string,
     *  transferRules: string,
     *  transferEvents: string,
     *  executeOnWidgetEvent: string,
     *  executeOnWidgetContentOnLoadEvent: string,
     *  fetchMetamorphicPreferences: string
     * }}
     */
    this.eventList = {
      initWidget: 'init.widget',
      updateTranslations: 'update.translations',
      defineContainer: 'define.container',
      defineReferrer: 'define.referrer',
      setEmbeddedContent: 'set.embedded.content',
      analyzeEmbeddedContent: 'analyze.embedded.content',
      loadPreferences: 'load.preferences',
      transferContentPreferences: 'transfer.content.preferences',
      alternativeSavePreferences: 'alternative.save.preferences',
      alternativeSaveAllPreferences: 'alternative.save.all.preferences',
      loadRules: 'load.rules',
      publishRule: 'publish.rule',
      registerRules: 'register.rules',
      transferRules: 'transfer.rules',
      transferEvents: 'transfer.events',
      executeOnWidgetEvent: 'execute.on.widget.event',
      executeOnWidgetContentOnLoadEvent: 'execute.on.widget.content.on.load.event',
      fetchMetamorphicPreferences: 'fetch.metamorphic.preferences'
    };
  }

  /**
   * Update event list
   * @memberOf WidgetContentEventManager
   * @param events
   */
  updateEventList(events) {
    window.$.extend(this.eventList, events);
  }

  /**
   * Execute events on load
   * @memberOf WidgetContentEventManager
   */
  executeEventsOnLoad() {
    if (this.onLoadEvents.length === 0) {
      return false;
    }

    /**
     * Define scope
     * @type {*}
     */
    const scope = this.scope;

    /**
     * Get widget
     * @type {Widget}
     */
    const widget = scope.controller.getContainment();

    const rules = widget.model.getConfig('rules'),
        publish = rules.publish || {},
        subscribe = rules.subscribe || {},
        name = scope.name.toLowerCase();

    publish[name] = publish[name] || [];

    for (let i = 0, l = this.onLoadEvents.length; i < l; i++) {
      const event = this.onLoadEvents[i];
      if (!publish[name].join(':').match(new RegExp(event, 'gi'))) {
        publish[name].push(event);
        scope.observer.publish(scope.eventManager.eventList.transferRules, {
          publish: publish,
          subscribe: subscribe
        });
      }
    }
  }
}