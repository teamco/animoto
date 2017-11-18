/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

defineP([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineChannelNineUaController(PluginBase, WidgetContentController) {

  /**
   * Define channelnineua controller
   * @class ChannelNineUaController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var ChannelNineUaController = function ChannelNineUaController() {
  };

  return ChannelNineUaController.extend('ChannelNineUaController', {

    /**
     * Set embedded content
     * @memberOf ChannelNineUaController
     */
    setEmbeddedContent: function setEmbeddedContent() {
      this.view.elements.$channelnineua.renderEmbeddedContent(
          this.model.getPrefs('channelnineuaEmbedCode')
      );
    },

    /**
     * Add ChannelNineUa rule
     * @memberOf ChannelNineUaController
     * @param {Event} e
     */
    addChannelNineUaRule: function addChannelNineUaRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});
