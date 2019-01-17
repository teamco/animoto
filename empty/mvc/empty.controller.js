/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

import {WidgetContentController} from '../../widget.content.controller';

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
    super(name || 'EmptyController', scope);
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
     * Get page tab
     * @type {Empty}
     */
    const scope = this.scope;
    const $button = scope.view.getElementByTagName(e, 'button');

    let value = $button.attr('value');
    if ((value || '').match(/Select rule \(\d+\)/)) {
      value = undefined;
    }

    scope.observer.publish(scope.eventManager.eventList.publishRule, [value, scope.name]);
  }
}