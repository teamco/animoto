/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:02 AM
 */

defineP([
  'config/anthill',
  'modules/MVC',
  'plugins/widgets/scribd/mvc/scribd.controller',
  'plugins/widgets/scribd/mvc/scribd.model',
  'plugins/widgets/scribd/mvc/scribd.view',
  'plugins/widgets/scribd/mvc/scribd.event.manager',
  'plugins/widgets/scribd/mvc/scribd.permission'
], function defineScribd(AntHill, MVC, Controller, Model, View, EventManager,
    Permission) {

  /**
   * Define Scribd
   * @param containment
   * @param [opts]
   * @constructor
   * @class Scribd
   * @extends AntHill
   */
  var Scribd = function Scribd(containment, opts) {

    /**
     * Define containment
     * @memberOf Scribd
     */
    this.containment = containment;

    /**
     * Define referrer
     * @memberOf Scribd
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
     * @memberOf Scribd
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

  return Scribd.extend('Scribd', {}, AntHill.prototype);
});
