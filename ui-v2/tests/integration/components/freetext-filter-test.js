import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('freetext-filter', 'Integration | Component | freetext filter', {
  integration: true,
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{freetext-filter}}`);

  assert.equal(
    this.$()
      .text()
      .trim(),
    'Search'
  );

  // Template block usage:
  this.render(hbs`
    {{#freetext-filter}}{{/freetext-filter}}
  `);

  assert.equal(
    this.$()
      .text()
      .trim(),
    'Search'
  );
});
