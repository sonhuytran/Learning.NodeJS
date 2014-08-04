/**
 * Created by M@ngTr@n on 04/08/2014.
 */
var Post = Backbone.Model.extend({});
var Posts = Backbone.Collection.extend({
    model: Post,
    url: '/posts'
});