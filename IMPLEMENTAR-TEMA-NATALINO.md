# Prompt: implementar tema natalino por período

Implemente em um projeto web a decoração natalina descrita abaixo. Adapte a integração à tecnologia, à estrutura e aos componentes já existentes no projeto.

## Estrutura esperada

- Integre os efeitos ao componente ou layout compartilhado usado por todas as páginas.
- Integre o gorro ao componente que renderiza o cabeçalho ou o logo principal.
- Coloque assets estáticos no diretório público já utilizado pelo projeto.
- Utilize a ferramenta de build disponível no projeto.

## Configuração central

Crie um arquivo JavaScript chamado `holidayTheme.js`, adaptando o caminho ao padrão do projeto.

Ele deve exportar exatamente o seguinte formato:

```js
// Month and day format: MM-DD
export const holidayTheme = {
    initDate: '11-03',
    endDate: '12-31'
}

export function isHolidayThemeActive(now = new Date()) {
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    const currentDate = `${month}-${day}`

    return currentDate >= holidayTheme.initDate &&
        currentDate <= holidayTheme.endDate
}
```

O nome `holidayTheme` deve ser mantido obrigatoriamente. O objeto deve manter `initDate` e `endDate`.

O período é inclusivo:

- Ativo a partir de `03/11`.
- Ativo até `31/12`.
- Fora desse intervalo, o layout deve retornar ao layout original.

## Neve

No layout ou componente compartilhado:

1. Adicione um `<canvas>` fixo e decorativo.
2. Faça a neve cair usando `requestAnimationFrame`.
3. Inicialize a animação quando o componente ou página terminar de ser montado.
4. Ajuste o canvas ao tamanho da janela.
5. Considere `devicePixelRatio` sem exceder `2`.
6. Configure o canvas com `pointer-events: none`.
7. Não bloqueie cliques em links, botões ou elementos da página.
8. Remova a animação e os listeners ao desmontar ou navegar para fora da página, quando aplicável.
9. Respeite `prefers-reduced-motion: reduce`.
10. Inicialize o canvas somente quando `isHolidayThemeActive()` retornar `true`.

## Rastro do mouse

No layout ou componente compartilhado:

1. Adicione um rastro ao mover o mouse.
2. Use os símbolos `❄️`, `✨` e `⭐`.
3. Limite a criação dos elementos para não sobrecarregar a página.
4. Posicione cada elemento na posição do cursor.
5. Use `position: fixed`, `pointer-events: none` e z-index alto.
6. Anime os elementos com uma animação CSS de aproximadamente `800ms`.
7. Remova os elementos após a animação.
8. Inicialize o listener somente dentro do período configurado.
9. Remova o listener ao desmontar ou navegar para fora da página, quando aplicável.

## Gorro no logo

No cabeçalho ou componente que renderiza o logo:

1. Utilize uma imagem chamada `chapeu-noel.png` colocada no diretório público já usado pelo projeto.
2. Posicione o gorro sobre a ponta esquerda do texto ou logo.
3. Importe `holidayTheme.js` conforme o padrão de módulos do projeto.
4. Calcule `holidayThemeActive` usando `isHolidayThemeActive()`.
5. Renderize o gorro somente quando `holidayThemeActive` for `true`.
6. O texto do logo deve permanecer exatamente como era fora do período.
7. O gorro não deve interferir no clique ou na acessibilidade do link.
8. Ajuste separadamente o posicionamento em mobile e desktop.

## Comportamento fora do período

Quando `isHolidayThemeActive()` retornar `false`:

- Não renderize o `<canvas>`.
- Não execute a animação da neve.
- Não registre listeners de `resize` ou `mousemove`.
- Não crie elementos do rastro.
- Não renderize o gorro no cabeçalho.
- Não deixe estilos ou classes decorativos afetarem o layout original.

## Validação

1. Execute o comando de build configurado no projeto.
2. Teste as datas dos limites:
   - `03/11`: ativo.
   - `21/11`: ativo.
   - `31/12`: ativo.
   - `02/11`: inativo.
   - `01/01`: inativo.
3. Confirme visualmente em desktop e mobile.
4. Confirme que não há erros no console.
5. Confirme que não existem canvas, gorro ou listeners natalinos fora do período.
6. Não crie pisca-pisca ou outro elemento não solicitado.
7. Não altere o layout original fora do período configurado.
