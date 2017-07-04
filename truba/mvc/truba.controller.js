/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

define([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineTrubaController(PluginBase, WidgetContentController) {

  /**
   * Define truba controller
   * @class TrubaController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var TrubaController = function TrubaController() {
  };

  return TrubaController.extend('TrubaController', {

    /**
     * Set embedded content
     * @memberOf TrubaController
     */
    setEmbeddedContent: function setEmbeddedContent() {

      /**
       * Get url
       * @type {string|*}
       */
      var url = this.model.getPrefs('trubaUrl'),
          embed = this.controller.getEmbedCode(url);

      if (embed) {
        this.view.elements.$truba.renderEmbeddedContent(embed);
      }
    },

    /**
     * Validate truba
     * @memberOf TrubaController
     * @param {string} url
     * @return {string|boolean}
     */
    getEmbedCode: function getEmbedCode(url) {

      if (!url) {
        this.scope.logger.debug('Initial state');
        return false;
      }

      // Convert to string
      url += '';

      if (url.match(/iframe/)) {
        url = $(url).attr('src');
      }

      var mask = this.model.getConfig('mask'),
          regex = url.match(
              this.model.getConfig('regex')
          );

      if (!regex || url.match(/^\[/)) {
        this.scope.logger.warn('Invalid Truba url');
        return false;
      }

      return mask.replace(/\{id}/g, regex[0]);
    },

    /**
     * Add Truba rule
     * @memberOf TrubaController
     * @param {Event} e
     */
    addTrubaRule: function addTrubaRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});
