/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

defineP([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function definePornhubController(PluginBase, WidgetContentController) {

  /**
   * Define Pornhub controller
   * @class PornhubController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var PornhubController = function PornhubController() {
  };

  return PornhubController.extend('PornhubController', {

    /**
     * Set embedded content
     * @memberOf PornhubController
     */
    setEmbeddedContent: function setEmbeddedContent() {

      /**
       * Get url
       * @type {string|*}
       */
      var url = this.model.getPrefs('pornhubUrl'),
          embed = this.controller.getEmbedCode(url);

      if (embed) {
        this.view.elements.$pornhub.renderEmbeddedContent(embed);
      }
    },

    /**
     * Validate PornHub
     * @memberOf PornhubController
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
        url = $(url).attr('src');
      }

      var mask = this.model.getConfig('mask'),
          regex = url.match(
              this.model.getConfig('regex')
          );

      if (!regex) {
        this.scope.logger.warn('Invalid PornHub url');
        return false;
      }

      return mask.replace(/\{id}/g, regex[0]);
    },

    /**
     * Add Pornhub rule
     * @memberOf PornhubController
     * @param {Event} e
     */
    addPornhubRule: function addPornhubRule(e) {

      /**
       * Define $button
       * @type {*|jQuery|HTMLElement}
       */
      var $button = $(e.target),
          scope = this.scope;

      scope.observer.publish(
          scope.eventManager.eventList.publishRule,
          [$button.attr('value'), this.scope.name]
      );
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});
