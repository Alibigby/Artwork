export class Data {
    public title: string;
    public description: string;
    public subtitle: string;
    public content: string;
    public url: string;
    public ID: number;

    constructor(title: string,subtitle: string, description: string, content: string, url: string, ID: number) {
        this.ID = ID;
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.content = content;;
        this.url = url;
    }
}