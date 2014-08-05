/**
 * Created by M@ngTr@n on 04/08/2014.
 */

_.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
};

var Post = Backbone.Model.extend({});

var Posts = Backbone.Collection.extend({
    model: Post,
    url: '/posts'
});

var PostListView = Backbone.View.extend({
    tagName: 'li',
    template: _.template("<a href='/posts/{{id}}'>{{title}}</a>"),
    render: function () {
        this.el.innerHTML = this.template(this.model.toJSON());
        return this;
    }
});

var PostsListView = Backbone.View.extend({
    template: _.template('<h1>My Blog</h1><ul></ul>'),
    render: function () {
        this.el.innerHTML = this.template();
        var ul = this.$el.find('ul');
        this.collection.forEach(function (post) {
            ul.append(new PostListView({model: post}).render().el)
        });

        return this;
    }
});