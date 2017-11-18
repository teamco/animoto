/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

defineP([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineScreencastController(PluginBase, WidgetContentController) {

  /**
   * Define screencast controller
   * @class ScreencastController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var ScreencastController = function ScreencastController() {
  };

  return ScreencastController.extend('ScreencastController', {

    /**
     * Set embedded content
     * @memberOf ScreencastController
     */
    setEmbeddedContent: function setEmbeddedContent() {

      /**
       * Get url
       * @type {string|*}
       */
      var url = this.model.getPrefs('screencastEmbedCode'),
          embed = this.controller.getEmbedCode(url);

      if (embed) {
        this.view.elements.$screencast.renderEmbeddedContent(embed);
      }
    },

    /**
     * Validate screencast
     * @memberOf ScreencastController
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

      if (embed.match(/<object/)) {

        return {
          type: 'object',
          src: $(embed)[2]
        };
      }

      if (embed.match(/<a/)) {

        return {
          type: 'image',
          src: $(embed)[2]
        };
      }

      this.scope.logger.warn('Invalid Screencast embed code');
    },

    /**
     * Add Screencast rule
     * @memberOf ScreencastController
     * @param {Event} e
     */
    addScreencastRule: function addScreencastRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});
