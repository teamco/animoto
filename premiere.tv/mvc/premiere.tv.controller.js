/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

defineP([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function definePremiereTvController(PluginBase, WidgetContentController) {

  /**
   * Define premieretv controller
   * @class PremiereTvController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var PremiereTvController = function PremiereTvController() {
  };

  return PremiereTvController.extend('PremiereTvController', {

    /**
     * Set embedded content
     * @memberOf PremiereTvController
     */
    setEmbeddedContent: function setEmbeddedContent() {
      this.view.elements.$premieretv.renderEmbeddedContent(
          this.model.getPrefs('premieretvEmbedCode')
      );
    },

    /**
     * Add PremiereTv rule
     * @memberOf PremiereTvController
     * @param {Event} e
     */
    addPremiereTvRule: function addPremiereTvRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});
