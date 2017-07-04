/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

define([
  'plugins/plugin.element',
  'plugins/rules/widget/widget.base.rules'
], function defineFotoKritikRulesElement(PluginElement, BaseWidgetRules) {

  /**
   * Define FotoKritik Rules Element
   * @param view
   * @param opts
   * @returns {FotoKritikRulesElement}
   * @constructor
   * @class FotoKritikRulesElement
   * @extends PluginElement
   * @extends BaseWidgetRules
   */
  var FotoKritikRulesElement = function FotoKritikRulesElement(view, opts) {

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

  return FotoKritikRulesElement.extend('FotoKritikRulesElement', {},
      PluginElement.prototype, BaseWidgetRules.prototype);

});
