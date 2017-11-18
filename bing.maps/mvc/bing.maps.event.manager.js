/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 5:28 PM
 * To change this template use File | Settings | File Templates.
 */

defineP([
  'plugins/widgets/widget.content.event.manager'
], function defineBingMapsEventManager(WidgetContentEventManager) {

  /**
   * Define BingMaps event manager
   * @class BingMapsEventManager
   * @constructor
   * @extends BaseEvent
   * @extends WidgetContentEventManager
   */
  var BingMapsEventManager = function BingMapsEventManager() {

    this.updateEventList({});
  };

  return BingMapsEventManager.extend(
      'BingMapsEventManager', {},
      WidgetContentEventManager.prototype
  );
});
