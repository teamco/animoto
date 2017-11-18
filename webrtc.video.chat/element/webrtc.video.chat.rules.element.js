/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

defineP([
  'plugins/plugin.element',
  'plugins/rules/widget/widget.base.rules'
], function defineWebrtcVideoChatRulesElement(PluginElement, BaseWidgetRules) {

  /**
   * Define WebrtcVideoChat Rules Element
   * @param view
   * @param opts
   * @returns {WebrtcVideoChatRulesElement}
   * @constructor
   * @class WebrtcVideoChatRulesElement
   * @extends PluginElement
   * @extends BaseWidgetRules
   */
  var WebrtcVideoChatRulesElement = function WebrtcVideoChatRulesElement(view,
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

  return WebrtcVideoChatRulesElement.extend('WebrtcVideoChatRulesElement', {},
      PluginElement.prototype, BaseWidgetRules.prototype);

});
