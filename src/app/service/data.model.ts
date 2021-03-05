export class Data {
    public title: string;
    public description: string;
    public subtitle: string;
    public content: string;
    public url: string;

    constructor(title: string,subtitle: string, description: string, content: string, url: string) {
        this.title = title;
        this.subtitle = subtitle;
        this.description = description;
        this.content = content;;
        this.url = url;
    }
}