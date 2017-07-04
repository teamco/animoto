/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

define([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineOdnoklassnikiController(PluginBase, WidgetContentController) {

  /**
   * Define Odnoklassniki controller
   * @class OdnoklassnikiController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var OdnoklassnikiController = function OdnoklassnikiController() {
  };

  return OdnoklassnikiController.extend('OdnoklassnikiController', {

    /**
     * Set embedded content
     * @memberOf OdnoklassnikiController
     */
    setEmbeddedContent: function setEmbeddedContent() {
      this.view.get$item().renderEmbeddedContent(
          this.model.getPrefs('odnoklassnikiGroupId'),
          this.model.getPrefs('odnoklassnikiWidth'),
          this.model.getPrefs('odnoklassnikiHeight')
      );
    },

    /**
     * Add Odnoklassniki rule
     * @memberOf OdnoklassnikiController
     * @param {Event} e
     */
    addOdnoklassnikiRule: function addOdnoklassnikiRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});
