/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:02 AM
 */

defineP([
  'config/anthill',
  'modules/MVC',
  'plugins/widgets/vidme/mvc/vidme.controller',
  'plugins/widgets/vidme/mvc/vidme.model',
  'plugins/widgets/vidme/mvc/vidme.view',
  'plugins/widgets/vidme/mvc/vidme.event.manager',
  'plugins/widgets/vidme/mvc/vidme.permission'
], function defineVidme(AntHill, MVC, Controller, Model, View, EventManager,
    Permission) {

  /**
   * Define Vidme
   * @param containment
   * @param [opts]
   * @constructor
   * @class Vidme
   * @extends AntHill
   */
  var Vidme = function Vidme(containment, opts) {

    /**
     * Define containment
     * @memberOf Vidme
     */
    this.containment = containment;

    /**
     * Define referrer
     * @memberOf Vidme
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
     * @memberOf Vidme
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

  return Vidme.extend('Vidme', {}, AntHill.prototype);
});
