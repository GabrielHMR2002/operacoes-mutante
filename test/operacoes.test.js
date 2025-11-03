const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes Melhorada para 50 Operações Aritméticas', () => {
  // === Testes para o Bloco 1 (1-10) ===
  test('1. deve somar dois números positivos', () => { 
    expect(soma(2, 3)).toBe(5); 
  });
  
  test('1.1 deve somar números negativos', () => {
    expect(soma(-5, -3)).toBe(-8);
  });
  
  test('2. deve subtrair dois números positivos', () => { 
    expect(subtracao(5, 2)).toBe(3); 
  });
  
  test('2.1 deve subtrair com resultado negativo', () => {
    expect(subtracao(2, 5)).toBe(-3);
  });
  
  test('3. deve multiplicar dois números positivos', () => { 
    expect(multiplicacao(3, 4)).toBe(12); 
  });
  
  test('3.1 deve multiplicar por zero', () => {
    expect(multiplicacao(5, 0)).toBe(0);
  });
  
  test('4. deve dividir dois números', () => {
    expect(divisao(10, 2)).toBe(5);
  });
  
  test('4.1 deve lançar erro para divisão por zero', () => {
    expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
  });
  
  test('5. deve calcular a potência com expoente positivo', () => { 
    expect(potencia(2, 3)).toBe(8); 
  });
  
  test('5.1 deve calcular potência com expoente zero', () => {
    expect(potencia(5, 0)).toBe(1);
  });
  
  test('6. deve calcular a raiz quadrada de um quadrado perfeito', () => { 
    expect(raizQuadrada(16)).toBe(4); 
  });
  
  test('6.1 deve lançar erro para raiz quadrada de número negativo', () => {
    expect(() => raizQuadrada(-1)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.');
  });
  
  test('6.2 deve calcular a raiz quadrada de zero', () => {
    expect(raizQuadrada(0)).toBe(0);
  });
  
  test('7. deve retornar o resto da divisão', () => { 
    expect(restoDivisao(10, 3)).toBe(1); 
  });
  
  test('7.1 deve retornar zero quando divisível', () => {
    expect(restoDivisao(10, 5)).toBe(0);
  });
  
  // TESTES CRÍTICOS PARA FATORIAL - Matam mutantes do OR
  test('8. deve calcular o fatorial de um número maior que 1', () => { 
    expect(fatorial(4)).toBe(24); 
  });
  
  test('8.1 deve retornar 1 para fatorial de 0', () => {
    expect(fatorial(0)).toBe(1);
  });
  
  test('8.2 deve retornar 1 para fatorial de 1', () => {
    expect(fatorial(1)).toBe(1);
  });
  
  test('8.3 deve lançar erro para fatorial de número negativo', () => {
    expect(() => fatorial(-1)).toThrow('Fatorial não é definido para números negativos.');
  });
  
  test('8.4 deve calcular fatorial de 2 corretamente', () => {
    expect(fatorial(2)).toBe(2);
  });
  
  test('8.5 deve calcular fatorial de 3 corretamente', () => {
    expect(fatorial(3)).toBe(6);
  });
  
  test('8.6 deve calcular fatorial de 5 corretamente', () => {
    expect(fatorial(5)).toBe(120);
  });
  
  test('9. deve calcular a média de um array com múltiplos elementos', () => { 
    expect(mediaArray([10, 20, 30])).toBe(20); 
  });
  
  test('9.1 deve retornar 0 para média de array vazio', () => {
    expect(mediaArray([])).toBe(0);
  });
  
  test('9.2 deve calcular média de array com um elemento', () => {
    expect(mediaArray([42])).toBe(42);
  });
  
  test('10. deve somar um array com múltiplos elementos', () => { 
    expect(somaArray([1, 2, 3])).toBe(6); 
  });
  
  test('10.1 deve somar array com um elemento', () => {
    expect(somaArray([5])).toBe(5);
  });
  
  test('10.2 deve retornar 0 para soma de array vazio', () => {
    expect(somaArray([])).toBe(0);
  });
  
  test('10.3 deve somar array com números negativos', () => {
    expect(somaArray([-1, -2, -3])).toBe(-6);
  });

  // === Testes para o Bloco 2 (11-20) ===
  test('11. deve encontrar o valor máximo em um array', () => { 
    expect(maximoArray([1, 50, 10])).toBe(50); 
  });
  
  test('11.1 deve lançar erro para array vazio em maximoArray', () => {
    expect(() => maximoArray([])).toThrow('Array vazio não possui valor máximo.');
  });
  
  test('11.2 deve encontrar máximo com números negativos', () => {
    expect(maximoArray([-10, -5, -20])).toBe(-5);
  });
  
  test('12. deve encontrar o valor mínimo em um array', () => { 
    expect(minimoArray([10, 2, 100])).toBe(2); 
  });
  
  test('12.1 deve lançar erro para array vazio em minimoArray', () => {
    expect(() => minimoArray([])).toThrow('Array vazio não possui valor mínimo.');
  });
  
  test('12.2 deve encontrar mínimo com números negativos', () => {
    expect(minimoArray([-10, -5, -20])).toBe(-20);
  });
  
  test('13. deve retornar o valor absoluto de um número negativo', () => { 
    expect(valorAbsoluto(-5)).toBe(5); 
  });
  
  test('13.1 deve retornar o mesmo valor para número positivo', () => {
    expect(valorAbsoluto(5)).toBe(5);
  });
  
  test('14. deve arredondar um número para cima', () => { 
    expect(arredondar(9.8)).toBe(10); 
  });
  
  test('14.1 deve arredondar um número para baixo', () => {
    expect(arredondar(9.2)).toBe(9);
  });
  
  test('15. deve retornar true para um número par', () => { 
    expect(isPar(100)).toBe(true); 
  });
  
  test('15.1 deve retornar false para um número ímpar', () => {
    expect(isPar(7)).toBe(false);
  });
  
  test('15.2 deve retornar true para zero', () => {
    expect(isPar(0)).toBe(true);
  });
  
  test('16. deve retornar true para um número ímpar', () => { 
    expect(isImpar(7)).toBe(true); 
  });
  
  test('16.1 deve retornar false para um número par', () => {
    expect(isImpar(8)).toBe(false);
  });
  
  test('16.2 deve retornar false para zero', () => {
    expect(isImpar(0)).toBe(false);
  });
  
  test('17. deve calcular uma porcentagem simples', () => { 
    expect(calcularPorcentagem(50, 200)).toBe(100); 
  });
  
  test('17.1 deve calcular 100% de um valor', () => {
    expect(calcularPorcentagem(100, 50)).toBe(50);
  });
  
  test('18. deve aumentar um valor em uma porcentagem', () => { 
    expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110); 
  });
  
  test('18.1 deve aumentar em 50%', () => {
    expect(aumentarPorcentagem(100, 50)).toBeCloseTo(150);
  });
  
  test('19. deve diminuir um valor em uma porcentagem', () => { 
    expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90); 
  });
  
  test('19.1 deve diminuir em 50%', () => {
    expect(diminuirPorcentagem(100, 50)).toBeCloseTo(50);
  });
  
  test('20. deve inverter o sinal de um número positivo', () => { 
    expect(inverterSinal(42)).toBe(-42); 
  });
  
  test('20.1 deve inverter o sinal de um número negativo', () => {
    expect(inverterSinal(-42)).toBe(42);
  });
  
  // === Testes para o Bloco 3 (21-30) ===
  test('21. deve calcular o seno de 0', () => { 
    expect(seno(0)).toBe(0); 
  });
  
  test('21.1 deve calcular o seno de π/2', () => {
    expect(seno(Math.PI / 2)).toBeCloseTo(1);
  });
  
  test('22. deve calcular o cosseno de 0', () => { 
    expect(cosseno(0)).toBe(1); 
  });
  
  test('22.1 deve calcular o cosseno de π', () => {
    expect(cosseno(Math.PI)).toBeCloseTo(-1);
  });
  
  test('23. deve calcular a tangente de 0', () => { 
    expect(tangente(0)).toBe(0); 
  });
  
  test('23.1 deve calcular a tangente de π/4', () => {
    expect(tangente(Math.PI / 4)).toBeCloseTo(1);
  });
  
  test('24. deve calcular o logaritmo natural de Euler', () => { 
    expect(logaritmoNatural(Math.E)).toBe(1); 
  });
  
  test('24.1 deve calcular o logaritmo natural de 1', () => {
    expect(logaritmoNatural(1)).toBe(0);
  });
  
  test('25. deve calcular o logaritmo na base 10', () => { 
    expect(logaritmoBase10(100)).toBe(2); 
  });
  
  test('25.1 deve calcular o logaritmo de 1000', () => {
    expect(logaritmoBase10(1000)).toBe(3);
  });
  
  test('26. deve arredondar para baixo', () => { 
    expect(arredondarParaBaixo(5.9)).toBe(5); 
  });
  
  test('26.1 deve manter inteiros', () => {
    expect(arredondarParaBaixo(5)).toBe(5);
  });
  
  test('27. deve arredondar para cima', () => { 
    expect(arredondarParaCima(5.1)).toBe(6); 
  });
  
  test('27.1 deve manter inteiros', () => {
    expect(arredondarParaCima(5)).toBe(5);
  });
  
  test('28. deve calcular a hipotenusa de um triângulo retângulo', () => { 
    expect(hipotenusa(3, 4)).toBe(5); 
  });
  
  test('28.1 deve calcular hipotenusa com catetos iguais', () => {
    expect(hipotenusa(1, 1)).toBeCloseTo(1.414, 2);
  });
  
  test('29. deve converter graus para radianos', () => { 
    expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); 
  });
  
  test('29.1 deve converter 90 graus', () => {
    expect(grausParaRadianos(90)).toBeCloseTo(Math.PI / 2);
  });
  
  test('30. deve converter radianos para graus', () => { 
    expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); 
  });
  
  test('30.1 deve converter π/2 radianos', () => {
    expect(radianosParaGraus(Math.PI / 2)).toBeCloseTo(90);
  });

  // === Testes para o Bloco 4 (31-40) ===
  test('31. deve calcular o MDC de dois números', () => { 
    expect(mdc(10, 5)).toBe(5); 
  });
  
  test('31.1 deve calcular MDC de números primos entre si', () => {
    expect(mdc(7, 13)).toBe(1);
  });
  
  test('32. deve calcular o MMC de dois números', () => { 
    expect(mmc(10, 5)).toBe(10); 
  });
  
  test('32.1 deve calcular MMC de números primos entre si', () => {
    expect(mmc(3, 5)).toBe(15);
  });
  
  test('33. deve verificar que um número é primo', () => { 
    expect(isPrimo(7)).toBe(true); 
  });
  
  test('33.1 deve retornar false para número não primo', () => {
    expect(isPrimo(4)).toBe(false);
  });
  
  test('33.2 deve retornar false para 1', () => {
    expect(isPrimo(1)).toBe(false);
  });
  
  test('33.3 deve retornar false para 0', () => {
    expect(isPrimo(0)).toBe(false);
  });
  
  test('33.4 deve retornar false para números negativos', () => {
    expect(isPrimo(-5)).toBe(false);
  });
  
  test('33.5 deve verificar que 2 é primo', () => {
    expect(isPrimo(2)).toBe(true);
  });
  
  test('34. deve calcular o 10º termo de Fibonacci', () => { 
    expect(fibonacci(10)).toBe(55); 
  });
  
  test('34.1 deve calcular fibonacci de 0', () => {
    expect(fibonacci(0)).toBe(0);
  });
  
  test('34.2 deve calcular fibonacci de 1', () => {
    expect(fibonacci(1)).toBe(1);
  });
  
  test('35. deve calcular o produto de um array', () => { 
    expect(produtoArray([2, 3, 4])).toBe(24); 
  });
  
  test('35.1 deve calcular produto de array com um elemento', () => {
    expect(produtoArray([7])).toBe(7);
  });
  
  test('35.2 deve retornar 1 para produto de array vazio', () => {
    expect(produtoArray([])).toBe(1);
  });
  
  test('35.3 deve calcular produto com zero', () => {
    expect(produtoArray([5, 0, 3])).toBe(0);
  });
  
  test('35.4 deve calcular produto com negativos', () => {
    expect(produtoArray([-2, 3, -4])).toBe(24);
  });
  
  // TESTES CRÍTICOS PARA CLAMP - Matam mutantes de <= e >=
  test('36. deve manter um valor dentro de um intervalo (clamp)', () => { 
    expect(clamp(5, 0, 10)).toBe(5); 
  });
  
  test('36.1 deve retornar min quando valor é menor que min', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });
  
  test('36.2 deve retornar max quando valor é maior que max', () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });
  
  test('36.3 deve retornar o valor quando igual a min', () => {
    expect(clamp(0, 0, 10)).toBe(0);
    expect(clamp(5, 5, 10)).toBe(5);
  });
  
  test('36.4 deve retornar o valor quando igual a max', () => {
    expect(clamp(10, 0, 10)).toBe(10);
    expect(clamp(7, 0, 7)).toBe(7);
  });
  
  test('36.5 deve funcionar com limites negativos quando valor menor', () => {
    expect(clamp(-15, -10, 0)).toBe(-10);
  });
  
  test('36.6 deve funcionar com limites negativos quando valor maior', () => {
    expect(clamp(5, -10, 0)).toBe(0);
  });
  
  test('36.7 deve funcionar com limites negativos no range', () => {
    expect(clamp(-5, -10, 0)).toBe(-5);
  });
  
  test('37. deve verificar se um número é divisível por outro', () => { 
    expect(isDivisivel(10, 2)).toBe(true); 
  });
  
  test('37.1 deve retornar false quando não é divisível', () => {
    expect(isDivisivel(10, 3)).toBe(false);
  });
  
  test('37.2 deve verificar divisibilidade por 1', () => {
    expect(isDivisivel(7, 1)).toBe(true);
  });
  
  test('38. deve converter Celsius para Fahrenheit', () => { 
    expect(celsiusParaFahrenheit(0)).toBe(32); 
  });
  
  test('38.1 deve converter 100°C para Fahrenheit', () => {
    expect(celsiusParaFahrenheit(100)).toBe(212);
  });
  
  test('38.2 deve converter temperatura negativa', () => {
    expect(celsiusParaFahrenheit(-40)).toBe(-40);
  });
  
  test('39. deve converter Fahrenheit para Celsius', () => { 
    expect(fahrenheitParaCelsius(32)).toBe(0); 
  });
  
  test('39.1 deve converter 212°F para Celsius', () => {
    expect(fahrenheitParaCelsius(212)).toBe(100);
  });
  
  test('39.2 deve converter temperatura negativa', () => {
    expect(fahrenheitParaCelsius(-40)).toBe(-40);
  });
  
  test('40. deve calcular o inverso de um número', () => { 
    expect(inverso(4)).toBe(0.25); 
  });
  
  test('40.1 deve lançar erro para inverso de zero', () => {
    expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.');
  });
  
  test('40.2 deve calcular inverso de número negativo', () => {
    expect(inverso(-2)).toBe(-0.5);
  });

  // === Testes para o Bloco 5 (41-50) ===
  test('41. deve calcular a área de um círculo', () => { 
    expect(areaCirculo(10)).toBeCloseTo(314.159, 2); 
  });
  
  test('41.1 deve calcular área com raio 1', () => {
    expect(areaCirculo(1)).toBeCloseTo(Math.PI, 5);
  });
  
  test('42. deve calcular a área de um retângulo', () => { 
    expect(areaRetangulo(5, 4)).toBe(20); 
  });
  
  test('42.1 deve calcular área de um quadrado', () => {
    expect(areaRetangulo(5, 5)).toBe(25);
  });
  
  test('43. deve calcular o perímetro de um retângulo', () => { 
    expect(perimetroRetangulo(5, 4)).toBe(18); 
  });
  
  test('43.1 deve calcular perímetro de um quadrado', () => {
    expect(perimetroRetangulo(5, 5)).toBe(20);
  });
  
  test('44. deve verificar se um número é maior que outro', () => { 
    expect(isMaiorQue(10, 5)).toBe(true); 
  });
  
  test('44.1 deve retornar false quando não é maior', () => {
    expect(isMaiorQue(5, 10)).toBe(false);
  });
  
  test('44.2 deve retornar false quando são iguais', () => {
    expect(isMaiorQue(5, 5)).toBe(false);
  });
  
  test('44.3 deve funcionar com negativos', () => {
    expect(isMaiorQue(-5, -10)).toBe(true);
  });
  
  test('45. deve verificar se um número é menor que outro', () => { 
    expect(isMenorQue(5, 10)).toBe(true); 
  });
  
  test('45.1 deve retornar false quando não é menor', () => {
    expect(isMenorQue(10, 5)).toBe(false);
  });
  
  test('45.2 deve retornar false quando são iguais', () => {
    expect(isMenorQue(5, 5)).toBe(false);
  });
  
  test('45.3 deve funcionar com negativos', () => {
    expect(isMenorQue(-10, -5)).toBe(true);
  });
  
  test('46. deve verificar se dois números são iguais', () => { 
    expect(isEqual(7, 7)).toBe(true); 
  });
  
  test('46.1 deve retornar false quando não são iguais', () => {
    expect(isEqual(7, 8)).toBe(false);
  });
  
  test('46.2 deve funcionar com zero', () => {
    expect(isEqual(0, 0)).toBe(true);
  });
  
  // TESTE CRÍTICO PARA MEDIANA - Mata mutante da mensagem de erro
  test('47. deve calcular a mediana de um array ímpar e ordenado', () => { 
    expect(medianaArray([1, 2, 3, 4, 5])).toBe(3); 
  });
  
  test('47.1 deve calcular a mediana de um array par', () => {
    expect(medianaArray([1, 2, 3, 4])).toBe(2.5);
  });
  
  test('47.2 deve calcular a mediana de array desordenado', () => {
    expect(medianaArray([5, 1, 3])).toBe(3);
  });
  
  test('47.3 deve lançar erro para array vazio com mensagem correta', () => {
    expect(() => medianaArray([])).toThrow('Array vazio não possui mediana.');
  });
  
  test('47.4 deve calcular mediana de array com um elemento', () => {
    expect(medianaArray([42])).toBe(42);
  });
  
  test('47.5 deve calcular mediana de array par desordenado', () => {
    expect(medianaArray([4, 1, 3, 2])).toBe(2.5);
  });
  
  test('48. deve calcular o dobro de um número', () => { 
    expect(dobro(10)).toBe(20); 
  });
  
  test('48.1 deve calcular dobro de zero', () => {
    expect(dobro(0)).toBe(0);
  });
  
  test('48.2 deve calcular dobro de negativo', () => {
    expect(dobro(-5)).toBe(-10);
  });
  
  test('49. deve calcular o triplo de um número', () => { 
    expect(triplo(10)).toBe(30); 
  });
  
  test('49.1 deve calcular triplo de zero', () => {
    expect(triplo(0)).toBe(0);
  });
  
  test('49.2 deve calcular triplo de negativo', () => {
    expect(triplo(-5)).toBe(-15);
  });
  
  test('50. deve calcular a metade de um número', () => { 
    expect(metade(20)).toBe(10); 
  });
  
  test('50.1 deve calcular metade de ímpar', () => {
    expect(metade(11)).toBe(5.5);
  });
  
  test('50.2 deve calcular metade de negativo', () => {
    expect(metade(-10)).toBe(-5);
  });
});