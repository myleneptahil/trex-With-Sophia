var marks = [35, 38, 42, 45, 43, 34, 46, 41, 48, 32];
//var scores = [50,145,20,10];
var sum = 0;
var average = 0;
var input, heading;

function setup() {
    //ask input from the user
    input = createInput();
    input.position(5, 60);



    //console.log(scores[0]);
    //sum = scores[0] + scores[1] + scores[2] + scores[3];
    //average = sum/scores.length; 
    /* for(i=0;i<scores.length;i++)
{
    sum += scores[i];
} */
    //to display the marks greater or equal to 45

    /*for(var i=0; i<marks.length; i++)
    {
      if(marks[i]>= 45)
      {
        console.log(marks[i]);
      }
    }*/
    //average = sum/scores.length;

    //console.log(sum);
    //console.log(average);
}

function draw() {
    background("white");
    const value = input.value();

    //ask the user to input any alphabet
    heading = createElement('h4', 'Enter any alphabet');
    heading.position(5, 20);
    var ran = Math.round(Math.random(10, 60));
    //use switch to select input
    switch (value) {
        case 'a':
            console.log("Vowel");
            break;
        case 'e':
            console.log("Vowel");
            break;
        case 'o':
            console.log("Vowel");
            break;
        case 'u':
            console.log("Vowel");
            break;
        case 'i':
            console.log("Vowel");
            break;

        default:
            console.log("Please enter any character");

    }

}