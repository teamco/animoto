/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

defineP([
  'plugins/plugin.element'
], function defineDeviantArtElement(PluginElement) {

  /**
   * Define DeviantArt Element
   * @param view
   * @param opts
   * @returns {DeviantArtElement}
   * @constructor
   * @class DeviantArtElement
   * @extends PluginElement
   */
  var DeviantArtElement = function DeviantArtElement(view, opts) {

    this._config(view, opts, $('<div />')).build({
      $container: opts.$container,
      destroy: true
    });

    this.addCSS('deviant.art', {resource: '/widgets'});

    return this;
  };

  return DeviantArtElement.extend('DeviantArtElement', {

    /**
     * Render Embedded content
     * @memberOf DeviantArtElement
     * @param {string} embed
     */
    renderEmbeddedContent: function renderEmbeddedContent(embed) {

      if (!embed) {
        return false;
      }

      this.$.append(
          this.renderObject($(embed)[0])
      );
    }

  }, PluginElement.prototype);

});
