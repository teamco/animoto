/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

defineP([
  'plugins/plugin.element',
  'plugins/rules/widget/widget.base.rules'
], function defineSportboxRuRulesElement(PluginElement, BaseWidgetRules) {

  /**
   * Define SportboxRu Rules Element
   * @param view
   * @param opts
   * @returns {SportboxRuRulesElement}
   * @constructor
   * @class SportboxRuRulesElement
   * @extends PluginElement
   * @extends BaseWidgetRules
   */
  var SportboxRuRulesElement = function SportboxRuRulesElement(view, opts) {

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

  return SportboxRuRulesElement.extend(
      'SportboxRuRulesElement', {},
      PluginElement.prototype,
      BaseWidgetRules.prototype
  );
});
