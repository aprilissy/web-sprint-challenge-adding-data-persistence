
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', table => {
      table.increments('id')
      table.string('name', 128).notNullable()
      table.string('description', 128)
      table.boolean('completed').notNullable().defaultTo(false)
    })
    .createTable('resources', table => {
      table.increments('id')
      table.string('name', 128).notNullable().unique()
      table.string('description', 128)
    })
    .createTable('tasks', table => {
      table.increments('id')
      table.string('description', 128).notNullable()
      table.string('notes', 128)
      table.boolean('completed').notNullable().defaultTo(false)
      table.integer('project_id').unsigned().references('id').inTable('projects').onDelete('RESTRICT').onUpdate('RESTRICT')
    })
    .createTable('task_resources', table => {
      table.increments('id')
      table.integer('resource_id').unsigned().references('id').inTable('resources').onDelete('RESTRICT').onUpdate('RESTRICT')
      table.integer('task_id').unsigned().references('id').inTable('tasks').onDelete('RESTRICT').onUpdate('RESTRICT')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('task_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
