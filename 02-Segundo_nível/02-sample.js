function verificarSePodeDirigir(idade) {
    if(idade < 0){
        throw new Error('O número não pode ser negativo');
    }
    if (idade >= 18) {
        return "Pode dirigir";
    } else {
        return "Não pode dirigir";
    }
}
try{
console.log(verificarSePodeDirigir(-1));
}catch (error) {
    console.error(error.message);
}
try{
    console.log(verificarSePodeDirigir(18));
  
    }catch (error) {
        console.error(error.message);
    }
    try{
        console.log(verificarSePodeDirigir(15));
        }catch (error) {
            console.error(error.message);
        }