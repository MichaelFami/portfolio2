$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

$("#send").on("click", function(response) {

            var formName = $("#formName").val();
            var formWebsite = $("#formWebsite").val();
            var formComment = $("#formComment").val();
            var formPhone = $("#formPhone").val();
            var formEmail = $("#formEmail").val();

            var data = {
                name: formName,
                site: formWebsite,
                comment: formComment,
                phone: formPhone,
                email: formEmail
            };

            $.ajax({
                method: 'POST',
                url: 'send-email',
                data: data
            }).done(function(response) {
                $(".email-msg").html(response);

                $("#formName").val("");
                $("#formPhone").val("");
                $("#formEmail").val("");
                $("#formWebsite").val("");
                $("#formComment").val("");
            });

        });
