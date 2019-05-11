import Vue from 'vue';
import VeeValidate, { Validator }  from 'vee-validate';
import customRules from './custom_rules';

console.log('Load vee-validate');

Vue.use(VeeValidate);

// Load and register all custom rule
for (let rule in customRules) {
  Validator.extend(rule, customRules[rule]);
}