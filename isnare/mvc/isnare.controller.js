/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

define([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineIsnareController(PluginBase, WidgetContentController) {

  /**
   * Define isnare controller
   * @class IsnareController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var IsnareController = function IsnareController() {
  };

  return IsnareController.extend('IsnareController', {

    /**
     * Set embedded content
     * @memberOf IsnareController
     */
    setEmbeddedContent: function setEmbeddedContent() {
      this.view.elements.$isnare.renderEmbeddedContent(
          this.model.getPrefs('isnareEmbedCode')
      );
    },

    /**
     * Add Isnare rule
     * @memberOf IsnareController
     * @param {Event} e
     */
    addIsnareRule: function addIsnareRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});
