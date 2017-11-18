/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

defineP([
  'plugins/plugin.element'
], function defineSmotriComElement(PluginElement) {

  /**
   * Define SmotriCom Element
   * @param view
   * @param opts
   * @returns {SmotriComElement}
   * @constructor
   * @class SmotriComElement
   * @extends PluginElement
   */
  var SmotriComElement = function SmotriComElement(view, opts) {

    this._config(view, opts, $('<div />')).build({
      $container: opts.$container,
      destroy: true
    });

    this.addCSS('smotri.com', {resource: '/widgets'});

    return this;
  };

  return SmotriComElement.extend('SmotriComElement', {

    /**
     * Render Embedded content
     * @memberOf SmotriComElement
     * @param {string} embed
     */
    renderEmbeddedContent: function renderEmbeddedContent(embed) {
      this.$.append(
          this.renderObject(embed)
      );
    }

  }, PluginElement.prototype);

});
