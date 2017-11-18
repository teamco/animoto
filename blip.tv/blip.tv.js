/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:02 AM
 */

defineP([
  'config/anthill',
  'modules/MVC',
  'plugins/widgets/blip.tv/mvc/blip.tv.controller',
  'plugins/widgets/blip.tv/mvc/blip.tv.model',
  'plugins/widgets/blip.tv/mvc/blip.tv.view',
  'plugins/widgets/blip.tv/mvc/blip.tv.event.manager',
  'plugins/widgets/blip.tv/mvc/blip.tv.permission'
], function defineBlipTv(AntHill, MVC, Controller, Model, View, EventManager,
    Permission) {

  /**
   * Define BlipTv
   * @param containment
   * @param [opts]
   * @constructor
   * @class BlipTv
   * @extends AntHill
   */
  var BlipTv = function BlipTv(containment, opts) {

    /**
     * Define containment
     * @property BlipTv
     */
    this.containment = containment;

    /**
     * Define referrer
     * @property BlipTv
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
      }
    };

    /**
     * Define MVC
     * @property BlipTv
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

  return BlipTv.extend('BlipTv', {}, AntHill.prototype);
});
