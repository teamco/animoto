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
 * @class ImageRulesElement
 * @extends EmptyRulesElement
 * @type {ImageRulesElement}
 */
export class ImageRulesElement extends EmptyRulesElement {

  /**
   * @constructor
   * @param {string} [name]
   * @param {ImageView} view
   * @param opts
   */
  constructor(name, view, opts) {
    super(name || 'ImageRulesElement', view, opts);
  }
};