function tentarLogin(senha) {
    const tentativasMaximas = 3;
    const senhaCorreta = "12345";
    if (tentativasMaximas <= 0){
        throw new Error("O número de tentativas tem que ser maior que o")
    
    }

    for (let tentativas = 0; tentativas < tentativasMaximas;) {
        if (senha === senhaCorreta) {
            return "Login efetuado com sucesso!";
        }else{
            console.log(`Tentativa ${tentativas + 1} de ${tentativasMaximas}: Senha incorreta.`);
        }
        tentativas++;
        
    }

    return "Tentativas de login excedidas.";
}
try{
console.log(tentarLogin("12345"));
} catch (error){
    console.log(error.message);
}
