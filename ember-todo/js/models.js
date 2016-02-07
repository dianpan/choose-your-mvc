// Ember model has schema
Todos.Todo = DS.Model.extend({
  val: DS.attr('string'),
  completed: DS.attr('boolean')
});