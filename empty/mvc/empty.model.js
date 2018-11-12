/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/4/12
 * Time: 11:06 PM
 * To change this template use File | Settings | File Templates.
 */

/**
 * @constant WidgetContentModel
 * @type {WidgetContentModel}
 */
const WidgetContentModel = require('../../widget.content.model.js');

/**
 * @class EmptyModel
 * @extends WidgetContentModel
 * @type {emptyModel}
 */
export class EmptyModel extends WidgetContentModel {

  /**
   * @constructor
   * @param {string} name
   * @param scope
   */
  constructor(name, scope) {
    super(name || 'EmptyModel', scope, false);

    /**
     * Define preferences
     * @property EmptyModel
     */
    this.preferences = {};

    /**
     * Define rules
     * @property EmptyModel
     */
    this.rules = {};
  }
};