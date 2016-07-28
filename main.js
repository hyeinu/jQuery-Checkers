$(() => {

  createBoard();
  $('.board').on('click', '.blkPc', blkPieceSelection)
  $('.board').on('click', '.redPc', rdPieceSelection)
  $('.board').on('click', '.pieceOff', validBMPiece)
  $('.board').on('click', '.pieceOff', validRDPiece)

});

var playerTurn;
var positionX;
//var $parentDiv;
var clickNum;

function createBoard(){
  let $rows = [];
  //fill it up
  for(let i = 0; i < 8; i++){
    let $row = $('<div>').addClass('row');
    if(i%2 === 1){
      for (let j = 0; j<8; j++){
        let $square = $('<div>').addClass('square');
          if(j%2 === 1){
            $($square).addClass('blackSquare pieceOff')
          }
        $row.append($square);
      }
    } else {
      for (let j = 0; j<8; j++){
        let $square = $('<div>').addClass('square');
          if(j%2 === 0){
            $($square).addClass('blackSquare pieceOff')
          }
        $row.append($square);
      }
    }
    $rows.push($row);
  }
  $('.board').append($rows);

  placePieces();
  //appends the arraw of rows to the DOM
}

/**/

function placePieces(){
  let $Rows = $('.row')
  for(let i = 0; i<$Rows.length; i++){
    if (i < 3){
      let img = $('<img>')
      img.attr('src', 'blackPiece.png')
      img.attr('class', 'blkPc Piece')
      let $Rchild = $($Rows[i]).children('.blackSquare')
      $($Rchild).removeClass("pieceOff")
      $($Rchild).append(img);
    }else if(i>4){
      let img = $('<img>')
      img.attr('src', 'redPiece.png')
      img.attr('class', 'redPc Piece')
      let $Rchild = $($Rows[i]).children('.blackSquare')
      $($Rchild).removeClass("pieceOff")
      $($Rchild).append(img);
    }
  }
  playerTurn = true;
}


function blkPieceSelection(){
  if (playerTurn){
    $('.selected').removeClass("selected");
    $(this).addClass("selected");
    $parent = $('.selected').parent();
    $('.workCell').removeClass("workCell")
    $($parent).addClass("workCell")
    positionX = $('.square').index($parent);
    clickNum = true;
  }
}

function rdPieceSelection(){
    if (playerTurn===false){
      $('.selected').removeClass("selected");
      $(this).addClass("selected");
      $parent = $('.selected').parent();
      $('.workCell').removeClass("workCell")
      $($parent).addClass("workCell")
      positionX = $('.square').index($parent);
      clickNum = true;
    }
}

function validBMPiece(){
  if(clickNum && playerTurn){
  let $sqPos = $('.square')
  let sqPosition = $('.square').index($(this))
  let $positionDif = sqPosition - positionX;

  if ($positionDif%9 === 0 && $positionDif > 0){
    if($positionDif/9 > 1){
      let indexCheck = positionX + 9;
        if($($sqPos[indexCheck]).has('.redPc').length > 0){
          let pieceMove = $('.selected').detach();
          $($sqPos[sqPosition]).append(pieceMove);
          $('.selected').parent().removeClass('pieceOff')
          $('.selected').removeClass('selected');
          $('.workCell').addClass('pieceOff')
                        .removeClass("workCell")
          let $midRed = $($sqPos[indexCheck]).children(":first-child");
          $midRed.addClass('rmv');
          let capturedRed = $('.rmv').remove();
          console.log(capturedRed)
          clickNum = false;
          playerTurn = false;
        } else {
          alert("invalid click")
        }
    }else{
          let pieceMove = $('.selected').detach();
          $($sqPos[sqPosition]).append(pieceMove);
          $('.selected').parent().removeClass('pieceOff')
          $('.selected').removeClass('selected');
          $('.workCell').addClass('pieceOff')
                        .removeClass("workCell")
          clickNum = false;
          playerTurn = false
          }
  }else if ($positionDif%7 === 0 && $positionDif > 0){
    if($positionDif/7 > 1){
      let indexCheck = positionX + 7;
        if($sqPos[indexCheck].has('.redPc').length > 0){
          let pieceMove = $('.selected').detach();
          $($sqPos[sqPosition]).append(pieceMove);
          $('.selected').parent().removeClass('pieceOff')
          $('.selected').removeClass('selected');
          $('.workCell').addClass('pieceOff')
                        .removeClass("workCell")
          let $midRed = $($sqPos[indexCheck]).children(":first-child");
          $midRed.addClass('rmv');
          let capturedRed = $('.rmv').remove();
          clickedNum = false;
          playerTurn = false
        }else{
            alert("invalid click")
          }
      }else{
            let pieceMove = $('.selected').detach();
            $($sqPos[sqPosition]).append(pieceMove);
            $('.selected').parent().removeClass('pieceOff')
            $('.selected').removeClass('selected');
            $('.workCell').addClass('pieceOff')
                          .removeClass("workCell")
            clickNum = false;
            playerTurn = false
            }

  }else{
    alert("invalid click")
  }
  }
  let rdPcLeft = $('.redPc');
  if(rdPcLeft.length = 0){
    alert("Red Player Wins!")
  }
}


