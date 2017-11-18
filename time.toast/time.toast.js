/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:02 AM
 */

defineP([
  'config/anthill',
  'modules/MVC',
  'plugins/widgets/time.toast/mvc/time.toast.controller',
  'plugins/widgets/time.toast/mvc/time.toast.model',
  'plugins/widgets/time.toast/mvc/time.toast.view',
  'plugins/widgets/time.toast/mvc/time.toast.event.manager',
  'plugins/widgets/time.toast/mvc/time.toast.permission'
], function defineTimeToast(AntHill, MVC, Controller, Model, View, EventManager,
    Permission) {

  /**
   * Define TimeToast
   * @param containment
   * @param [opts]
   * @constructor
   * @class TimeToast
   * @extends AntHill
   */
  var TimeToast = function TimeToast(containment, opts) {

    /**
     * Define containment
     * @memberOf TimeToast
     */
    this.containment = containment;

    /**
     * Define referrer
     * @memberOf TimeToast
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
     * @memberOf TimeToast
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

  return TimeToast.extend('TimeToast', {}, AntHill.prototype);
});
