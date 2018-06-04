/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 4:10 PM
 * To change this template use File | Settings | File Templates.
 */

/**
 * @constant BasePermission
 * @type {module.BasePermission}
 */
const BasePermission = require('../../../../core/lib/modules/Permission.js');

/**
 * @extends BasePermission
 * @class EmptyPermission
 */
module.exports = class EmptyPermission extends BasePermission {

  /**
   * @constructor
   * @param {string} [name]
   * @param scope
   */
  constructor(name, scope) {
    super(name || 'EmptyPermission', scope, false);
  }
};