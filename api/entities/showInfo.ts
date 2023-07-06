export type ShowInfo = {
        tipo: string,
        nome: string,
        descrição: string,
        banner(): string,
        genero: string[],
        style: string[],
        exclusive: undefined | boolean,
}