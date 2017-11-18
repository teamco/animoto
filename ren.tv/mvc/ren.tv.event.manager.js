/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 5:28 PM
 * To change this template use File | Settings | File Templates.
 */

defineP([
  'plugins/widgets/widget.content.event.manager'
], function defineRenTvEventManager(WidgetContentEventManager) {

  /**
   * Define RenTv event manager
   * @class RenTvEventManager
   * @constructor
   * @extends BaseEvent
   * @extends WidgetContentEventManager
   */
  var RenTvEventManager = function RenTvEventManager() {

    this.updateEventList({});
  };

  return RenTvEventManager.extend(
      'RenTvEventManager', {},
      WidgetContentEventManager.prototype
  );
});
