/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

defineP([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineMixcloudController(PluginBase, WidgetContentController) {

  /**
   * Define mixcloud controller
   * @class MixcloudController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var MixcloudController = function MixcloudController() {
  };

  return MixcloudController.extend('MixcloudController', {

    /**
     * Set embedded content
     * @memberOf MixcloudController
     */
    setEmbeddedContent: function setEmbeddedContent() {

      /**
       * Get url
       * @type {string|*}
       */
      var url = this.model.getPrefs('mixcloudEmbedCode'),
          embed = this.controller.getEmbedCode(url);

      if (embed) {
        this.view.elements.$mixcloud.renderEmbeddedContent(embed);
      }
    },

    /**
     * Validate mixcloud
     * @memberOf MixcloudController
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

        this.scope.logger.warn('Invalid Mixcloud embed code');
        return false;
      }
    },

    /**
     * Add Mixcloud rule
     * @memberOf MixcloudController
     * @param {Event} e
     */
    addMixcloudRule: function addMixcloudRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});
