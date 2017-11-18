/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

defineP([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineRevisionController(PluginBase, WidgetContentController) {

  /**
   * Define revision controller
   * @class RevisionController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var RevisionController = function RevisionController() {
  };

  return RevisionController.extend('RevisionController', {

    /**
     * Set embedded content
     * @memberOf RevisionController
     */
    setEmbeddedContent: function setEmbeddedContent() {

      /**
       * Get url
       * @type {string|*}
       */
      var url = this.model.getPrefs('revisionEmbedCode'),
          embed = this.controller.getEmbedCode(url);

      if (embed) {
        this.view.elements.$revision.renderEmbeddedContent(embed);
      }
    },

    /**
     * Validate revision
     * @memberOf RevisionController
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

        this.scope.logger.warn('Invalid Revision embed code');
        return false;
      }
    },

    /**
     * Add Revision rule
     * @memberOf RevisionController
     * @param {Event} e
     */
    addRevisionRule: function addRevisionRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});
