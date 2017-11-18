/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

defineP([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineStepashkaController(PluginBase, WidgetContentController) {

  /**
   * Define stepashka controller
   * @class StepashkaController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var StepashkaController = function StepashkaController() {
  };

  return StepashkaController.extend('StepashkaController', {

    /**
     * Set embedded content
     * @memberOf StepashkaController
     */
    setEmbeddedContent: function setEmbeddedContent() {

      /**
       * Get url
       * @type {string|*}
       */
      var url = this.model.getPrefs('stepashkaEmbedCode'),
          embed = this.controller.getEmbedCode(url);

      if (embed) {
        this.view.elements.$stepashka.renderEmbeddedContent(embed);
      }
    },

    /**
     * Validate stepashka
     * @memberOf StepashkaController
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

        this.scope.logger.warn('Invalid Stepashka embed code');
        return false;
      }
    },

    /**
     * Add Stepashka rule
     * @memberOf StepashkaController
     * @param {Event} e
     */
    addStepashkaRule: function addStepashkaRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});
