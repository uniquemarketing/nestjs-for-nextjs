export function slugfy(text: string): string {
  return text
    .normalize('NFKD') // separa acentos de letras (ex: à -> a +)
    .toLocaleLowerCase() // tudo minusculo
    .replace(/[\u0300-\u036f]/g, '') // remove acentos (marcadores Unicode)
    .replace(/[^a-z0-9]+/g, ' ') // troca tudo que não for letra/numero por espaço
    .trim() // remove espaços no ínício /fim
    .replace(/\s+/g, '-'); // espaço->hífem
}
