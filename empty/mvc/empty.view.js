/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/24/12
 * Time: 10:13 PM
 * To change this template use File | Settings | File Templates.
 */

import {BaseView} from '../../../../modules/View';
import {EmptyElement} from '../element/empty.element';
import {EmptyPreferencesElement} from '../element/empty.preferences.element';
import {EmptyRulesElement} from '../element/empty.rules.element';

/**
 * @class EmptyView
 * @extends BaseView
 */
export class EmptyView extends BaseView {

  /**
   * @constructor
   * @param {string} name
   * @param scope
   */
  constructor(name, scope) {
    super(name || 'EmptyView', scope);
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
     * @constant $content
     * @type {string}
     */
    const $content = '$' + name.toLowerCase();

    if (this.isCached($content, this.constructor.getElements()['Content'])) {
      return false;
    }

    /**
     * Define $empty
     */
    this.elements[$content] = this.fetchElement('Content', {
      $container: this.get$container().$,
      style: name.toDash() + '-container'
    });

    this.footer(this.get$container());
    this.scope.observer.publish(this.scope.eventManager.eventList.analyzeEmbeddedContent);
  }

  /**
   * Render Prefs
   * @memberOf EmptyView
   * @param {PageDataView} dataView
   * @returns {EmptyPreferencesElement}
   */
  renderPreferences(dataView) {

    /**
     * @property EmptyView
     * @type {PageDataView}
     */
    this.dataView = dataView;

    /**
     * Define Empty Preferences Element
     */
    this.elements.$preferences = this.fetchElement('Preferences', {
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
     */
    this.elements.$rules = this.fetchElement('Rules', {
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
   *  Content: EmptyElement,
   *  Preferences: EmptyPreferencesElement,
   *  Rules: EmptyRulesElement
   * }}
   */
  static getElements() {
    return {
      Content: EmptyElement,
      Preferences: EmptyPreferencesElement,
      Rules: EmptyRulesElement
    }
  }

  /**
   * @memberOf EmptyView
   * @param {string} name
   * @param opts
   * @return {*}
   */
  fetchElement(name, opts) {

    /**
     * @constant ContentElement
     */
    const ContentElement = this.constructor.getElements()[name];
    return new ContentElement(null, this, opts);
  }

  /**
   * Render Empty
   * @memberOf EmptyView
   */
  render() {

    /**
     * @constant scope
     * @type {Empty}
     */
    const scope = this.scope;
    scope.observer.publish(scope.eventManager.eventList.successRendered, this.renderContent.bind(this));
  }
}