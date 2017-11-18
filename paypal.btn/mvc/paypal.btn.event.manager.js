/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 5:28 PM
 * To change this template use File | Settings | File Templates.
 */

defineP([
  'plugins/widgets/widget.content.event.manager'
], function definePaypalBtnEventManager(WidgetContentEventManager) {

  /**
   * Define PaypalBtn event manager
   * @class PaypalBtnEventManager
   * @constructor
   * @extends BaseEvent
   * @extends WidgetContentEventManager
   */
  var PaypalBtnEventManager = function PaypalBtnEventManager() {

    this.updateEventList({});
  };

  return PaypalBtnEventManager.extend(
      'PaypalBtnEventManager', {},
      WidgetContentEventManager.prototype
  );
});
