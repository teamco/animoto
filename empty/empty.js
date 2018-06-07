/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:02 AM
 */

/**
 * @constant AntHill
 * @type {module.AntHill}
 */
const AntHill = require('../../../core/config/anthill.js');

/**
 * @class Empty
 * @extends AntHill
 */
module.exports = class Empty extends AntHill {

  /**
   * @param {string} name
   * @param {module.Widget} containment
   * @param opts
   * @constructor
   */
  constructor(name, containment, opts) {
    super(name || 'Empty', null, true);

    /**
     * Define containment
     * @property Empty
     * @type {module.Widget}
     */
    this.containment = containment;

    /**
     * Define referrer
     * @property Empty
     * @type {*}
     */
    this.referrer = undefined;

    this.initContent(opts);
  };

  /**
   * @memberOf Empty
   * @param opts
   */
  initContent(opts) {

    /**
     * @constant DEFAULTS
     * @type {{
     *  plugin: boolean,
     *  html: {
     *    style: string,
     *    header: boolean,
     *    footer: boolean,
     *    padding: {top: number, right: number, bottom: number, left: number}
     *  }
     * }}
     */
    const DEFAULTS = {
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
     * @constant components
     * @type {{Controller, Model, View, EventManager, Permission}}
     */
    const components = Empty.fetchComponents();

    /**
     * @constant MVC
     * @type {module.MVC}
     */
    const MVC = require('../../../core/lib/modules/MVC.js');

    /**
     * @type {module.MVC}
     */
    new MVC({
      scope: this,
      config: [
        {uuid: this.containment.model.getContentUUID()},
        DEFAULTS
      ],
      components: [
        components.Controller,
        components.Model,
        components.View,
        components.EventManager,
        components.Permission
      ],
      render: true
    });

    this.observer.publish(this.eventManager.eventList.initWidget, opts);
  }

  /**
   * @method init
   * @memberOf Empty
   * @static
   * @returns {*}
   */
  static fetchComponents() {

    /**
     * @constant EmptyController
     * @type {module.EmptyController}
     */
    const EmptyController = require('./mvc/empty.controller.js');

    /**
     * @constant EmptyModel
     * @type {module.EmptyModel}
     */
    const EmptyModel = require('./mvc/empty.model.js');

    /**
     * @constant EmptyView
     * @type {module.EmptyView}
     */
    const EmptyView = require('./mvc/empty.view.js');

    /**
     * @constant EmptyEventManager
     * @type {module.EmptyEventManager}
     */
    const EmptyEventManager = require('./mvc/empty.event.manager.js');

    /**
     * @constant EmptyPermission
     * @type {module.EmptyPermission}
     */
    const EmptyPermission = require('./mvc/empty.permission.js');

    return {
      Controller: EmptyController,
      Model: EmptyModel,
      View: EmptyView,
      EventManager: EmptyEventManager,
      Permission: EmptyPermission
    };
  }
};