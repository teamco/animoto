/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

define([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineDeviantArtController(PluginBase, WidgetContentController) {

  /**
   * Define deviantart controller
   * @class DeviantArtController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var DeviantArtController = function DeviantArtController() {
  };

  return DeviantArtController.extend('DeviantArtController', {

    /**
     * Set embedded content
     * @memberOf DeviantArtController
     */
    setEmbeddedContent: function setEmbeddedContent() {
      this.view.elements.$deviantart.renderEmbeddedContent(
          this.controller.getEmbedCode(
              this.model.getPrefs('deviantartEmbedCode')
          )
      );
    },

    /**
     * Validate DeviantArt
     * @memberOf DeviantArtController
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

      if (embed.match(/^<object/)) {
        return embed;
      }

      this.scope.logger.warn('Invalid DeviantArt embed code');
    },

    /**
     * Add DeviantArt rule
     * @memberOf DeviantArtController
     * @param {Event} e
     */
    addDeviantArtRule: function addDeviantArtRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});
