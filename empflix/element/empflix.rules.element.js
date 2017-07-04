/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

define([
  'plugins/plugin.element',
  'plugins/rules/widget/widget.base.rules'
], function defineEmpflixRulesElement(PluginElement, BaseWidgetRules) {

  /**
   * Define Empflix Rules Element
   * @param view
   * @param opts
   * @returns {EmpflixRulesElement}
   * @constructor
   * @class EmpflixRulesElement
   * @extends PluginElement
   * @extends BaseWidgetRules
   */
  var EmpflixRulesElement = function EmpflixRulesElement(view, opts) {

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

  return EmpflixRulesElement.extend('EmpflixRulesElement', {},
      PluginElement.prototype, BaseWidgetRules.prototype);

});
