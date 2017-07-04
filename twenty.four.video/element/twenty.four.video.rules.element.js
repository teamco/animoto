/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

define([
  'plugins/plugin.element',
  'plugins/rules/widget/widget.base.rules'
], function defineTwentyFourVideoRulesElement(PluginElement, BaseWidgetRules) {

  /**
   * Define TwentyFourVideo Rules Element
   * @param view
   * @param opts
   * @returns {TwentyFourVideoRulesElement}
   * @constructor
   * @class TwentyFourVideoRulesElement
   * @extends PluginElement
   * @extends BaseWidgetRules
   */
  var TwentyFourVideoRulesElement = function TwentyFourVideoRulesElement(view,
      opts) {

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

  return TwentyFourVideoRulesElement.extend('TwentyFourVideoRulesElement', {},
      PluginElement.prototype, BaseWidgetRules.prototype);

});
