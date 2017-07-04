/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

define([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineDailyMotionController(PluginBase, WidgetContentController) {

  /**
   * Define dailymotion controller
   * @class DailyMotionController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var DailyMotionController = function DailyMotionController() {
  };

  return DailyMotionController.extend('DailyMotionController', {

    /**
     * Set embedded content
     * @memberOf DailyMotionController
     */
    setEmbeddedContent: function setEmbeddedContent() {

      /**
       * Get url
       * @type {string|*}
       */
      var url = this.model.getPrefs('dailymotionUrl'),
          embed = this.controller.getEmbedCode(url);

      if (embed) {
        this.view.elements.$dailymotion.renderEmbeddedContent(embed);
      }
    },

    /**
     * Validate dailymotion
     * @memberOf DailyMotionController
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
        return $(url)[0].src;
      }

      var mask = this.model.getConfig('mask'),
          regex = url.match(
              this.model.getConfig('regex')
          );

      return mask.replace(/\{id}/g, regex[1]);
    },

    /**
     * Add DailyMotion rule
     * @memberOf DailyMotionController
     * @param {Event} e
     */
    addDailyMotionRule: function addDailyMotionRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});
