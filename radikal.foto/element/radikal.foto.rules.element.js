/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

defineP([
  'plugins/plugin.element',
  'plugins/rules/widget/widget.base.rules'
], function defineRadikalFotoRulesElement(PluginElement, BaseWidgetRules) {

  /**
   * Define RadikalFoto Rules Element
   * @param view
   * @param opts
   * @returns {RadikalFotoRulesElement}
   * @constructor
   * @class RadikalFotoRulesElement
   * @extends PluginElement
   * @extends BaseWidgetRules
   */
  var RadikalFotoRulesElement = function RadikalFotoRulesElement(view, opts) {

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

  return RadikalFotoRulesElement.extend('RadikalFotoRulesElement', {},
      PluginElement.prototype, BaseWidgetRules.prototype);

});
