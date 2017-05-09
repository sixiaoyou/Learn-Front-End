/**
 * Created by You on 2017/5/3.
 */


var seats = [false, true, false, true, true, true, false, true, false];
var selSeat = -1;
function initSeats() {
    for (var i = 0; i < seats.length; i++) {
        if (seats[i]) {
            document.getElementById("seat" + i).src = "seat_avail.png";
            document.getElementById("seat" + i).alt = "Available seat";
        }
        else {
            document.getElementById("seat" + i).src = "seat_unavail.png";
            document.getElementById("seat" + i).alt = "Unavailable seat";
        }
    }
}

    function findSeat() {
        if (selSeat >= 0) {
            selSeat = -1;
            initSeats();
        }
        for (var i = 0; i < seats.length; i++) {
            if (seats[i]) {
                selSeat = i;
                document.getElementById("seat" + i).src = "seat_select.png";
                document.getElementById("seat" + i).alt = "Your seat";
                var accept = confirm("Seat " + (i + 1) + " is available. Accept?");
                if (accept) {
                    break;
                }
                else{
                    selSeat = -1;
                    document.getElementById("seat" + i).src = "seat_avil.png";
                    document.getElementById("seat" + i).alt = "Available seat";
                }
            }
        }
    }