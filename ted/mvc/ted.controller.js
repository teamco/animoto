/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

define([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineTedController(PluginBase, WidgetContentController) {

  /**
   * Define ted controller
   * @class TedController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var TedController = function TedController() {
  };

  return TedController.extend('TedController', {

    /**
     * Set embedded content
     * @memberOf TedController
     */
    setEmbeddedContent: function setEmbeddedContent() {

      /**
       * Get url
       * @type {string|*}
       */
      var url = this.model.getPrefs('tedEmbedCode'),
          embed = this.controller.getEmbedCode(url);

      if (embed) {
        this.view.elements.$ted.renderEmbeddedContent(embed);
      }
    },

    /**
     * Validate ted
     * @memberOf TedController
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

        this.scope.logger.warn('Invalid Ted embed code');
        return false;
      }
    },

    /**
     * Add Ted rule
     * @memberOf TedController
     * @param {Event} e
     */
    addTedRule: function addTedRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});
