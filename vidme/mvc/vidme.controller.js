/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

defineP([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineVidmeController(PluginBase, WidgetContentController) {

  /**
   * Define vidme controller
   * @class VidmeController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var VidmeController = function VidmeController() {
  };

  return VidmeController.extend('VidmeController', {

    /**
     * Set embedded content
     * @memberOf VidmeController
     */
    setEmbeddedContent: function setEmbeddedContent() {

      /**
       * Get url
       * @type {string|*}
       */
      var url = this.model.getPrefs('vidmeEmbedCode'),
          embed = this.controller.getEmbedCode(url);

      if (embed) {
        this.view.elements.$vidme.renderEmbeddedContent(embed);
      }
    },

    /**
     * Validate vidme
     * @memberOf VidmeController
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

        this.scope.logger.warn('Invalid Vidme embed code');
        return false;
      }
    },

    /**
     * Add Vidme rule
     * @memberOf VidmeController
     * @param {Event} e
     */
    addVidmeRule: function addVidmeRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});
