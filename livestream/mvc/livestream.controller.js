/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

define([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineLivestreamController(PluginBase, WidgetContentController) {

  /**
   * Define livestream controller
   * @class LivestreamController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var LivestreamController = function LivestreamController() {
  };

  return LivestreamController.extend('LivestreamController', {

    /**
     * Set embedded content
     * @memberOf LivestreamController
     */
    setEmbeddedContent: function setEmbeddedContent() {

      /**
       * Get url
       * @type {string|*}
       */
      var url = this.model.getPrefs('livestreamEmbedCode'),
          embed = this.controller.getEmbedCode(url);

      if (embed) {
        this.view.elements.$livestream.renderEmbeddedContent(embed);
      }
    },

    /**
     * Validate livestream
     * @memberOf LivestreamController
     * @param {string} embed
     * @return {string|boolean}
     */
    getEmbedCode: function getEmbedCode(embed) {

      if (!embed) {
        this.scope.logger.debug('Initial state');
        return false;
      }

      // Convert to string
      embed += '';

      if (embed.match(/^<iframe/)) {

        return $(embed).attr('src');

      } else {

        this.scope.logger.warn('Invalid Livestream embed code');
        return false;
      }
    },

    /**
     * Add Livestream rule
     * @memberOf LivestreamController
     * @param {Event} e
     */
    addLivestreamRule: function addLivestreamRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});
