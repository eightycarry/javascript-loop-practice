$(document).ready(function () {
    $("button").click(runLoops);

    var myRules = {
        myNumber:
            {
                required: true,
                digits: true,
                min: 1,
                max: 1000
            }
    };
    var myMessages = {
        myNumber:
            {
                required: "Must fill in number",
                digits: "Only whole numbers",
                min: "Must be 1 - 1000",
                max: "Must be 1 - 1000"
            }
    };

    $("#loopTestForm").validate({
        rules: myRules,
        messages: myMessages,
        submitHandler: runLoops
    });
});

function runLoops() {
    // This variable will contain one of three strings:
    // "for-loop", "while-loop", or "do-while-loop"
    //var selectedLoop = $("input[name=loop-type]:checked").val();

    /*
        Depending on which loop was selected,
        call the appropriate function.

        Possible values of selectedLoop and
        the corresponding function calls are:

        "for-loop"	    ==>  runForLoop()
        "while-loop"    ==>  runWhileLoop()
        "do-while-loop" ==>  runDoWhileLoop()
    */
    if ($("input[id=while-loop]:checked")) {
        runWhileLoop();
    } else if ($("input[id=do-while-loop]:checked")) {
        runDoWhileLoop()
    } else if ($("input[id=for-loop]:checked")) {
        runForLoop()
    }
}


function runWhileLoop() {
    var number = parseInt($("#myNumber").val());
    var output = "";

    /*
        Use a while loop to concatenate the letter A
        "number" times to the string "output". For example,
        if "number" is 5, then output should be "AAAAA".

        (Or for a challenge, concatenate the first "number" letters of the alphabet!)
    */
    while (output.length < number) {
        output += "A";
    }


    $("#while-result").text(output);
}


function runForLoop() {
    var number = parseInt($("#myNumber").val());
    var sum = 0;

    /*
        Use a for loop to add the numbers 1 through "number"
        into the variable "sum".
    */
    for (sum = 0; number <= 1; number--) {
        sum += number;
    }

    $("#for-result").text(sum);
}


function runDoWhileLoop() {
    var number = parseInt($("#myNumber").val());
    var output = "";

    /*
        Use a do-while loop to concatenate the numbers 1 through
        "number" to the string "output". For example, if "number"
        is 5, then output should be "12345".
    */


    $("#do-while-result").text(output);
}