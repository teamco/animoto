/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 5:28 PM
 * To change this template use File | Settings | File Templates.
 */

defineP([
  'plugins/widgets/widget.content.event.manager'
], function defineSinoptikEventManager(WidgetContentEventManager) {

  /**
   * Define Sinoptik event manager
   * @class SinoptikEventManager
   * @constructor
   * @extends BaseEvent
   * @extends WidgetContentEventManager
   */
  var SinoptikEventManager = function SinoptikEventManager() {

    this.updateEventList({});
  };

  return SinoptikEventManager.extend(
      'SinoptikEventManager', {},
      WidgetContentEventManager.prototype
  );
});
