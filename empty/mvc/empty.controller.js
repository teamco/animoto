/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

/**
 * @constant WidgetContentController
 * @type {WidgetContentController|*}
 */
const WidgetContentController = require('../../widget.content.controller.js');

/**
 * @class EmptyController
 * @extends WidgetContentController
 */
export class EmptyController extends WidgetContentController {

  /**
   * @param {string} [name]
   * @param scope
   * @constructor
   */
  constructor(name, scope) {
    super(name || 'EmptyController', scope, false);
  }

  /**
   * Set embedded content
   * @memberOf EmptyController
   */
  setEmbeddedContent() {
    this.view.get$item().renderEmbeddedContent();
  }

  /**
   * @memberOf EmptyController
   * @param {Event} e
   */
  addContentRule(e) {

    /**
     * Define $button
     * @type {*|jQuery|HTMLElement}
     */
    const $button = $(e.target);

    /**
     * Get page tab
     * @type {Empty}
     */
    const scope = this.scope;

    scope.observer.publish(scope.eventManager.eventList.publishRule, [$button.attr('value'), scope.name]);
  }
};