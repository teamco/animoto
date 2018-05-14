/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

defineP([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineGooglePlusController(PluginBase, WidgetContentController) {

  /**
   * Define GooglePlus controller
   * @class GooglePlusController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var GooglePlusController = function GooglePlusController() {
  };

  return GooglePlusController.extend('GooglePlusController', {

    /**
     * Set embedded content
     * @memberOf GooglePlusController
     */
    setEmbeddedContent: function setEmbeddedContent() {

      this.view.elements.$googleplus.renderEmbeddedContent(
          this.model.getPrefs('googlePlusApi'),
          this.model.getPrefs('googlePlusUrl')
      );
    },

    /**
     * Add GooglePlus rule
     * @memberOf GooglePlusController
     * @param {Event} e
     */
    addGooglePlusRule: function addGooglePlusRule(e) {

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
