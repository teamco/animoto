/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

defineP([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineOumyController(PluginBase, WidgetContentController) {

  /**
   * Define Oumy controller
   * @class OumyController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var OumyController = function OumyController() {
  };

  return OumyController.extend('OumyController', {

    /**
     * Set embedded content
     * @memberOf OumyController
     */
    setEmbeddedContent: function setEmbeddedContent() {
      this.view.get$item().renderEmbeddedContent(
          this.model.getPrefs('oumyEmbedCode')
      );
    },

    /**
     * Add Oumy rule
     * @memberOf OumyController
     * @param {Event} e
     */
    addOumyRule: function addOumyRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});
