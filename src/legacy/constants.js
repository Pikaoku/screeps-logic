const TYPE_WORKER = 'worker';
const TYPE_COMBAT = 'combat';

const ROLE_HARVESTER = 'harvester';
const ROLE_BUILDER = 'builder';
const ROLE_UPGRADER = 'upgrader';
const ROLES = [ROLE_HARVESTER, ROLE_BUILDER, ROLE_UPGRADER];

/**
 * @property {String}   TYPE_WORKER
 * @property {String}   TYPE_COMBAT
 * @property {String}   ROLE_HARVESTER
 * @property {String}   ROLE_BUILDER
 * @property {String}   ROLE_UPGRADER
 * @property {String[]} ROLES
 */
var constants = {
  TYPE_WORKER,
  TYPE_COMBAT,
  ROLE_HARVESTER,
  ROLE_BUILDER,
  ROLE_UPGRADER,
  ROLES,
};

module.exports = constants;
