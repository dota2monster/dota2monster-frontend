/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'page/nav-bar',
  'Integration: PageNavBarComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#page/nav-bar}}
      //     template content
      //   {{/page/nav-bar}}
      // `);

      this.render(hbs`{{page/nav-bar}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
