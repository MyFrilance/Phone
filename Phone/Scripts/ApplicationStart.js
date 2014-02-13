var ViewModel = {
    Name: ko.observable(''),
    Surname: ko.observable(''),
    PhoneNumber: ko.observable(''),
};

$(function () {

    ko.applyBindings(ViewModel);

    $("#b").click(buttonGo);
    $("#acc").hide();
});
var check = 0;
buttonGo = function () {
    var errors = 0;
    if ($("#inputName").val() == "") {
        $("#inputName").val("Введите имя");
        errors++;
    }
    if ($("#inputSurname").val() == "") {
        $("#inputSurname").val("Введите фамилию");
        errors++;
    }
    if(errors==0)
        $.ajax({
            url: "/Home/Result?name=" + $('#inputName').val() + "&surname=" + $('#inputSurname').val(),
            type: "POST",
            cache: false,
            success: function (html) {
                var options = {};

                if (html.length == 0) {
                    if (check == 0)
                        $("#acc").toggle('blind', options, 500);

                    ViewModel.PhoneNumber("Нет такого абонента");
                    check++;

                } else {
                    if (check == 0)
                        $("#acc").toggle('blind', options, 500);

                    ViewModel.PhoneNumber(html[0].PhoneNumber);
                    check++;
                }
            },


        });

};
