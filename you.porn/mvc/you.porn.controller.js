/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

define([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineYouPornController(PluginBase, WidgetContentController) {

  /**
   * Define youporn controller
   * @class YouPornController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var YouPornController = function YouPornController() {
  };

  return YouPornController.extend('YouPornController', {

    /**
     * Set embedded content
     * @memberOf YouPornController
     */
    setEmbeddedContent: function setEmbeddedContent() {

      /**
       * Get url
       * @type {string|*}
       */
      var url = this.model.getPrefs('youpornEmbedCode'),
          embed = this.controller.getEmbedCode(url);

      if (embed) {
        this.view.elements.$youporn.renderEmbeddedContent(embed);
      }
    },

    /**
     * Validate youporn
     * @memberOf YouPornController
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

        this.scope.logger.warn('Invalid YouPorn embed code');
        return false;
      }
    },

    /**
     * Add YouPorn rule
     * @memberOf YouPornController
     * @param {Event} e
     */
    addYouPornRule: function addYouPornRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});
