/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:02 AM
 */

defineP([
  'config/anthill',
  'modules/MVC',
  'plugins/widgets/x.videos/mvc/x.videos.controller',
  'plugins/widgets/x.videos/mvc/x.videos.model',
  'plugins/widgets/x.videos/mvc/x.videos.view',
  'plugins/widgets/x.videos/mvc/x.videos.event.manager',
  'plugins/widgets/x.videos/mvc/x.videos.permission'
], function defineXVideos(AntHill, MVC, Controller, Model, View, EventManager,
    Permission) {

  /**
   * Define XVideos
   * @param containment
   * @param [opts]
   * @constructor
   * @class XVideos
   * @extends AntHill
   */
  var XVideos = function XVideos(containment, opts) {

    /**
     * Define containment
     * @memberOf XVideos
     */
    this.containment = containment;

    /**
     * Define referrer
     * @memberOf XVideos
     * @type {*}
     */
    this.referrer = undefined;

    /**
     * Define defaults
     * @type {{
         *      plugin: boolean,
         *      html: {
         *          style: string,
         *          header: boolean,
         *          footer: boolean,
         *          padding: {
         *              top: number,
         *              right: number,
         *              bottom: number,
         *              left: number
         *          }
         *      },
         *      regex: RegExp,
         *      mask: string
         * }}
     */
    var DEFAULTS = {
      plugin: true,
      html: {
        style: 'default',
        header: false,
        footer: false,
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      },
      regex: /\d+/,
      mask: 'http://flashservice.xvideos.com/embedframe/{id}'
    };

    /**
     * Define MVC
     * @memberOf XVideos
     * @type {MVC}
     */
    this.mvc = new MVC({
      scope: this,
      config: [
        {uuid: this.containment.model.getContentUUID()},
        DEFAULTS
      ],
      components: [
        Controller,
        Model,
        View,
        EventManager,
        Permission
      ],
      render: true
    });

    this.observer.publish(
        this.eventmanager.eventList.initWidget,
        opts
    );
  };

  return XVideos.extend('XVideos', {}, AntHill.prototype);
});
