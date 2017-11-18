/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

defineP([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineVideochartNetController(PluginBase, WidgetContentController) {

  /**
   * Define VideochartNet controller
   * @class VideochartNetController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var VideochartNetController = function VideochartNetController() {
  };

  return VideochartNetController.extend('VideochartNetController', {

    /**
     * Set embedded content
     * @memberOf VideochartNetController
     */
    setEmbeddedContent: function setEmbeddedContent() {

      this.view.get$item().renderEmbeddedContent(
          this.model.getPrefs('videochartnetUrl')
      );
    },

    /**
     * Add VideochartNet rule
     * @memberOf VideochartNetController
     * @param {Event} e
     */
    addVideochartNetRule: function addVideochartNetRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});
