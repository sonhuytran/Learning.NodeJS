/**
 * Created by M@ngTr@n on 04/08/2014.
 */

_.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
};

var PostRouter = Backbone.Router.extend({
    initialize: function (options) {
        this.posts = options.posts;
        this.main = options.main;
    },

    routes: {
        '': 'index',
        'posts/:id': 'singlePost'
    },

    index: function () {
        var postsListView = new PostsListView({
            collection: this.posts
        });
        this.main.html(postsListView.render().el);
    },

    singlePost: function (id) {
        var post = this.posts.get(id);
        var pv = new PostView({model: post});
        this.main.html(pv.render().el);
    }
});

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
    },
    events: {
        'click a': 'handleClick'
    },
    /**
     * Handle the click event on an 'a' tag
     * @param e the event object
     */
    handleClick: function (e) {
        e.preventDefault();

        // Get the link
        var linkElement = $(e.currentTarget);
        var link = linkElement.attr('href');

        // Navigate to the link
        postRouter.navigate(link, {trigger: true});
    }
});

var PostView = Backbone.View.extend({
    /**
     *
     */
    initialize: function (options) {
        this.model = options.model.toJSON();
        this.template = _.template($("#postView").html());
        this.model.pubDate = new Date(Date.parse(this.model.pubDate)).toDateString();
    },
    /**
     *
     * @returns {PostView}
     */
    render: function () {

        this.el.innerHTML = this.template(this.model);

        return this;
    },
    /**
     *
     */
    events: {
        'click a': 'handleClick'
    },
    /**
     *
     * @param e
     */
    handleClick: function (e) {
        e.preventDefault();

        var linkElement = $(e.currentTarget);
        var link = linkElement.attr('href');

        postRouter.navigate(link, {trigger: true});
        return false;
    }
});