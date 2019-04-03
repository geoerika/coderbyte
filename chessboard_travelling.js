// Have the function ChessboardTraveling(str) read str which will be a string consisting of the location of a space on a standard 8x8 chess board with no pieces on the board along with another space on the chess board. The structure of str will be the following: "(x y)(a b)" where (x y) represents the position you are currently on with x and y ranging from 1 to 8 and (a b) represents some other space on the chess board with a and b also ranging from 1 to 8 where a > x and b > y. Your program should determine how many ways there are of traveling from (x y) on the board to (a b) moving only up and to the right. For example: if str is (1 1)(2 2) then your program should output 2 because there are only two possible ways to travel from space (1 1) on a chessboard to space (2 2) while making only moves up and to the right.

function ChessboardTraveling(str) {

    let pos = str.split('');
    let a = pos[1];
    let b = pos[3];
    let x = pos[6];
    let y = pos[8];

    if (a !== 1 || b !== 1) {
        [x, y] = [x - a + 1, y - b + 1 ];
        if (x > y ) {
            [x, y] = [y, x];
        }
    }

    return chessTravel(x,y);

}

const chessTravel = (x, y) => {

  console.log(x,y);
  let result = 0;

  if (x === 1) return 1;
  else {
      if (x === y) {
          result = 2 * chessTravel(x - 1, x);
      } else {
          result = chessTravel(x - 1, y) + chessTravel(x, y - 1);
      }
  }
  return result;
}

console.log(ChessboardTraveling("(1 1)(4 4)"));
