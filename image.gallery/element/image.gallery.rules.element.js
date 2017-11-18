/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

defineP([
  'plugins/plugin.element',
  'plugins/rules/widget/widget.base.rules'
], function defineImageGalleryRulesElement(PluginElement, BaseWidgetRules) {

  /**
   * Define ImageGallery Rules Element
   * @param view
   * @param opts
   * @returns {ImageGalleryRulesElement}
   * @constructor
   * @class ImageGalleryRulesElement
   * @extends PluginElement
   * @extends BaseWidgetRules
   */
  var ImageGalleryRulesElement = function ImageGalleryRulesElement(view, opts) {

    this._config(view, opts, $('<div />')).build({
      $container: opts.$container,
      destroy: true
    });

    this.renderBaseRulesData(
        opts.data,
        opts.rules.widget,
        opts.rules.content
    );

    return this;
  };

  return ImageGalleryRulesElement.extend('ImageGalleryRulesElement', {},
      PluginElement.prototype, BaseWidgetRules.prototype);

});