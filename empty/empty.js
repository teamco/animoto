/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:02 AM
 */

defineP([
  'config/anthill',
  'modules/MVC',
  'plugins/widgets/empty/mvc/empty.controller',
  'plugins/widgets/empty/mvc/empty.model',
  'plugins/widgets/empty/mvc/empty.view',
  'plugins/widgets/empty/mvc/empty.event.manager',
  'plugins/widgets/empty/mvc/empty.permission'
], function defineEmpty(AntHill, MVC, Controller, Model, View, EventManager,
    Permission) {

  /**
   * Define Empty
   * @param containment
   * @param [opts]
   * @constructor
   * @class Empty
   * @extends AntHill
   */
  var Empty = function Empty(containment, opts) {

    /**
     * Define containment
     * @property Empty
     */
    this.containment = containment;

    /**
     * Define referrer
     * @property Empty
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
     * @property Empty
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

  return Empty.extend('Empty', {}, AntHill.prototype);
});