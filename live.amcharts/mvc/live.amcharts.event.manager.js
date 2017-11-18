/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 5:28 PM
 * To change this template use File | Settings | File Templates.
 */

defineP([
  'plugins/widgets/widget.content.event.manager'
], function defineLiveAmchartsEventManager(WidgetContentEventManager) {

  /**
   * Define LiveAmcharts event manager
   * @class LiveAmchartsEventManager
   * @constructor
   * @extends BaseEvent
   * @extends WidgetContentEventManager
   */
  var LiveAmchartsEventManager = function LiveAmchartsEventManager() {

    this.updateEventList({});
  };

  return LiveAmchartsEventManager.extend(
      'LiveAmchartsEventManager', {},
      WidgetContentEventManager.prototype
  );
});
