/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 5:28 PM
 * To change this template use File | Settings | File Templates.
 */

defineP([
  'plugins/widgets/widget.content.event.manager'
], function defineEbaumsWorldEventManager(WidgetContentEventManager) {

  /**
   * Define EbaumsWorld event manager
   * @class EbaumsWorldEventManager
   * @constructor
   * @extends BaseEvent
   * @extends WidgetContentEventManager
   */
  var EbaumsWorldEventManager = function EbaumsWorldEventManager() {

    this.updateEventList({});
  };

  return EbaumsWorldEventManager.extend(
      'EbaumsWorldEventManager', {},
      WidgetContentEventManager.prototype
  );
});
