/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

define([
  'plugins/plugin.element'
], function defineJwplayerElement(PluginElement) {

  /**
   * Define Jwplayer Element
   * @param view
   * @param opts
   * @returns {JwplayerElement}
   * @constructor
   * @class JwplayerElement
   * @extends PluginElement
   */
  var JwplayerElement = function JwplayerElement(view, opts) {

    this._config(view, opts, $('<div />')).build({
      $container: opts.$container,
      destroy: true
    });

    this.addCSS('jwplayer', {resource: '/widgets'});

    return this;
  };

  return JwplayerElement.extend('JwplayerElement', {

    /**
     * Render Embedded content
     * @memberOf JwplayerElement
     * @param {{
     *      title: string,
     *      script: string,
     *      rtmp: string,
     *      image: string,
     *      width: string,
     *      aspectratio: string,
     *      autostart: boolean
     * }} opts
     */
    renderEmbeddedContent: function renderEmbeddedContent(opts) {

      /**
       * Define local instances
       * @type {JwplayerElement}
       */
      var $jwplayer = this,
          ratio = opts.aspectratio,
          uuid = $jwplayer.$.attr('id') + '-container';

      this.$.append('<div id="' + uuid + '"/>');

      // Remove player rendered before
      $('#' + uuid + '_wrapper').remove();

      if (!opts.rtmp) {
        return false;
      }

      /**
       * Try to parse aspect ratio
       * @type {Array|string|{index: number, input: string}}
       */
      var aspectratio = ratio.match(/[\d(.)\d:\d]/ig) || [];

      aspectratio = aspectratio.join('') || '16:9';

      require([opts.script], function loadJwplayerLib() {

        jwplayer(uuid).setup({
          file: opts.rtmp,
          image: opts.image,
          title: opts.title,
          width: opts.width,
          aspectratio: aspectratio,
          autostart: 'true'
        });
      })
    }

  }, PluginElement.prototype);

});