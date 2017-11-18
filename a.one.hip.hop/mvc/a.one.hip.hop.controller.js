/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

defineP([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineAOneHipHopController(PluginBase, WidgetContentController) {

  /**
   * Define aonehiphop controller
   * @class AOneHipHopController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var AOneHipHopController = function AOneHipHopController() {
  };

  return AOneHipHopController.extend('AOneHipHopController', {

    /**
     * Set embedded content
     * @memberOf AOneHipHopController
     */
    setEmbeddedContent: function setEmbeddedContent() {
      this.view.elements.$aonehiphop.renderEmbeddedContent(
          this.model.getPrefs('aonehiphopEmbedCode')
      );
    },

    /**
     * Add AOneHipHop rule
     * @memberOf AOneHipHopController
     * @param {Event} e
     */
    addAOneHipHopRule: function addAOneHipHopRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});
