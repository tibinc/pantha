
 
import { Template } from 'meteor/templating';
 
import './index.html';


Router.route('/', function () {
  this.render('task0');
});

Router.route('/gangotri', function () {
  this.render('task1');
});
Router.route('/badrinath', function () {
  this.render('task2');
});
Router.route('/girnar', function () {
  this.render('task3');
});
Router.route('/gulmarg', function () {
  this.render('task4');
});
Router.route('/kalpeswar', function () {
  this.render('task5');
});
Router.route('/kedarnath', function () {
  this.render('task6');
});
Router.route('/kodachadri', function () {
  this.render('task7');
});
Router.route('/madhmaheswar', function () {
  this.render('task8');
});
Router.route('/manali', function () {
  this.render('task9');
});
Router.route('/nelliyampathy', function () {
  this.render('task10');
});
Router.route('/rishikesh', function () {
  this.render('task11');
});
Router.route('/rudranath', function () {
  this.render('task12');
});
Router.route('/truind', function () {
  this.render('task13');
});
Router.route('/tungnath', function () {
  this.render('task14');
});
Router.route('/uttarkashi', function () {
  this.render('task15');
});
Router.route('/vaishnodevi', function () {
  this.render('task16');
});
Router.route('/gallery', function () {
  this.render('task17');
});

Template.body.helpers({



});