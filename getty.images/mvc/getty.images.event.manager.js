/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 5:28 PM
 * To change this template use File | Settings | File Templates.
 */

define([
  'plugins/widgets/widget.content.event.manager'
], function defineGettyImagesEventManager(WidgetContentEventManager) {

  /**
   * Define GettyImages event manager
   * @class GettyImagesEventManager
   * @constructor
   * @extends BaseEvent
   * @extends WidgetContentEventManager
   */
  var GettyImagesEventManager = function GettyImagesEventManager() {

    this.updateEventList({});
  };

  return GettyImagesEventManager.extend(
      'GettyImagesEventManager', {},
      WidgetContentEventManager.prototype
  );
});
