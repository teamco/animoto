/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

defineP([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineAvatarController(PluginBase, WidgetContentController) {

  /**
   * Define avatar controller
   * @class AvatarController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var AvatarController = function AvatarController() {
  };

  return AvatarController.extend('AvatarController', {

    /**
     * Set embedded content
     * @memberOf AvatarController
     */
    setEmbeddedContent: function setEmbeddedContent() {
      this.view.elements.$avatar.renderEmbeddedContent(
          this.model.getPrefs('avatarCoordinateX'),
          this.model.getPrefs('avatarCoordinateY')
      );
    },

    /**
     * Update coordinates
     * @memberOf AvatarController
     * @param {number} x
     * @param {number} y
     */
    updateCoordinates: function updateCoordinates(x, y) {
      this.model.setAvatarCoordinateX(x);
      this.model.setAvatarCoordinateY(y);
      this.observer.publish(
          this.eventManager.eventList.alternativeSaveAllPreferences
      );
    },

    /**
     * Add Avatar rule
     * @memberOf AvatarController
     * @param {Event} e
     */
    addAvatarRule: function addAvatarRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});