/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

define([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineCollegeHumorController(PluginBase, WidgetContentController) {

  /**
   * Define collegehumor controller
   * @class CollegeHumorController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var CollegeHumorController = function CollegeHumorController() {
  };

  return CollegeHumorController.extend('CollegeHumorController', {

    /**
     * Set embedded content
     * @memberOf CollegeHumorController
     */
    setEmbeddedContent: function setEmbeddedContent() {

      /**
       * Get url
       * @type {string|*}
       */
      var url = this.model.getPrefs('collegehumorEmbedCode'),
          embed = this.controller.getEmbedCode(url);

      if (embed) {
        this.view.elements.$collegehumor.renderEmbeddedContent(embed);
      }
    },

    /**
     * Validate collegehumor
     * @memberOf CollegeHumorController
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

        this.scope.logger.warn('Invalid CollegeHumor embed code');
        return false;
      }
    },

    /**
     * Add CollegeHumor rule
     * @memberOf CollegeHumorController
     * @param {Event} e
     */
    addCollegeHumorRule: function addCollegeHumorRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});
