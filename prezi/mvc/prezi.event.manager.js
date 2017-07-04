/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 5:28 PM
 * To change this template use File | Settings | File Templates.
 */

define([
  'plugins/widgets/widget.content.event.manager'
], function definePreziEventManager(WidgetContentEventManager) {

  /**
   * Define Prezi event manager
   * @class PreziEventManager
   * @constructor
   * @extends BaseEvent
   * @extends WidgetContentEventManager
   */
  var PreziEventManager = function PreziEventManager() {

    this.updateEventList({});
  };

  return PreziEventManager.extend('PreziEventManager', {},
      WidgetContentEventManager.prototype);
});
