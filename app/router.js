import EmberRouter from '@ember/routing/router';
import config from 'super-rentals/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about'); //This will go into /templates/'name of the route'.hbs
  this.route('contact', { path: '/getting-in-touch' });
});
