/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

import {EmptyPreferencesElement} from '../../empty/element/empty.preferences.element';

/**
 * @class ImagePreferencesElement
 * @extends EmptyPreferencesElement
 * @type {ImagePreferencesElement}
 */
export class ImagePreferencesElement extends EmptyPreferencesElement {

  /**
   * @constructor
   * @param {string} [name]
   * @param {ImageView} view
   * @param opts
   */
  constructor(name, view, opts) {
    super(name || 'ImagePreferencesElement', view, opts);
    this.renderImagePlaceholder();
  }

  /**
   * Define image placeholder
   * @memberOf ImagePreferencesElement
   */
  renderImagePlaceholder() {

    // Get image prefs container
    const $container = $('#content', this.$);
    $container.append('<div class="image-preview"><img src="" alt="Image preview" /></div>');

    // Update image
    const $url = $('textarea[name="imageUrl"]', $container);
    this.updatePreviewImage(this, {target: $url[0]});
  }

  /**
   * Update preview image
   * @memberOf ImagePreferencesElement
   * @param {ModalElement} $modal
   * @param event
   */
  updatePreviewImage($modal, event) {
    const $img = $('div.image-preview img', $modal.$),
        target = event.target,
        view = this.view,
        $item = view.get$item();

    if (!target) {
      view.scope.logger.debug('Undefined target', event);
      return false;
    }

    // Get callback
    const callback = 'update' + target.name.replace(/image/, '');

    if (typeof $item[callback] !== 'function') {
      view.scope.logger.warn('Undefined callback', callback);
      return false;
    }

    $item[callback]($img, target.value);
  }
}