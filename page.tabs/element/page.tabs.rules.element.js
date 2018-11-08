/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

/**
 * @constant EmptyRulesElement
 * @type {EmptyRulesElement}
 */
const EmptyRulesElement = require('../../empty/element/empty.rules.element.js');

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
};