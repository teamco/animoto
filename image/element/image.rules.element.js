/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

define([
  'plugins/plugin.element',
  'plugins/rules/widget/widget.base.rules'
], function defineImageRulesElement(PluginElement, BaseWidgetRules) {

  /**
   * Define Image Rules Element
   * @param view
   * @param opts
   * @returns {ImageRulesElement}
   * @constructor
   * @class ImageRulesElement
   * @extends PluginElement
   * @extends BaseWidgetRules
   */
  var ImageRulesElement = function ImageRulesElement(view, opts) {

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

  return ImageRulesElement.extend('ImageRulesElement', {},
      PluginElement.prototype, BaseWidgetRules.prototype);

});