/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

defineP([
  'plugins/plugin.controller',
  'plugins/widgets/widget.content.controller'
], function defineImageController(PluginBase, WidgetContentController) {

  /**
   * Define image controller
   * @class ImageController
   * @extends PluginController
   * @extends WidgetContentController
   * @constructor
   */
  var ImageController = function ImageController() {
  };

  return ImageController.extend('ImageController', {

    /**
     * Check rendering content
     * @memberOf ImageController
     */
    checkEmbeddedContent: function checkEmbeddedContent() {

      /**
       * Define event
       * @type {splitEmbeddedContent|setEmbeddedContent|string}
       */
      var event = this.model.getPrefs('imageSplitContent') ?
          this.eventManager.eventList.splitEmbeddedContent :
          this.eventManager.eventList.analyzeEmbeddedContent;

      this.observer.publish(event);
    },

    /**
     * Set embedded content
     * @memberOf ImageController
     */
    setEmbeddedContent: function setEmbeddedContent() {

      this.view.get$item().renderEmbeddedContent({
        url: this.model.getPrefs('imageUrl'),
        text: this.model.getPrefs('imageText'),
        repeatX: this.model.getPrefs('imageRepeatX'),
        repeatY: this.model.getPrefs('imageRepeatY'),
        stretch: this.model.getPrefs('imageStretch'),
        updateScaleHorizontal: this.model.getPrefs('imageScaleHorizontal'),
        updateScaleVertical: this.model.getPrefs('imageScaleVertical'),
        updateBlur: this.model.getPrefs('imageBlur'),
        updateBrightness: this.model.getPrefs('imageBrightness'),
        updateContrast: this.model.getPrefs('imageContrast'),
        updateGrayscale: this.model.getPrefs('imageGrayscale'),
        updateHueRotate: this.model.getPrefs('imageHueRotate'),
        updateInvert: this.model.getPrefs('imageInvert'),
        updateOpacity: this.model.getPrefs('imageOpacity'),
        updateSaturate: this.model.getPrefs('imageSaturate'),
        updateSepia: this.model.getPrefs('imageSepia'),
        updateZoom: this.model.getPrefs('imageZoom'),
        updateRotate: this.model.getPrefs('imageRotate'),
        updateSkewY: this.model.getPrefs('imageSkewY'),
        updateSkewX: this.model.getPrefs('imageSkewX'),
        updateDropShadow: this.model.getPrefs('imageDropShadow')
      });
    },

    /**
     * Split embedded content
     * @memberOf ImageController
     * @param subscribers
     * @param {boolean|*} simulate
     */
    splitEmbeddedContent: function splitEmbeddedContent(subscribers, simulate) {

      subscribers = this.base.define(
          subscribers,
          this.controller.getSubscribers(
              this.eventManager.eventList.splitEmbeddedContent
          )
      );

      this.view.get$item().renderSplitEmbeddedContent({
        url: this.model.getPrefs('imageUrl'),
        text: this.model.getPrefs('imageText'),
        repeatX: this.model.getPrefs('imageRepeatX'),
        repeatY: this.model.getPrefs('imageRepeatY'),
        stretch: this.model.getPrefs('imageStretch'),
        splitTo: subscribers.length,
        simulate: this.base.defineBoolean(simulate, false, true)
      });
    },

    /**
     * Update preview
     * @memberOf ImageController
     * @param {Event} event
     */
    updatePreview: function updatePreview(event) {

      /**
       * Get scope
       * @type {Image|*}
       */
      var scope = this.scope,
          $referrer = scope.referrer,
          $modal = $referrer.view.get$modal();

      /**
       * Get prefs
       * @type {ImagePreferencesElement}
       */
      var $preferences = scope.view.elements.$preferences;

      if ($preferences) {
        $preferences.updatePreviewImage(
            $modal,
            event
        );
      }
    },

    /**
     * Add Image rule
     * @memberOf ImageController
     * @param {Event} e
     */
    addImageRule: function addImageRule(e) {

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