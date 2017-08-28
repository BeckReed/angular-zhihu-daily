export class Gallery {
    constructor(image: string, type: number, id: number, ga_prefix: string, title: string) {
        this.image = image;
        this.type = type;
        this.id = id;
        this.ga_prefix = ga_prefix;
        this.title = title;
    }
    image ? : string;
    type ? : number;
    id ? : number;
    ga_prefix ? : string;
    title ? : string;
}