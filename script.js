(function()
  {
    //Model.
    var Appointment = Backbone.Model.extend({});

    //Model instance.
    var appointment = new Appointment();

    //Set some data within model.
    appointment.set('title', 'Oh look, a list item!');

    //View.
    var AppointmentView = Backbone.View.extend( {
      //Create a render function.
      render: function(){
        $(this.el).html('<li class="list-group-item">' + this.model.get('title') + '</li>');
      }
    });

    //View Instance.
    var appointmentView = new AppointmentView({model: appointment});

    //Call render function and set html.
    appointmentView.render();
    $('#app').html(appointmentView.el);
  }
)();
