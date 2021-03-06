/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

import {EmptyElement} from '../../empty/element/empty.element';
import {LibCss} from '../../../../modules/base/Css';

/**
 * @class ImageElement
 * @extends EmptyElement
 * @type {ImageElement}
 */
export class ImageElement extends EmptyElement {

  /**
   * @constructor
   * @param {string} [name]
   * @param view
   * @param opts
   */
  constructor(name, view, opts) {
    super(name || 'ImageElement', view, opts);
  }

  /**
   * @memberOf PageTabsElement
   * @param view
   * @param opts
   */
  configElement(view, opts) {
    this._config(view, opts, window.$('<div />')).build(opts);

    /**
     * Define element
     * @property ImageElement
     * @type {boolean}
     */
    this.image = true;
  }

  renderAsImage(opts) {
    if (!this.image) {
      // Should be rendered as background
      return false;
    }

    /**
     * Define $img
     * @type {*|jQuery}
     */
    this.$img = window.$('<img />').attr({
      src: opts.url,
      alt: opts.text,
      title: opts.text
    });

    if (opts.stretch) {
      this.$img.css({
        width: '100%',
        height: '100%'
      });
    }

    this.empty();
    this.setHtml(this.$img);
  }

  renderAsBackground(opts, repeat) {
    if (this.image) {
      // Should be rendered as image
      return false;
    }
    this.$.css({
      height: '100%',
      backgroundImage: `url('${opts.url}')`,
      backgroundRepeat: repeat,
      backgroundSize: opts.stretch ? 'cover' : 'auto'
    });
  }

  /**
   * Render Embedded content
   * @memberOf ImageElement
   * @param {{repeatX, repeatY, text, stretch, [url]}} opts
   */
  renderEmbeddedContent(opts) {
    if (!opts.url) {
      return false;
    }

    /**
     * Define bg repeat
     * @type {string}
     */
    let repeat = 'no-repeat';

    if (opts.repeatX) {
      repeat = 'repeat-x';
      this.image = false;
    }

    if (opts.repeatY) {
      repeat = 'repeat-y';
      this.image = false;
    }

    if (opts.repeatX && opts.repeatY) {
      repeat = 'repeat';
      this.image = false;
    }

    this.renderAsImage(opts);
    this.renderAsBackground(opts, repeat);

    this.view.controller.clearParentThumbnail();
    this.updateFilters(opts);
  }

  /**
   * Define update filters
   * @memberOf ImageElement
   * @param {object} opts
   */
  updateFilters(opts) {

    // Get image
    const $img = window.$('img', this.$);

    if (!$img.length) {
      return false;
    }

    for (let index in opts) {
      if (Object.prototype.hasOwnProperty.call(opts, index)) {
        if (index.match(/^update/)) {

          /**
           * Define callback
           * @type {function}
           */
          const callback = this[index];

          typeof callback === 'function' ?
              callback.call(this, $img, opts[index]) :
              this.view.scope.logger.warn('Undefined callback', index);
        }
      }
    }
  }

  /**
   * Render Embedded content
   * @memberOf ImageElement
   * @param {{}} opts
   */
  renderSplitEmbeddedContent(opts) {
    if (!opts.url) {
      return false;
    }

    /**
     * Define scope
     * @type {ImageElement}
     */
    const $image = this;

    /**
     * Set img dimensions
     * @param {Event|{target: {width, height}} e
     * @private
     */
    function _setDimensions(e) {

      /**
       * Calculate image proportions
       * @type {number}
       */
      const proportions = ($image.$.height() * 100) / e.target.height,
          width = e.target.width * (proportions / 100);

      $image.$img.css({
        height: '100%',
        width: width,
        marginLeft: opts.simulate ? -(width / (opts.splitTo + 1)) : 0
      });
    }

    /**
     * Load image
     * @constant img
     * @type {HTMLImageElement, {onerror}}
     */
    const img = new Image();

    img.src = opts.url;
    img.onload = _setDimensions;
    img.onerror = () => $image.view.scope.logger.warn('Unable to load image', img);

    /**
     * Define $img
     * @type {*|jQuery}
     */
    $image.$img = window.$('<img />').attr({
      src: img.src,
      alt: opts.text,
      title: opts.text
    });

    $image.setHtml($image.$img);

    return false;
  }

  /**
   * Update ScaleX
   * @memberOf ImageElement
   * @param $img
   * @param scale
   */
  updateScaleHorizontal($img, scale) {

    // Get css
    const css = this.view.utils.css;

    css.defineCss('transform', $img, 'scaleX({0})'.replace(/\{0}/, scale));
    LibCss.resetMatrix($img);
  }

  /**
   * Update ScaleY
   * @memberOf ImageElement
   * @param $img
   * @param scale
   */
  updateScaleVertical($img, scale) {

    // Get css
    const css = this.view.utils.css;

    css.defineCss('transform', $img, 'scaleY({0})'.replace(/\{0}/, scale));
    LibCss.resetMatrix($img);
  }

  /**
   * Update blur
   * @memberOf ImageElement
   * @param $img
   * @param blur
   */
  updateBlur($img, blur) {
    this.view.utils.css.defineCss('filter', $img, 'blur({0}px)'.replace(/\{0}/, blur));
  }

