/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

import {EmptyRulesElement} from '../../empty/element/empty.rules.element';

/**
 * @class PageTabsRulesElement
 * @extends EmptyRulesElement
 * @type {PageTabsRulesElement}
 */
export class PageTabsRulesElement extends EmptyRulesElement {

  /**
   * @constructor
   * @param {string} [name]
   * @param {PageTabsView} view
   * @param opts
   */
  constructor(name, view, opts) {
    super(name || 'PageTabsRulesElement', view, opts);
  }
}