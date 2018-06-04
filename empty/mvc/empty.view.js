/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/24/12
 * Time: 10:13 PM
 * To change this template use File | Settings | File Templates.
 */

/**
 * @constant BaseView
 * @type {BaseView}
 */
const BaseView = require('../../../../core/lib/modules/View.js');

/**
 * @constant ContentElement
 * @type {module.EmptyElement}
 */
const ContentElement = require('../element/empty.element.js');

/**
 * @constant PreferencesElement
 * @type {module.EmptyPreferencesElement}
 */
const PreferencesElement = require('../element/empty.preferences.element.js');

/**
 * @constant RulesElement
 * @type {module.EmptyRulesElement}
 */
const RulesElement = require('../element/empty.rules.element.js');

/**
 * @class EmptyView
 * @type {module.EmptyView}
 */
module.exports = class EmptyView extends BaseView {

  /**
   * @constructor
   * @param {string} name
   * @param scope
   */
  constructor(name, scope) {
    super(name || 'EmptyView', scope, false);
  }

  /**
   * Render Empty element
   * @memberOf EmptyView
   */
  renderContent() {
    this.header(this.get$container());

    /**
     * @type {string}
     */
    const name = this.scope.name;

    /**
     * Define $empty
     * @type {module.EmptyElement}
     */
    this.elements['$' + name.toLowerCase()] = new this.fetchElement('Content')(null, this, {
      $container: this.get$container().$,
      style: name.toDash() + '-container'
    });

    this.footer(this.get$container());
    this.scope.observer.publish(this.scope.eventManager.eventList.analyzeEmbeddedContent);
  }

  /**
   * Render Prefs
   * @memberOf EmptyView
   * @returns {EmptyPreferencesElement}
   */
  renderPreferences() {

    /**
     * Define Empty Preferences Element
     * @type {module.EmptyPreferencesElement}
     */
    this.elements.$preferences = new this.fetchElement('Preferences')(null, this, {
      data: this.controller.getPreferences()
    });

    return this.get$preferences();
  }

  /**
   * Render Rules
   * @memberOf EmptyView
   * @param widgetRules
   * @param contentRules
   * @returns {EmptyRulesElement}
   */
  renderRules(widgetRules, contentRules) {

    /**
     * Define Empty Rules Element
     * @type {module.EmptyRulesElement}
     */
    this.elements.$rules = new this.fetchElement('Rules')(null, this, {
      data: this.controller.getRules(),
      rules: {
        widget: widgetRules,
        content: contentRules
      }
    });

    return this.get$rules();
  }

  /**
   * @memberOf EmptyView
   * @return {{
   *  Content: module.EmptyElement,
   *  Preferences: module.EmptyPreferencesElement,
   *  Rules: module.EmptyRulesElement
   * }}
   */
  static getElements() {
    return {
      Content: ContentElement,
      Preferences: PreferencesElement,
      Rules: RulesElement,
    }
  }

  /**
   * @memberOf EmptyView
   * @param name
   * @return {*}
   */
  fetchElement(name) {
    return this.constructor.getElements()[name];
  }

  /**
   * Render Empty
   * @memberOf EmptyView
   */
  render() {
    this.scope.observer.publish(this.scope.eventManager.eventList.successRendered, this.renderContent.bind(this));
  }
};