  /**
   * Update saturate
   * @memberOf ImageElement
   * @param $img
   * @param saturate
   */
  updateSaturate($img, saturate) {
    this.view.utils.css.defineCss('filter', $img, 'saturate({0})'.replace(/\{0}/, saturate));
  }

  /**
   * Update contrast
   * @memberOf ImageElement
   * @param $img
   * @param contrast
   */
  updateContrast($img, contrast) {
    this.view.utils.css.defineCss('filter', $img, 'contrast({0})'.replace(/\{0}/, contrast));
  }

  /**
   * Update brightness
   * @memberOf ImageElement
   * @param $img
   * @param brightness
   */
  updateBrightness($img, brightness) {
    this.view.utils.css.defineCss('filter', $img, 'brightness({0})'.replace(/\{0}/, brightness));
  }

  /**
   * Update grayscale
   * @memberOf ImageElement
   * @param $img
   * @param grayscale
   */
  updateGrayscale($img, grayscale) {
    this.view.utils.css.defineCss('filter', $img, 'grayscale({0})'.replace(/\{0}/, grayscale));
  }

  /**
   * Update hue-rotate
   * @memberOf ImageElement
   * @param $img
   * @param hueRotate
   */
  updateHueRotate($img, hueRotate) {
    this.view.utils.css.defineCss('filter', $img, 'hue-rotate({0}deg)'.replace(/\{0}/, hueRotate));
  }

  /**
   * Update invert
   * @memberOf ImageElement
   * @param $img
   * @param invert
   */
  updateInvert($img, invert) {
    this.view.utils.css.defineCss('filter', $img, 'invert({0})'.replace(/\{0}/, invert));
  }

  /**
   * Update opacity
   * @memberOf ImageElement
   * @param $img
   * @param opacity
   */
  updateOpacity($img, opacity) {
    $img.css({opacity: parseInt(opacity, 10) / 100});
  }

  /**
   * Update border
   * @memberOf ImageElement
   * @param $img
   * @param border
   */
  updateBorder($img, border) {
    $img.css({border: `${parseFloat(border)}rem solid #333`});
  }

  /**
   * Update radius
   * @memberOf ImageElement
   * @param $img
   * @param radius
   */
  updateRadius($img, radius) {
    $img.css({borderRadius: `${parseFloat(radius)}%`});
  }

  /**
   * Update sepia
   * @memberOf ImageElement
   * @param $img
   * @param sepia
   */
  updateSepia($img, sepia) {
    this.view.utils.css.defineCss('filter', $img, 'sepia({0})'.replace(/\{0}/, sepia));
  }

  /**
   * Update drop shadow
   * @memberOf ImageElement
   * @param $img
   * @param shadow
   */
  updateDropShadow($img, shadow) {
    $img.css({boxShadow: 'rgb(0, 0, 0) 0 0 {0}px'.replace(/\{0}/, shadow)});
  }

  /**
   * Update zoom
   * @memberOf ImageElement
   * @param $img
   * @param zoom
   */
  updateZoom($img, zoom) {
    $img.css({zoom: zoom + '%'});
  }

  /**
   * Update rotate
   * @memberOf ImageElement
   * @param $img
   * @param rotate
   */
  updateRotate($img, rotate) {

    // Get css
    const css = this.view.utils.css;

    css.defineCss('transform', $img, 'rotate({0}deg)'.replace(/\{0}/, rotate));
    LibCss.resetMatrix($img);
  }

  /**
   * Update SkewY
   * @memberOf ImageElement
   * @param $img
   * @param y
   */
  updateSkewY($img, y) {

    // Get css
    const css = this.view.utils.css;

    css.defineCss('transform', $img, 'skewY({0}deg)'.replace(/\{0}/, y));
    LibCss.resetMatrix($img);
  }

  /**
   * Update SkewX
   * @memberOf ImageElement
   * @param $img
   * @param x
   */
  updateSkewX($img, x) {

    // Get css
    const css = this.view.utils.css;

    css.defineCss('transform', $img, 'skewX({0}deg)'.replace(/\{0}/, x));
    LibCss.resetMatrix($img);
  }

  /**
   * Update url
   * @memberOf ImageElement
   * @param $img
   * @param {string} src
   */
  updateUrl($img, src) {

    /**
     * Define range activation
     * @param {boolean} activate
     * @private
     */
    function _activateRange(activate) {

      // Get range inputs
      let $range = window.$('input[type="range"]'),
          i = 0, l = $range.length;

      $range.prop({disabled: !activate});

      if (activate) {
        for (; i < l; i++) {
          window.$($range[i]).trigger('blur.range');
        }
      }
    }

    const $element = this;

    $img.on('load', () => {
      $img.show();
      _activateRange(true);
    });

    $img.on('error', () => {
      if (src && src.length > 0) {
        $element.view.scope.logger.warn('Unable to load image', arguments);
      }
      _activateRange(false);
    });

    if (src && src.length > 0) {
      $img.attr({src: src});
    }
  }
}