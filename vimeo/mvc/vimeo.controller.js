/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

define([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineVimeoController(PluginBase, WidgetContentController) {

  /**
   * Define vimeo controller
   * @class VimeoController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var VimeoController = function VimeoController() {
  };

  return VimeoController.extend('VimeoController', {

    /**
     * Set embedded content
     * @memberOf VimeoController
     */
    setEmbeddedContent: function setEmbeddedContent() {

      /**
       * Get url
       * @type {string|*}
       */
      var url = this.model.getPrefs('vimeoUrl'),
          embed = this.controller.getEmbedCode(url);

      if (embed) {
        this.view.elements.$vimeo.renderEmbeddedContent(embed);
      }
    },

    /**
     * Validate vimeo
     * @memberOf VimeoController
     * @param {string} url
     * @return {string|boolean}
     */
    getEmbedCode: function getEmbedCode(url) {

      if (!url) {
        this.scope.logger.debug('Initial state');
        return false;
      }

      var mask = this.model.getConfig('mask'),
          regex = this.model.getConfig('regex');

      if (!url.match(regex)) {
        this.scope.logger.warn('Invalid vimeo url');
        return false;
      }

      if (url.match(/iframe/)) {

        /**
         * Embed iframe fix
         * @type {string}
         */
        url = $(url).attr('src');
      }

      return url.replace(regex, mask.replace(/{{videoId}}/g, '$4'));
    },

    /**
     * Add Vimeo rule
     * @memberOf VimeoController
     * @param {Event} e
     */
    addVimeoRule: function addVimeoRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});