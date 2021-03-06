exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('cart_items', function(table){
       table.integer('order_id').references('id').inTable('order_logs');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('cart_items', function(table){
       table.dropColumn('order_id');
    })
  ])
};
