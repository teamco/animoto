/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

defineP([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineEspresoTvController(PluginBase, WidgetContentController) {

  /**
   * Define espresotv controller
   * @class EspresoTvController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var EspresoTvController = function EspresoTvController() {
  };

  return EspresoTvController.extend('EspresoTvController', {

    /**
     * Set embedded content
     * @memberOf EspresoTvController
     */
    setEmbeddedContent: function setEmbeddedContent() {

      /**
       * Get url
       * @type {string|*}
       */
      var url = this.model.getPrefs('espresotvUrl'),
          embed = this.controller.getEmbedCode(url);

      if (embed) {
        this.view.elements.$espresotv.renderEmbeddedContent(embed);
      }
    },

    /**
     * Validate espresotv
     * @memberOf EspresoTvController
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
        this.scope.logger.warn('Invalid espresotv url');
        return false;
      }

      if (url.match(/iframe/)) {

        /**
         * Embed iframe fix
         * @type {string}
         */
        url = $(url).attr('src');
      }

      return url.replace(regex, mask.replace(/{videoId}/g, '$1')).
          replace(/embed\/embed/, 'embed');
    },

    /**
     * Add EspresoTv rule
     * @memberOf EspresoTvController
     * @param {Event} e
     */
    addEspresoTvRule: function addEspresoTvRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});
