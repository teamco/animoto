/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 5:28 PM
 * To change this template use File | Settings | File Templates.
 */

defineP([
  'plugins/widgets/widget.content.event.manager'
], function defineIssuuEventManager(WidgetContentEventManager) {

  /**
   * Define Issuu event manager
   * @class IssuuEventManager
   * @constructor
   * @extends BaseEvent
   * @extends WidgetContentEventManager
   */
  var IssuuEventManager = function IssuuEventManager() {

    this.updateEventList({});
  };

  return IssuuEventManager.extend('IssuuEventManager', {},
      WidgetContentEventManager.prototype);
});
