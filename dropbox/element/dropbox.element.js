/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

defineP([
  'plugins/plugin.element'
], function defineDropboxElement(PluginElement) {

  /**
   * Define Dropbox Element
   * @param view
   * @param opts
   * @returns {DropboxElement}
   * @constructor
   * @class DropboxElement
   * @extends PluginElement
   */
  var DropboxElement = function DropboxElement(view, opts) {

    this._config(view, opts, $('<div />')).build({
      $container: opts.$container,
      destroy: true
    });

    this.addCSS('dropbox', {resource: '/widgets'});

    /**
     * Download
     * @memberOf DropboxElement
     * @type {string}
     */
    this.download = 'Download';

    return this;
  };

  return DropboxElement.extend('DropboxElement', {

    /**
     * Render Embedded content
     * @memberOf DropboxElement
     * @param {{url: string|*, download: boolean}} opts
     */
    renderEmbeddedContent: function renderEmbeddedContent(opts) {

      if (opts.url) {

        this.empty();

        if (opts.download) {

          this.$.append(
              $('<a />').addClass('download').attr({
                href: opts.url,
                title: opts.name || this.download
              }).text(opts.name || this.download)
          );

        } else {
          // TODO verify file type
        }

        return this;
      }

      if (!window.Dropbox) {
        return false;
      }

      /**
       * Define dropbox element
       * @type {DropboxElement}
       */
      var $element = this;

      var view = $element.view,
          controller = view.controller;

      controller.clearParentThumbnail();

      require([
        'https://www.dropbox.com/static/api/2/dropins.js'
      ], function getDropboxApi() {

        /**
         * Define dropbox button instance
         */
        var $button = Dropbox.createChooseButton({

          success: function (data) {

            /**
             * Get response data
             * @type {{bytes, icon, link, name, thumbnailLink}}
             */
            var hash = data[0];

            controller.setHiddenPreferences('dropboxBytes', hash.bytes);
            controller.setHiddenPreferences('dropboxIcon', hash.icon);
            controller.setHiddenPreferences('dropboxUrl', hash.link);
            controller.setHiddenPreferences('dropboxFileName', hash.name);
            controller.setHiddenPreferences('dropboxThumbnail',
                hash.thumbnailLink);

            controller.store();

            /**
             * Get scope
             * @type {Dropbox}
             */
            var scope = view.scope;

            scope.observer.publish(
                scope.eventmanager.eventList.setEmbeddedContent
            );
          },
          linkType: 'direct'
        });

        $element.$.append($button);
      });

    }

  }, PluginElement.prototype);

});