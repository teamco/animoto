/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 5:28 PM
 * To change this template use File | Settings | File Templates.
 */

defineP([
  'plugins/widgets/widget.content.event.manager'
], function defineMobypictureEventManager(WidgetContentEventManager) {

  /**
   * Define Mobypicture event manager
   * @class MobypictureEventManager
   * @constructor
   * @extends BaseEvent
   * @extends WidgetContentEventManager
   */
  var MobypictureEventManager = function MobypictureEventManager() {

    this.updateEventList({});
  };

  return MobypictureEventManager.extend('MobypictureEventManager', {},
      WidgetContentEventManager.prototype);
});
