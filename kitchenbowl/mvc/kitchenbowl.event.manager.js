/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 5:28 PM
 * To change this template use File | Settings | File Templates.
 */

defineP([
  'plugins/widgets/widget.content.event.manager'
], function defineKitchenbowlEventManager(WidgetContentEventManager) {

  /**
   * Define Kitchenbowl event manager
   * @class KitchenbowlEventManager
   * @constructor
   * @extends BaseEvent
   * @extends WidgetContentEventManager
   */
  var KitchenbowlEventManager = function KitchenbowlEventManager() {

    this.updateEventList({});
  };

  return KitchenbowlEventManager.extend(
      'KitchenbowlEventManager', {},
      WidgetContentEventManager.prototype
  );
});
