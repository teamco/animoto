/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 5:28 PM
 * To change this template use File | Settings | File Templates.
 */

defineP([
  'plugins/widgets/widget.content.event.manager'
], function defineKalturaEventManager(WidgetContentEventManager) {

  /**
   * Define Kaltura event manager
   * @class KalturaEventManager
   * @constructor
   * @extends BaseEvent
   * @extends WidgetContentEventManager
   */
  var KalturaEventManager = function KalturaEventManager() {

    this.updateEventList({});
  };

  return KalturaEventManager.extend(
      'KalturaEventManager', {},
      WidgetContentEventManager.prototype
  );
});
