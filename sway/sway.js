/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:02 AM
 */

defineP([
  'config/anthill',
  'modules/MVC',
  'plugins/widgets/sway/mvc/sway.controller',
  'plugins/widgets/sway/mvc/sway.model',
  'plugins/widgets/sway/mvc/sway.view',
  'plugins/widgets/sway/mvc/sway.event.manager',
  'plugins/widgets/sway/mvc/sway.permission'
], function defineSway(AntHill, MVC, Controller, Model, View, EventManager,
    Permission) {

  /**
   * Define Sway
   * @param containment
   * @param [opts]
   * @constructor
   * @class Sway
   * @extends AntHill
   */
  var Sway = function Sway(containment, opts) {

    /**
     * Define containment
     * @property Sway
     */
    this.containment = containment;

    /**
     * Define referrer
     * @property Sway
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
     * @property Sway
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

  return Sway.extend('Sway', {}, AntHill.prototype);
});
