/* Uma função interna pode se tornar acessível externamente
armazeando a mesma dentro de uma variável global, MAS A FUNÇÃO EXTERNA DEVER SER
EXECUTADA PRIMEIRO.
*/
// alert("entrei arquivo");
var variavelGlobal;
function funcaoExterna() {
    alert("Função Externa");
    function funcaoInterna() {
        alert("Função Interna");
    };
    variavelGlobal = funcaoInterna; // carregando uma função para dentro de uma variável. A variável se torna a função.
};
// variavelGlobal = funcaoExterna; // carregando uma função Externa primeiro e em seguida a interna.
