/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 5:28 PM
 * To change this template use File | Settings | File Templates.
 */

/**
 * @constant WidgetContentEventManager
 * @type {WidgetContentEventManager|*}
 */
const WidgetContentEventManager = require('../../widget.content.event.manager.js');

/**
 * @class EmptyEventManager
 * @type {emptyEventManager}
 */
export class EmptyEventManager extends WidgetContentEventManager {

  /**
   * @constructor
   * @param {string} name
   * @param {Empty} scope
   */
  constructor(name, scope) {
    super(name || 'EmptyEventManager', scope, false);
    this.updateEventList({});
  }
};