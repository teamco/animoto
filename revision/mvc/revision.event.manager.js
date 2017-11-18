/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 5:28 PM
 * To change this template use File | Settings | File Templates.
 */

defineP([
  'plugins/widgets/widget.content.event.manager'
], function defineRevisionEventManager(WidgetContentEventManager) {

  /**
   * Define Revision event manager
   * @class RevisionEventManager
   * @constructor
   * @extends BaseEvent
   * @extends WidgetContentEventManager
   */
  var RevisionEventManager = function RevisionEventManager() {

    this.updateEventList({});
  };

  return RevisionEventManager.extend('RevisionEventManager', {},
      WidgetContentEventManager.prototype);
});
