/**
 * Created with RubyMine.
 * User: teamco
 * Date: 6/29/14
 * Time: 1:09 AM
 */

import {BaseModel} from '../../modules/Model';

/**
 * @constant WidgetContentModel
 * @type {WidgetContentModel}
 * @extends BaseModel
 */
export class WidgetContentModel extends BaseModel {

  /**
   * @param {string} [name]
   * @param scope
   * @constructor
   */
  constructor(name, scope) {
    super(name || 'WidgetContentModel', scope);
  }

  /**
   * Get prefs
   * @memberOf WidgetContentModel
   * @param {string} prefs
   * @returns {boolean|string}
   */
  getContentPrefs(prefs) {
    const contentPrefs = this.getAllContentPrefs();
    if (contentPrefs[prefs]) {
      return contentPrefs[prefs].value;
    }
    this.scope.logger.info('Undefined preference', prefs);
  }

  /**
   * Get all content preferences
   * @memberOf WidgetContentModel
   * @returns {*}
   */
  getAllContentPrefs() {
    return this.preferences;
  }

  /**
   * Get prefs
   * @memberOf WidgetContentModel
   * @param {string} prefs
   * @returns {*}
   */
  getPrefs(prefs) {
    if (this.preferences) {
      return this.getContentPrefs(prefs);
    }

    /**
     * Define prefs
     * @type {{}}
     */
    const preferences = this.scope.config.preferences;

    if (preferences) {
      return preferences[prefs];
    }
    this.scope.logger.warn('Unable to locate preference', prefs);
  }

  /**
   * Set prefs
   * @memberOf WidgetContentModel
   * @param {string} prefs
   * @param {*} value
   */
  setPrefs(prefs, value) {

    /**
     * Define preferences
     * @property WidgetContentModel
     * @type {*}
     */
    this.preferences = this.preferences || {};

    /**
     * Define new prefs
     * @type {*}
     */
    this.preferences[prefs] = this.preferences[prefs] || {};

    /**
     * Define prefs
     * @type {string}
     */
    this.preferences[prefs].value = value;
  }

  /**
   * Set prefs
   * @memberOf WidgetContentModel
   * @param prefs
   * @param value
   */
  setPrefsCache(prefs, value) {
    if (this.getPrefs(prefs) !== value) {
      this.setPrefs(prefs, value);
    }
  }

  /**
   * Copy prefs
   * @memberOf WidgetContentModel
   * @param source
   * @returns {boolean}
   */
  copyPrefs(source) {

    /**
     * Define
     * @type {string}
     */
    const cname = this.scope.name.toLowerCase(),
        prefs = source.model.preferences;

    if (source.name.toLowerCase() !== cname) {
      this.scope.logger.warn('Unable to copy preferences', source);
      return false;
    }

    for (let index in prefs) {
      if (Object.prototype.hasOwnProperty.call(prefs, index) && index.match(new RegExp(cname))) {
        this.setPrefs(index, prefs[index].value);
        this.scope.logger.debug('Copied prefs', source, index, prefs[index]);
      }
    }
  }

  /**
   * Define type setter
   * @memberOf WidgetContentModel
   * @param {string} type
   */
  setMetamorphicType(type) {
    const scope = this.scope,
        widget = scope.controller.getContainment();

    let isMetamorphic = true;

    if (!widget.model.getConfig('preferences').metamorphicAllowChangeContent) {
      scope.logger.debug('Metamorphic not allowed', type);

      // Reset content
      widget.controller.fetchInternalContent('metamorphic');

      // Remove metamorphicType
      delete widget.config.preferences.metamorphicType;
      return false;
    }

    if (scope.name.toLowerCase() !== 'metamorphic') {
      isMetamorphic = scope.view.get$container().isMetamorphicElement();
    }

    isMetamorphic ?
        this.setPrefs('metamorphicType', type) :
        widget.model._setItemInfoPreferences('metamorphicType', type);

    scope.observer.publish(scope.eventManager.eventList.fetchMetamorphicPreferences, type);
  }

  /**
   * Get Metamorphic Preferences
   * @memberOf WidgetContentModel
   * @param {boolean} force
   * @returns {{}}
   */
  getMetamorphicPreferences(force) {
    let allowed = false, type;

    if (force) {

      /**
       * Get widget
       * @type {Widget}
       */
      const widget = this.scope.controller.getContainment();

      // Get prefs
      const prefs = widget.model.getConfig('preferences');

      allowed = prefs.metamorphicAllowChangeContent;
      type = prefs.metamorphicType;
    }

    return {
      metamorphicAllowChangeContent: {
        type: 'checkbox',
        disabled: false,
        value: allowed,
        visible: true
      },
      metamorphicType: {
        type: 'listbox',
        disabled: false,
        list: [],
        visible: true,
        label: true,
        value: type
      }
    };
  }
}