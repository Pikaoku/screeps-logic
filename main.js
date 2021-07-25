const typeWorker = require('./type.worker');

const {
  TYPE_WORKER,
  TYPE_COMBAT,
  ROLE_HARVESTER,
  ROLE_BUILDER,
  ROLE_UPGRADER,
  ROLES,
} = require('./constants');

const ROLE_TARGETS = {
  [ROLE_HARVESTER]: 2,
  [ROLE_BUILDER]: 2,
  [ROLE_UPGRADER]: 1,
};

const TARGET_SPAWNS = 3;

function areRole(role) {
  return (creep) => creep.memory.role === role;
}

let room_sources;
/** @type {Creep[]} creeps */
let creeps;

module.exports.loop = function () {
  const spawner = Game.spawns['Spawn1'];
  const room = spawner.room;

  if (!room_sources) room_sources = room.find(FIND_SOURCES);
  if (!creeps || Game.time % 20 === 0) {
    creeps = Object.keys(Game.creeps)
      .filter((x) => !!x)
      .map((name) => Game.creeps[name]);
  }

  const namesForRoles = ROLES.map((role_name) =>
    [...Array(ROLE_TARGETS[role_name])].map(
      (_, i) => '' + role_name + '_' + (i + 1)
    )
  ).reduce((acc, cur) => [...acc, ...cur], []);

  const spawnQueue = namesForRoles.filter(
    (possibleName) => !Game.creeps[possibleName]
  );

  if (spawnQueue.length) {
    spawner.spawnCreep([WORK, MOVE, CARRY, MOVE, WORK, WORK], spawnQueue[0], {
      memory: { role: spawnQueue[0].split('_')[0], type: 'worker' },
    });
  }

  ROLES.forEach((role_name) => {
    const creepsOfRole = creeps.filter(areRole(role_name)).length;
    if (creepsOfRole < TARGET_SPAWNS) {
      spawner.spawnCreep(
        [WORK, MOVE, CARRY, MOVE],
        `${role_name}_${creepsOfRole + 1}`,
        {
          memory: {
            role: role_name,
            type: TYPE_WORKER,
          },
        }
      );
    }
  });

  creeps.forEach((creep) => {
    switch (creep.memory.type) {
      case TYPE_WORKER:
        typeWorker.run(creep);
        break;
      case TYPE_COMBAT:
        console.log('what are you doing, idiot?');
        break;
    }
  });
};
