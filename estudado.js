var Animal = 'dinossauro';
switch (Animal) {
    case 'Vaca':
    case 'Girafa':
    case 'Cachorro':
    case 'Porco':
        alert('Esse animal irá para Arca de Noé');
        break;
    case '':
    default:
        alert('Esse animal não vai para a Arca.');
}