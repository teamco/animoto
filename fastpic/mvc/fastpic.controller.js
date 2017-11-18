/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

defineP([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineFastpicController(PluginBase, WidgetContentController) {

  /**
   * Define Fastpic controller
   * @class FastpicController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var FastpicController = function FastpicController() {
  };

  return FastpicController.extend('FastpicController', {

    /**
     * Set embedded content
     * @memberOf FastpicController
     */
    setEmbeddedContent: function setEmbeddedContent() {
      this.view.get$item().renderEmbeddedContent(
          this.model.getPrefs('fastpicImageUrl')
      );
    },

    /**
     * Add Fastpic rule
     * @memberOf FastpicController
     * @param {Event} e
     */
    addFastpicRule: function addFastpicRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});