function validRDPiece(){
  if(clickNum){
  let $sqPos = $('.square')
  let sqPosition = $('.square').index($(this))
  let $positionDif = Math.abs(sqPosition - positionX);

  console.log($positionDif)
  if ($positionDif%9 === 0 && $positionDif > 0){
    if($positionDif/9 > 1){
      let indexCheck = positionX - 9;
        if($($sqPos[indexCheck]).has('.blkPc').length > 0){
          let pieceMove = $('.selected').detach();
          $($sqPos[sqPosition]).append(pieceMove);
          $('.selected').parent().removeClass('pieceOff')
          $('.selected').removeClass('selected');
          $('.workCell').addClass('pieceOff')
                        .removeClass("workCell")
          let $midRed = $($sqPos[indexCheck]).children(":first-child");
          $midRed.addClass('rmv');
          let capturedRed = $('.rmv').remove();
          clickNum = false;
          playerTurn = true;
        } else {
          alert("invalid click")
        }
    }else{
          let pieceMove = $('.selected').detach();
          $($sqPos[sqPosition]).append(pieceMove);
          $('.selected').parent().removeClass('pieceOff')
          $('.selected').removeClass('selected');
          $('.workCell').addClass('pieceOff')
                        .removeClass("workCell")
          clickNum = false;
          playerTurn = true
          }
  }else if ($positionDif%7 === 0 && $positionDif > 0){
    if($positionDif/7 > 1){
      let indexCheck = positionX - 7;
        if($sqPos[indexCheck].has('.blkPc').length > 0){
          let pieceMove = $('.selected').detach();
          $($sqPos[sqPosition]).append(pieceMove);
          $('.selected').parent().removeClass('pieceOff')
          $('.selected').removeClass('selected');
          $('.workCell').addClass('pieceOff')
                        .removeClass("workCell")
          let $midRed = $($sqPos[indexCheck]).children(":first-child");
          $midRed.addClass('rmv');
          let capturedRed = $('.rmv').remove();
          clickedNum = false;
          playerTurn = true;
        }else{
            alert("invalid click")
          }
      }else{
            let pieceMove = $('.selected').detach();
            $($sqPos[sqPosition]).append(pieceMove);
            $('.selected').parent().removeClass('pieceOff')
            $('.selected').removeClass('selected');
            $('.workCell').addClass('pieceOff')
                          .removeClass("workCell")
            clickNum = false;
            playerTurn = true;
            }

  }else{
    alert("invalid click")
  }
  }
  let blkPcLeft = $('.blkPc');
  if(blkPcLeft.length = 0){
    alert("Red Player Wins!")
  }
}

/*

function gameEnd(player){
  if (player === true){
  alert("Player 1 Wins the Game")
}else{
  alert("Player 2 Wins the Game")
}
  let $imgPieces =
}

*/
