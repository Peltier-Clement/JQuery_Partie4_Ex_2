$(function(){
  $('#button').click(function(){
    var firstNote = parseInt($('#first').val());
    var secondNote = parseInt($('#second').val());
    var thirdNote = parseInt($('#third').val());
    var fourthNote = parseInt($('#fourth').val());
    var fifthNote = parseInt($('#fifth').val());
    var moyenne = (firstNote + secondNote + thirdNote + fourthNote + fiftNote);
    switch(true){
      case moyenne < 10;
        alert('Moyenne : ' + moyenne + '\n' + 'En dessous de la moyenne');
      break;
      case moyenne >= 10 && moyenne < 13;
        alert('Moyenne : ' + moyenne + '\n' + 'Moyen');
      break;
      case moyenne >= 13 && moyenne < 16;
        alert('Moyenne : ' + moyenne + '\n' + 'Bien');
      break;
      case moyenne >= 16 && moyenne < 20;
        alert('Moyenne : ' + moyenne + '\n' + 'Très bien');
      break;
      case moyenne == 20;
        alert('Moyenne : ' + moyenne + '\n' + 'Excellent');
      break;
    }
  });
});
