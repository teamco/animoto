/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

define([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineJsFiddleController(PluginBase, WidgetContentController) {

  /**
   * Define jsfiddle controller
   * @class JsFiddleController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var JsFiddleController = function JsFiddleController() {
  };

  return JsFiddleController.extend('JsFiddleController', {

    /**
     * Set embedded content
     * @memberOf JsFiddleController
     */
    setEmbeddedContent: function setEmbeddedContent() {

      /**
       * Get url
       * @type {string|*}
       */
      var url = this.model.getPrefs('jsfiddleEmbedCode'),
          embed = this.controller.getEmbedCode(url);

      if (embed) {
        this.view.elements.$jsfiddle.renderEmbeddedContent(embed);
      }
    },

    /**
     * Validate jsfiddle
     * @memberOf JsFiddleController
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

        this.scope.logger.warn('Invalid JsFiddle embed code');
        return false;
      }
    },

    /**
     * Add JsFiddle rule
     * @memberOf JsFiddleController
     * @param {Event} e
     */
    addJsFiddleRule: function addJsFiddleRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});
