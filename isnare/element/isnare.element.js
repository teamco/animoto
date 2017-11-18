/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

defineP([
  'plugins/plugin.element'
], function defineIsnareElement(PluginElement) {

  /**
   * Define Isnare Element
   * @param view
   * @param opts
   * @returns {IsnareElement}
   * @constructor
   * @class IsnareElement
   * @extends PluginElement
   */
  var IsnareElement = function IsnareElement(view, opts) {

    this._config(view, opts, $('<div />')).build({
      $container: opts.$container,
      destroy: true
    });

    this.addCSS('isnare', {resource: '/widgets'});

    return this;
  };

  return IsnareElement.extend('IsnareElement', {

    /**
     * Render Embedded content
     * @memberOf IsnareElement
     * @param {string} embed
     */
    renderEmbeddedContent: function renderEmbeddedContent(embed) {
      this.$.append(
          $($(embed)[0])
      );

      require(['//cdn.embedly.com/widgets/platform.js']);
      this.view.controller.clearParentThumbnail();
    }

  }, PluginElement.prototype);

});
