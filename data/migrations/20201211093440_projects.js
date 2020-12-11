
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', table => {
      table.increments('project_id')
      table.string('project_name', 128).notNullable()
      table.string('project_description', 128)
      table.boolean('project_completed').notNullable().defaultTo("false")
    })
    .createTable('resources', table => {
      table.increments('resource_id')
      table.string('resource_name', 128).notNullable().unique()
      table.string('resource_description', 128)
    })
    .createTable('tasks', table => {
      table.increments('task_id')
      table.string('task_description', 128).notNullable()
      table.string('task_notes', 128)
      table.boolean('task_completed').notNullable().defaultTo(0)
      table.integer('project_id').unsigned().references('project_id').inTable('projects').onDelete('RESTRICT').onUpdate('RESTRICT')
    })
    .createTable('task_resources', table => {
      table.increments('task_resource_id')
      table.integer('resource_id').unsigned().references('resource_id').inTable('resources').onDelete('RESTRICT').onUpdate('RESTRICT')
      table.integer('task_id').unsigned().references('task_id').inTable('tasks').onDelete('RESTRICT').onUpdate('RESTRICT')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('task_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
