/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

defineP([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineReverbnationController(PluginBase, WidgetContentController) {

  /**
   * Define Reverbnation controller
   * @class ReverbnationController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var ReverbnationController = function ReverbnationController() {
  };

  return ReverbnationController.extend('ReverbnationController', {

    /**
     * Set embedded content
     * @memberOf ReverbnationController
     */
    setEmbeddedContent: function setEmbeddedContent() {
      this.view.get$item().renderEmbeddedContent(
          this.model.getPrefs('reverbnationEmbedCode')
      );
    },

    /**
     * Add Reverbnation rule
     * @memberOf ReverbnationController
     * @param {Event} e
     */
    addReverbnationRule: function addReverbnationRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});
