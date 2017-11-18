/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

defineP([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function definePornHostController(PluginBase, WidgetContentController) {

  /**
   * Define pornhost controller
   * @class PornHostController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var PornHostController = function PornHostController() {
  };

  return PornHostController.extend('PornHostController', {

    /**
     * Set embedded content
     * @memberOf PornHostController
     */
    setEmbeddedContent: function setEmbeddedContent() {

      /**
       * Get url
       * @type {string|*}
       */
      var url = this.model.getPrefs('pornhostEmbedCode'),
          embed = this.controller.getEmbedCode(url);

      if (embed) {
        this.view.elements.$pornhost.renderEmbeddedContent(embed);
      }
    },

    /**
     * Validate pornhost
     * @memberOf PornHostController
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

        this.scope.logger.warn('Invalid PornHost embed code');
        return false;
      }
    },

    /**
     * Add PornHost rule
     * @memberOf PornHostController
     * @param {Event} e
     */
    addPornHostRule: function addPornHostRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});
