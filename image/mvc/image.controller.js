/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:03 AM
 */

import {EmptyController} from '../../empty/mvc/empty.controller';

/**
 * @class ImageController
 * @extends EmptyController
 */
export class ImageController extends EmptyController {

  /**
   * @param {string} [name]
   * @param {Image} scope
   * @constructor
   */
  constructor(name, scope) {
    super(name || 'ImageController', scope);
  }

  /**
   * Check rendering content
   * @memberOf ImageController
   */
  checkEmbeddedContent() {

    /**
     * Define event
     * @type {splitEmbeddedContent|setEmbeddedContent|string}
     */
    const event = this.model.getPrefs('imageSplitContent') ?
        this.eventManager.eventList.splitEmbeddedContent :
        this.eventManager.eventList.analyzeEmbeddedContent;

    this.observer.publish(event);
  }

  /**
   * Set embedded content
   * @memberOf ImageController
   */
  setEmbeddedContent() {
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
      updateDropShadow: this.model.getPrefs('imageDropShadow'),
      updateBorder: this.model.getPrefs('imageBorder'),
      updateRadius: this.model.getPrefs('imageRadius')
    });
  }

  /**
   * Split embedded content
   * @memberOf ImageController
   * @param subscribers
   * @param {boolean|*} simulate
   */
  splitEmbeddedContent(subscribers, simulate) {
    subscribers = subscribers || this.controller.getSubscribers(this.eventManager.eventList.splitEmbeddedContent);
    this.view.get$item().renderSplitEmbeddedContent({
      url: this.model.getPrefs('imageUrl'),
      text: this.model.getPrefs('imageText'),
      repeatX: this.model.getPrefs('imageRepeatX'),
      repeatY: this.model.getPrefs('imageRepeatY'),
      stretch: this.model.getPrefs('imageStretch'),
      splitTo: subscribers.length,
      simulate: this.utils.setBoolean(simulate, false)
    });
  }

  /**
   * Update preview
   * @memberOf ImageController
   * @param {Event} event
   */
  updatePreview(event) {

    /**
     * Get scope
     * @type {Image|{referrer, view}}
     */
    const scope = this.scope;
    const $referrer = scope.referrer,
        $modal = $referrer.view.get$modal();

    /**
     * Get prefs
     * @type {ImagePreferencesElement}
     */
    const $preferences = scope.view.elements.$preferences;

    if ($preferences) {
      $preferences.updatePreviewImage($modal, event);
    }
  }
}