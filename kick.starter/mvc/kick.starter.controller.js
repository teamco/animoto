/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

define([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineKickStarterController(PluginBase, WidgetContentController) {

  /**
   * Define kickstarter controller
   * @class KickStarterController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var KickStarterController = function KickStarterController() {
  };

  return KickStarterController.extend('KickStarterController', {

    /**
     * Set embedded content
     * @memberOf KickStarterController
     */
    setEmbeddedContent: function setEmbeddedContent() {

      /**
       * Get url
       * @type {string|*}
       */
      var url = this.model.getPrefs('kickstarterEmbedCode'),
          embed = this.controller.getEmbedCode(url);

      if (embed) {
        this.view.elements.$kickstarter.renderEmbeddedContent(embed);
      }
    },

    /**
     * Validate kickstarter
     * @memberOf KickStarterController
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

        this.scope.logger.warn('Invalid KickStarter embed code');
        return false;
      }
    },

    /**
     * Add KickStarter rule
     * @memberOf KickStarterController
     * @param {Event} e
     */
    addKickStarterRule: function addKickStarterRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});
