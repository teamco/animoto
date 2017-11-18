/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

defineP([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineFunnyOrDieController(PluginBase, WidgetContentController) {

  /**
   * Define funnyordie controller
   * @class FunnyOrDieController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var FunnyOrDieController = function FunnyOrDieController() {
  };

  return FunnyOrDieController.extend('FunnyOrDieController', {

        /**
         * Set embedded content
         * @memberOf FunnyOrDieController
         */
        setEmbeddedContent: function setEmbeddedContent() {

          /**
           * Get url
           * @type {string|*}
           */
          var url = this.model.getPrefs('funnyordieUrl'),
              embed = this.controller.getEmbedCode(url);

          if (embed) {
            this.view.elements.$funnyordie.renderEmbeddedContent(embed);
          }
        },

        /**
         * Validate funnyordie
         * @memberOf FunnyOrDieController
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
              regex = url.match(this.model.getConfig('regex'));

          return mask.replace(/\{id}/g, regex[1]);
        },

        /**
         * Add FunnyOrDie rule
         * @memberOf FunnyOrDieController
         * @param {Event} e
         */
        addFunnyOrDieRule: function addFunnyOrDieRule(e) {
          this.addWidgetRule(e, this.scope.name);
        }

      },
      PluginBase.prototype,
      WidgetContentController.prototype
  );
});
