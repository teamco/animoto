/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

defineP([
  'plugins/plugin.element',
  'plugins/rules/widget/widget.base.rules'
], function defineMlkshkRulesElement(PluginElement, BaseWidgetRules) {

  /**
   * Define Mlkshk Rules Element
   * @param view
   * @param opts
   * @returns {MlkshkRulesElement}
   * @constructor
   * @class MlkshkRulesElement
   * @extends PluginElement
   * @extends BaseWidgetRules
   */
  var MlkshkRulesElement = function MlkshkRulesElement(view, opts) {

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

  return MlkshkRulesElement.extend('MlkshkRulesElement', {},
      PluginElement.prototype, BaseWidgetRules.prototype);

});
