/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

define([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineImageController(PluginBase, WidgetContentController) {

  /**
   * Define image.gallery controller
   * @class ImageGalleryController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var ImageGalleryController = function ImageGalleryController() {
  };

  return ImageGalleryController.extend('ImageGalleryController', {

    /**
     * Set embedded content
     * @memberOf ImageGalleryController
     */
    setEmbeddedContent: function setEmbeddedContent() {

      this.view.elements.$imagegallery.renderEmbeddedContent(
          this.model.getPrefs('imageGalleryUrls'),
          this.model.getPrefs('imageGalleryTexts')
      );
    },

    /**
     * Add ImageGallery rule
     * @memberOf ImageGalleryController
     * @param {Event} e
     */
    addImageGalleryRule: function addImageGalleryRule(e) {

      /**
       * Define $button
       * @type {*|jQuery|HTMLElement}
       */
      var $button = $(e.target),
          scope = this.scope;

      scope.observer.publish(
          scope.eventmanager.eventList.publishRule,
          [$button.attr('value'), this.scope.name]
      );
    }

  }, PluginBase.prototype, WidgetContentController.prototype);
});