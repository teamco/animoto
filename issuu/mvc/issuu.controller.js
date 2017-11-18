/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

defineP([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineIssuuController(PluginBase, WidgetContentController) {

  /**
   * Define issuu controller
   * @class IssuuController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var IssuuController = function IssuuController() {
  };

  return IssuuController.extend('IssuuController', {

    /**
     * Set embedded content
     * @memberOf IssuuController
     */
    setEmbeddedContent: function setEmbeddedContent() {

      /**
       * Get url
       * @type {string|*}
       */
      var url = this.model.getPrefs('issuuEmbedCode'),
          embed = this.controller.getEmbedCode(url);

      if (embed) {
        this.view.elements.$issuu.renderEmbeddedContent(embed);
      }
    },

    /**
     * Validate issuu
     * @memberOf IssuuController
     * @param {string} embed
     * @return {object|boolean}
     */
    getEmbedCode: function getEmbedCode(embed) {

      if (!embed) {
        this.scope.logger.debug('Initial state');
        return false;
      }

      // Convert to string
      embed += '';

      if (embed.match(/^<iframe/)) {

        return {
          type: 'iframe',
          code: $(embed).attr('src')
        };

      } else if (embed.match(/issuuembed/)) {

        return {
          type: 'embed',
          code: embed
        };

      } else {

        this.scope.logger.warn('Invalid Issuu embed code');
        return false;
      }
    },

    /**
     * Add Issuu rule
     * @memberOf IssuuController
     * @param {Event} e
     */
    addIssuuRule: function addIssuuRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});
