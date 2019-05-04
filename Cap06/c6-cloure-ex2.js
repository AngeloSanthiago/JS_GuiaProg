/* Uma função interna pode se tornar acessível externamente
armazeando a mesma dentro de uma variável global
*/
alert("entrei arquivo");
var variavelGlobal;
function funcaoExterna() {
    alert("Função Externa");
    function funcaoInterna() {
        alert("Função Interna");
    };
    variavelGlobal = funcaoInterna;
};
