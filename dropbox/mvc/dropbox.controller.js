/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

defineP([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineDropboxController(PluginBase, WidgetContentController) {

  /**
   * Define Dropbox controller
   * @class DropboxController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var DropboxController = function DropboxController() {
  };

  return DropboxController.extend('DropboxController', {

    /**
     * Set embedded content
     * @memberOf DropboxController
     */
    setEmbeddedContent: function setEmbeddedContent() {

      this.view.elements.$dropbox.renderEmbeddedContent({
        url: this.model.getPrefs('dropboxUrl'),
        download: this.model.getPrefs('dropboxDownload')
      });
    },

    /**
     * Set hidden preferences
     * @memberOf DropboxController
     * @param {string} preference
     * @param value
     */
    setHiddenPreferences: function setHiddenPreferences(preference, value) {
      this.model.setPrefs(preference, value);

      this.scope.observer.publish(
          this.scope.eventManager.eventList.transferContentPreferences,
          [preference, value]
      );
    },

    /**
     * Add Dropbox rule
     * @memberOf DropboxController
     * @param {Event} e
     */
    addDropboxRule: function addDropboxRule(e) {
      this.addWidgetRule(e, this.scope.name);
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});