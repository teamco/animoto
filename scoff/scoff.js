/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:02 AM
 */

define([
  'config/anthill',
  'modules/MVC',
  'plugins/widgets/scoff/mvc/scoff.controller',
  'plugins/widgets/scoff/mvc/scoff.model',
  'plugins/widgets/scoff/mvc/scoff.view',
  'plugins/widgets/scoff/mvc/scoff.event.manager',
  'plugins/widgets/scoff/mvc/scoff.permission'
], function defineScoff(AntHill, MVC, Controller, Model, View, EventManager,
    Permission) {

  /**
   * Define Scoff
   * @param containment
   * @param [opts]
   * @constructor
   * @class Scoff
   * @extends AntHill
   */
  var Scoff = function Scoff(containment, opts) {

    /**
     * Define containment
     * @property Scoff
     */
    this.containment = containment;

    /**
     * Define referrer
     * @property Scoff
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
     * @property Scoff
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

  return Scoff.extend('Scoff', {}, AntHill.prototype);
});
