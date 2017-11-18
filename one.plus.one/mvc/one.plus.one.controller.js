/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

defineP([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineOnePlusOneController(PluginBase, WidgetContentController) {

  /**
   * Define OnePlusOne controller
   * @class OnePlusOneController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var OnePlusOneController = function OnePlusOneController() {
  };

  return OnePlusOneController.extend('OnePlusOneController', {

    /**
     * Set embedded content
     * @memberOf OnePlusOneController
     */
    setEmbeddedContent: function setEmbeddedContent() {

      /**
       * Get url
       * @type {string|*}
       */
      var url = this.model.getPrefs('oneplusoneEmbedCode'),
          embed = this.controller.getEmbedCode(url);

      if (embed) {
        this.view.elements.$oneplusone.renderEmbeddedContent(embed);
      }
    },

    /**
     * Validate tsnua
     * @memberOf OnePlusOneController
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

      if (embed.match(/^<embed/)) {

        return embed;

      } else {

        this.scope.logger.warn('Invalid OnePlusOne embed code');
        return false;
      }
    },

    /**
     * Add OnePlusOne rule
     * @memberOf OnePlusOneController
     * @param {Event} e
     */
    addOnePlusOneRule: function addOnePlusOneRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});
