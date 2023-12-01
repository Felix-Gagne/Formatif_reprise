export class CatLover {
    constructor(
        public username:string, 
        public prefercat: boolean = true
    ) { }
}

export const CAT_LOVERS: CatLover[] = [
    new CatLover("normalcatlover"),
    new CatLover("badperson",false)
]