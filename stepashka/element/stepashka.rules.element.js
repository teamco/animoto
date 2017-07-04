/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

define([
  'plugins/plugin.element',
  'plugins/rules/widget/widget.base.rules'
], function defineStepashkaRulesElement(PluginElement, BaseWidgetRules) {

  /**
   * Define Stepashka Rules Element
   * @param view
   * @param opts
   * @returns {StepashkaRulesElement}
   * @constructor
   * @class StepashkaRulesElement
   * @extends PluginElement
   * @extends BaseWidgetRules
   */
  var StepashkaRulesElement = function StepashkaRulesElement(view, opts) {

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

  return StepashkaRulesElement.extend('StepashkaRulesElement', {},
      PluginElement.prototype, BaseWidgetRules.prototype);

});
