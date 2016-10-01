$(document).ready(function() {
    //Global variables
    var studentIndex = 0;

    //Utility function
    $.ajax({
        type: "GET",
        url: "/data",
        success: function(data) {
                console.log("Data:", data);
                showPerson(data);
                data.forEach(function(person, i) {
                    //DOM manipulation
                    //appendDom(person);
                    console.log(person);
                    console.log(i);
                    //Per Ryan: adding another property is probably not necessary
                    // person.dataIndex = i;
                    // console.log(person.dataIndex);


                    //prevPerson();

                }); //end of forEach

                $('#button-next').on('click', function() {

                    console.log(this);

                    console.log("next button works");
                    studentIndex++;
                    if (studentIndex >= data.length) {
                        studentIndex = 0;
                    }
                    console.log("student Index:", studentIndex);
                    console.log("student Array:", data);

                    for (var i = 0; i < data.length; i++) {
                        if (studentIndex == i) {
                            $('#selected').text('');

                            $('#selected').append('<h3>' + data[i].name + '</h3>' + '<h5>'  + data[i].githubUserName + '<h5>' + '<p>'  + data[i].shoutout + '</p>');

                        }
                    }



                    console.log("Student Index", studentIndex);
                    console.log("Student Array", data);
                    console.log("Student Array Length", data.length);



                }); //end of next button event listener



                $('#button-prev').on('click', function() {
                    console.log(this);
                    console.log("prev button works");
                    studentIndex--;
                    if (studentIndex < 0) {
                        studentIndex = data.length;
                    }
                    console.log("Student Index", studentIndex);
                    console.log("Student Array Data Index", data.dataIndex);
                    console.log("Student Array Length", data.length);

                    // for (var i = 0; i < data.length; i++) {
                    //     if (studentIndex == i) {
                    //         $('#selected').text(data[i].name + data[i].githubUserName + data[i].shoutout);
                    //
                    //     }
                    // }

                    for (var i = 0; i < data.length; i++) {
                        if (studentIndex == i) {
                            $('#selected').text('');

                            $('#selected').append('<h3>' + data[i].name + '</h3>' + '<h5>'  + data[i].githubUserName + '<h5>' + '<p>'  + data[i].shoutout + '</p>');

                        }
                    }

                }); //end of previous button event listener



                function showPerson(data) {
                    console.log("Person inside function:", data);
                    console.log("First person inside function:", data[0]);
                    console.log("works");
                }; //end of showPerson function


            } //end of AJAX SUCCESS function

    }); //end of AJAX function

}); //end of Doc Ready function








//LECTURE CODE -- per Ryan's suggestion I chose another strategy
// function appendDom(person) {
//     // console.log(person.name);
//     // console.log(person.githubUserName);
//     // console.log(person.shoutout);
//     console.log("Person:", person);
//console.log("Student Array:", studentArray);

// var $personDiv = $('<div class="person"></div>');
// //var $personDiv = $('<div class="person" data = "' + studentArray + '"></div>');
// $personDiv.append('<h2>' + person.name + '</h2>');
// $personDiv.append('<p>' + person.githubUserName + '</p>');
// $personDiv.append('<p>' + person.shoutout + '</p>');
// $('#ajax-person').append($personDiv);



// }
