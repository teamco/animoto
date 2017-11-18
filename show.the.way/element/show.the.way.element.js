/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

defineP([
  'plugins/plugin.element'
], function defineShowTheWayElement(PluginElement) {

  /**
   * Define ShowTheWay Element
   * @param view
   * @param opts
   * @returns {ShowTheWayElement}
   * @constructor
   * @class ShowTheWayElement
   * @extends PluginElement
   */
  var ShowTheWayElement = function ShowTheWayElement(view, opts) {

    this._config(view, opts, $('<div />')).build({
      $container: opts.$container,
      destroy: true
    });

    this.addCSS('show.the.way', {resource: '/widgets'});

    return this;
  };

  return ShowTheWayElement.extend('ShowTheWayElement', {

    /**
     * Render Embedded content
     * @memberOf ShowTheWayElement
     * @param {string} embed
     */
    renderEmbeddedContent: function renderEmbeddedContent(embed) {

      // Define $embed
      var $embed = $(embed);

      this.addContent($embed[0]);

      require([$embed[1].src]);
    }

  }, PluginElement.prototype);
});
