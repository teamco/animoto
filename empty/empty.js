/**
 * Created with RubyMine.
 * User: teamco
 * Date: 2/23/14
 * Time: 11:02 AM
 */

import './empty.scss';
import image from './images/empty.png';

import {MVC} from '../../../modules/MVC';
import {EmptyController} from './mvc/empty.controller';
import {EmptyModel} from './mvc/empty.model';
import {EmptyView} from './mvc/empty.view';
import {EmptyEventManager} from './mvc/empty.event.manager';
import {EmptyPermission} from './mvc/empty.permission';
import {AntHill} from '../../../core/config/anthill';

/**
 * @class Empty
 * @extends AntHill
 */
export class Empty extends AntHill {

  /**
   * @param {string} name
   * @param {Widget} containment
   * @param opts
   * @constructor
   */
  constructor(name, containment, opts) {
    super(name || 'Empty', null, true);

    /**
     * Define containment
     * @property Empty
     * @type {Widget}
     */
    this.containment = containment;

    /**
     * Define image
     * @property Empty
     */
    this.image = image;

    /**
     * Define referrer
     * @property Empty
     * @type {*}
     */
    this.referrer = undefined;

    this.initContent(opts);
  }

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
     * @type {MVC}
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
    return {
      Controller: EmptyController,
      Model: EmptyModel,
      View: EmptyView,
      EventManager: EmptyEventManager,
      Permission: EmptyPermission
    };
  }
}