/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 5:28 PM
 * To change this template use File | Settings | File Templates.
 */

import {WidgetContentEventManager} from '../../widget.content.event.manager';

/**
 * @class EmptyEventManager
 * @type {EmptyEventManager}
 */
export class EmptyEventManager extends WidgetContentEventManager {

  /**
   * @constructor
   * @param {string} name
   * @param {Empty} scope
   */
  constructor(name, scope) {
    super(name || 'EmptyEventManager', scope);
    this.updateEventList({});
  }
}