/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

defineP([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function definePhotobucketController(PluginBase, WidgetContentController) {

  /**
   * Define photobucket controller
   * @class PhotobucketController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var PhotobucketController = function PhotobucketController() {
  };

  return PhotobucketController.extend('PhotobucketController', {

    /**
     * Set embedded content
     * @memberOf PhotobucketController
     */
    setEmbeddedContent: function setEmbeddedContent() {
      this.view.elements.$photobucket.renderEmbeddedContent(
          this.model.getPrefs('photobucketEmbedCode')
      );
    },

    /**
     * Add Photobucket rule
     * @memberOf PhotobucketController
     * @param {Event} e
     */
    addPhotobucketRule: function addPhotobucketRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});
