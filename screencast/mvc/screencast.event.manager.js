/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 5:28 PM
 * To change this template use File | Settings | File Templates.
 */

defineP([
  'plugins/widgets/widget.content.event.manager'
], function defineScreencastEventManager(WidgetContentEventManager) {

  /**
   * Define Screencast event manager
   * @class ScreencastEventManager
   * @constructor
   * @extends BaseEvent
   * @extends WidgetContentEventManager
   */
  var ScreencastEventManager = function ScreencastEventManager() {

    this.updateEventList({});
  };

  return ScreencastEventManager.extend('ScreencastEventManager', {},
      WidgetContentEventManager.prototype);
});
