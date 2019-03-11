/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/4/12
 * Time: 11:06 PM
 * To change this template use File | Settings | File Templates.
 */

import {WidgetContentModel} from '../../widget.content.model';

/**
 * @class EmptyModel
 * @extends WidgetContentModel
 * @type {EmptyModel}
 */
export class EmptyModel extends WidgetContentModel {

  /**
   * @constructor
   * @param {string} name
   * @param scope
   */
  constructor(name, scope) {
    super(name || 'EmptyModel', scope);

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
}