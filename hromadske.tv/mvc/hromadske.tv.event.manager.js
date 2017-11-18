/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 5:28 PM
 * To change this template use File | Settings | File Templates.
 */

defineP([
  'plugins/widgets/widget.content.event.manager'
], function defineHromadskeTvEventManager(WidgetContentEventManager) {

  /**
   * Define HromadskeTv event manager
   * @class HromadskeTvEventManager
   * @constructor
   * @extends BaseEvent
   * @extends WidgetContentEventManager
   */
  var HromadskeTvEventManager = function HromadskeTvEventManager() {

    this.updateEventList({});
  };

  return HromadskeTvEventManager.extend('HromadskeTvEventManager', {},
      WidgetContentEventManager.prototype);
});
