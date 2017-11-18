/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 5:28 PM
 * To change this template use File | Settings | File Templates.
 */

defineP([
  'plugins/widgets/widget.content.event.manager'
], function defineQuicktimeEventManager(WidgetContentEventManager) {

  /**
   * Define Quicktime event manager
   * @class QuicktimeEventManager
   * @constructor
   * @extends BaseEvent
   * @extends WidgetContentEventManager
   */
  var QuicktimeEventManager = function QuicktimeEventManager() {

    this.updateEventList({});
  };

  return QuicktimeEventManager.extend('QuicktimeEventManager', {},
      WidgetContentEventManager.prototype);
});