(function()
  {
    var Appointment = Backbone.Model.extend({});
    var appointment = new Appointment();
    appointment.set('title', 'Oh look, a list item!');
    var AppointmentView = Backbone.View.extend( {
      render: function(){
        $(this.el).html('<li class="list-group-item">' + this.model.get('title') + '</li>');
      }
    });
    var appointmentView = new AppointmentView({model: appointment});
    appointmentView.render();
    $('#app').html(appointmentView.el);
  }
)();
