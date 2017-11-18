/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 5:28 PM
 * To change this template use File | Settings | File Templates.
 */

defineP([
  'plugins/widgets/widget.content.event.manager'
], function defineSyntaxHighlighterEventManager(WidgetContentEventManager) {

  /**
   * Define SyntaxHighlighter event manager
   * @class SyntaxHighlighterEventManager
   * @constructor
   * @extends BaseEvent
   * @extends WidgetContentEventManager
   */
  var SyntaxHighlighterEventManager = function SyntaxHighlighterEventManager() {

    this.updateEventList({});
  };

  return SyntaxHighlighterEventManager.extend('SyntaxHighlighterEventManager',
      {}, WidgetContentEventManager.prototype);
});
