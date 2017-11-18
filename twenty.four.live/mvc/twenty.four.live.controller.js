/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

defineP([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineTwentyFourLiveController(PluginBase,
    WidgetContentController) {

  /**
   * Define twentyfourlive controller
   * @class TwentyFourLiveController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var TwentyFourLiveController = function TwentyFourLiveController() {
  };

  return TwentyFourLiveController.extend('TwentyFourLiveController', {

    /**
     * Set embedded content
     * @memberOf TwentyFourLiveController
     */
    setEmbeddedContent: function setEmbeddedContent() {

      /**
       * Get url
       * @type {string|*}
       */
      var url = this.model.getPrefs('twentyfourliveUrl'),
          embed = this.controller.getEmbedCode(url);

      if (embed) {
        this.view.elements.$twentyfourlive.renderEmbeddedContent(embed);
      }
    },

    /**
     * Validate twentyfourlive
     * @memberOf TwentyFourLiveController
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
        this.scope.logger.warn('Invalid twenty four live url');
        return false;
      }

      if (url.match(/iframe/)) {

        /**
         * Embed iframe fix
         * @type {string}
         */
        url = $(url).attr('src');
      }

      return url.replace(regex, mask.replace(/\{videoId}/g, '$1')).
          replace(/embed\/embed/, 'embed');
    },

    /**
     * Add TwentyFourLive rule
     * @memberOf TwentyFourLiveController
     * @param {Event} e
     */
    addTwentyFourLiveRule: function addTwentyFourLiveRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});
