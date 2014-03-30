var googleAddress = "http://maps.googleapis.com/maps/api/staticmap";

var index;
var prefix;

// parameters
var parameters = "";
var value;

// BackBone
var Map = Backbone.Model.extend({});

var MapView = Backbone.View.extend({
    tagName: 'div',
    className: 'rectangle',
    render: function() {
        this.setParameters();
        this.setMap();
        return this;
    },
    setMap: function() {
        $('<img />', {src: googleAddress + parameters}).appendTo(this.$el.empty());
    },
    setParameters: function() {
        //
        iterator = 0;
        //
        $.each(this.model.attributes, function(index, value) {
            //
            prefix = (iterator > 0) ? '&' : '?';
            //
            parameters += prefix + index + '=' + value;
            //
            iterator++;
        });
    }
});

/*
 * Build the Google Maps URL
 */
(function() {
    $("div#actions button").click(function() {
        // 
        $("div#googlemap").empty();
        //
        parameters = "";
        // 
        var map = new Map();
        // 
        $('input[placeholder], select').each(function() {
            //
            value = ($(this).val() === "") ? $(this).attr('placeholder') : $(this).val();
            //
            ($(this).prop("tagName") === 'INPUT') ? map.set($(this).attr('name'), value) : map.set($(this).attr('name'), value);
        });
        // 
        $('div#googlemap').append(new MapView({model: map}).render().el);
        //
        $('div#googlelink').text(googleAddress + parameters);
    });

    $("div#actions button").trigger("click");

})();