/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:02 AM
 */

define([
  'config/anthill',
  'modules/MVC',
  'plugins/widgets/gfycat/mvc/gfycat.controller',
  'plugins/widgets/gfycat/mvc/gfycat.model',
  'plugins/widgets/gfycat/mvc/gfycat.view',
  'plugins/widgets/gfycat/mvc/gfycat.event.manager',
  'plugins/widgets/gfycat/mvc/gfycat.permission'
], function defineGfycat(AntHill, MVC, Controller, Model, View, EventManager,
    Permission) {

  /**
   * Define Gfycat
   * @param containment
   * @param [opts]
   * @constructor
   * @class Gfycat
   * @extends AntHill
   */
  var Gfycat = function Gfycat(containment, opts) {

    /**
     * Define containment
     * @property Gfycat
     */
    this.containment = containment;

    /**
     * Define referrer
     * @property Gfycat
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
     * @property Gfycat
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

  return Gfycat.extend('Gfycat', {}, AntHill.prototype);
});
