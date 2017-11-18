/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

defineP([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineHowcastController(PluginBase, WidgetContentController) {

  /**
   * Define howcast controller
   * @class HowcastController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var HowcastController = function HowcastController() {
  };

  return HowcastController.extend('HowcastController', {

    /**
     * Set embedded content
     * @memberOf HowcastController
     */
    setEmbeddedContent: function setEmbeddedContent() {

      /**
       * Get url
       * @type {string|*}
       */
      var url = this.model.getPrefs('howcastEmbedCode'),
          embed = this.controller.getEmbedCode(url);

      if (embed) {
        this.view.elements.$howcast.renderEmbeddedContent(embed);
      }
    },

    /**
     * Validate howcast
     * @memberOf HowcastController
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

        return $(embed).find('object');

      } else {

        this.scope.logger.warn('Invalid Howcast embed code');
        return false;
      }
    },

    /**
     * Add Howcast rule
     * @memberOf HowcastController
     * @param {Event} e
     */
    addHowcastRule: function addHowcastRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});
