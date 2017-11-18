/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:02 AM
 */

defineP([
  'config/anthill',
  'modules/MVC',
  'plugins/widgets/photobucket/mvc/photobucket.controller',
  'plugins/widgets/photobucket/mvc/photobucket.model',
  'plugins/widgets/photobucket/mvc/photobucket.view',
  'plugins/widgets/photobucket/mvc/photobucket.event.manager',
  'plugins/widgets/photobucket/mvc/photobucket.permission'
], function definePhotobucket(AntHill, MVC, Controller, Model, View,
    EventManager, Permission) {

  /**
   * Define Photobucket
   * @param containment
   * @param [opts]
   * @constructor
   * @class Photobucket
   * @extends AntHill
   */
  var Photobucket = function Photobucket(containment, opts) {

    /**
     * Define containment
     * @memberOf Photobucket
     */
    this.containment = containment;

    /**
     * Define referrer
     * @memberOf Photobucket
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
     * @memberOf Photobucket
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

  return Photobucket.extend('Photobucket', {}, AntHill.prototype);
});
