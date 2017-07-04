/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

define([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineEmpflixController(PluginBase, WidgetContentController) {

  /**
   * Define empflix controller
   * @class EmpflixController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var EmpflixController = function EmpflixController() {
  };

  return EmpflixController.extend('EmpflixController', {

    /**
     * Set embedded content
     * @memberOf EmpflixController
     */
    setEmbeddedContent: function setEmbeddedContent() {

      /**
       * Get url
       * @type {string|*}
       */
      var url = this.model.getPrefs('empflixEmbedCode'),
          embed = this.controller.getEmbedCode(url);

      if (embed) {
        this.view.elements.$empflix.renderEmbeddedContent(embed);
      }
    },

    /**
     * Validate empflix
     * @memberOf EmpflixController
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

      if (embed.match(/<iframe/)) {

        return this.scope.view.locateDOMElement(
            $(embed), 'iframe'
        ).src;

      } else {

        this.scope.logger.warn('Invalid Empflix embed code');
        return false;
      }
    },

    /**
     * Add Empflix rule
     * @memberOf EmpflixController
     * @param {Event} e
     */
    addEmpflixRule: function addEmpflixRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});
