import roleBuilder from './role.builder'
import roleHarvester from './role.harvester'
import roleUpgrader from './role.upgrader'

const ROLE_HARVESTER = 'harvester'
const ROLE_BUILDER = 'builder'
const ROLE_UPGRADER = 'upgarder'
const ROLES = [ROLE_HARVESTER, ROLE_BUILDER, ROLE_UPGRADER]

function areRole(role) {
    return (creep) => creep.memory.role === role
}

module.exports.loop = function () {
    const spawner = Game.spawns['Spawn1']

    /** @type {Creep[]} creeps */
    const creeps = Game.creeps
        .map((name) => Game.creeps[name])
        .filter((x) => !!x)

    ROLES.forEach((role_name) => {
        if (!creeps.some(areRole(role_name))) {
            spawner.spawnCreep([WORK, MOVE], `${role_name}_1`, {
                role: role_name,
            })
        }
    })

    creeps
        .filter((c) => c.memory.role !== undefined)
        .forEach((creep) => {
            switch (creep.memory.role) {
                case ROLE_HARVESTER:
                    roleHarvester.run(creep)
                    break
                case ROLE_UPGRADER:
                    roleUpgrader.run(creep)
                    break
                case ROLE_BUILDER:
                    roleBuilder.run(creep)
                    break
            }
        })
}
