/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

defineP([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineFiveChannelUaController(PluginBase, WidgetContentController) {

  /**
   * Define fivechannelua controller
   * @class FiveChannelUaController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var FiveChannelUaController = function FiveChannelUaController() {
  };

  return FiveChannelUaController.extend('FiveChannelUaController', {

    /**
     * Set embedded content
     * @memberOf FiveChannelUaController
     */
    setEmbeddedContent: function setEmbeddedContent() {

      /**
       * Get url
       * @type {string|*}
       */
      var url = this.model.getPrefs('fivechanneluaUrl'),
          embed = this.controller.getEmbedCode(url);

      if (embed) {
        this.view.elements.$fivechannelua.renderEmbeddedContent(embed);
      }
    },

    /**
     * Validate fivechannelua
     * @memberOf FiveChannelUaController
     * @param {string} url
     * @return {string|boolean}
     */
    getEmbedCode: function getEmbedCode(url) {

      if (!url) {
        this.scope.logger.debug('Initial state');
        return false;
      }

      var mask = this.model.getConfig('mask'),
          regex = this.model.getConfig('regex');

      if (!url.match(regex)) {
        this.scope.logger.warn('Invalid fivechannelua url');
        return false;
      }

      if (url.match(/iframe/)) {

        /**
         * Embed iframe fix
         * @type {string}
         */
        url = $(url).attr('src');
      }

      return url.replace(regex, mask.replace(/{videoId}/g, '$1')).
          replace(/embed\/embed/, 'embed');
    },

    /**
     * Add FiveChannelUa rule
     * @memberOf FiveChannelUaController
     * @param {Event} e
     */
    addFiveChannelUaRule: function addFiveChannelUaRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});
