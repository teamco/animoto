/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:02 AM
 */

defineP([
  'config/anthill',
  'modules/MVC',
  'plugins/widgets/videopress/mvc/videopress.controller',
  'plugins/widgets/videopress/mvc/videopress.model',
  'plugins/widgets/videopress/mvc/videopress.view',
  'plugins/widgets/videopress/mvc/videopress.event.manager',
  'plugins/widgets/videopress/mvc/videopress.permission'
], function defineVideopress(AntHill, MVC, Controller, Model, View,
    EventManager, Permission) {

  /**
   * Define Videopress
   * @param containment
   * @param [opts]
   * @constructor
   * @class Videopress
   * @extends AntHill
   */
  var Videopress = function Videopress(containment, opts) {

    /**
     * Define containment
     * @property Videopress
     */
    this.containment = containment;

    /**
     * Define referrer
     * @property Videopress
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
         *          floating: boolean,
         *          padding: {
         *              top: number,
         *              right: number,
         *              bottom: number,
         *              left: number
         *          }
         *      }
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
     * @property Videopress
     * @type {MVCJs}
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
        this.eventManager.eventList.initWidget,
        opts
    );
  };

  return Videopress.extend('Videopress', {}, AntHill.prototype);
});
