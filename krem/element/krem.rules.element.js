/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

defineP([
  'plugins/plugin.element',
  'plugins/rules/widget/widget.base.rules'
], function defineKremRulesElement(PluginElement, BaseWidgetRules) {

  /**
   * Define Krem Rules Element
   * @param view
   * @param opts
   * @returns {KremRulesElement}
   * @constructor
   * @class KremRulesElement
   * @extends PluginElement
   * @extends BaseWidgetRules
   */
  var KremRulesElement = function KremRulesElement(view, opts) {

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

  return KremRulesElement.extend('KremRulesElement', {},
      PluginElement.prototype, BaseWidgetRules.prototype);

});
