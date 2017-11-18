/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:02 AM
 */

defineP([
  'config/anthill',
  'modules/MVC',
  'plugins/widgets/pdf/mvc/pdf.controller',
  'plugins/widgets/pdf/mvc/pdf.model',
  'plugins/widgets/pdf/mvc/pdf.view',
  'plugins/widgets/pdf/mvc/pdf.event.manager',
  'plugins/widgets/pdf/mvc/pdf.permission'
], function definePdf(AntHill, MVC, Controller, Model, View, EventManager,
    Permission) {

  /**
   * Define Pdf
   * @param containment
   * @param [opts]
   * @constructor
   * @class Pdf
   * @extends AntHill
   */
  var Pdf = function Pdf(containment, opts) {

    /**
     * Define containment
     * @memberOf Pdf
     */
    this.containment = containment;

    /**
     * Define referrer
     * @memberOf Pdf
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
     * @memberOf Pdf
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

  return Pdf.extend('Pdf', {}, AntHill.prototype);
});