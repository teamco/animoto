/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:02 AM
 */

defineP([
  'config/anthill',
  'modules/MVC',
  'plugins/widgets/clocklink/mvc/clocklink.controller',
  'plugins/widgets/clocklink/mvc/clocklink.model',
  'plugins/widgets/clocklink/mvc/clocklink.view',
  'plugins/widgets/clocklink/mvc/clocklink.event.manager',
  'plugins/widgets/clocklink/mvc/clocklink.permission'
], function defineClocklink(AntHill, MVC, Controller, Model, View, EventManager,
    Permission) {

  /**
   * Define Clocklink
   * @param containment
   * @param [opts]
   * @constructor
   * @class Clocklink
   * @extends AntHill
   */
  var Clocklink = function Clocklink(containment, opts) {

    /**
     * Define containment
     * @property Clocklink
     */
    this.containment = containment;

    /**
     * Define referrer
     * @property Clocklink
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
     * @property Clocklink
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

  return Clocklink.extend('Clocklink', {}, AntHill.prototype);
});
