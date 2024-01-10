class PostEntity {
    public ID: number | null 
    public title: string 
    public content: string
    public createdAt: Date
    public updatedAt: Date
    
    constructor(ID: number | null, title: string, content: string, createdAt: Date, updatedAt: Date) {
        this.ID = ID
        this.title = title
        this.content = content
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}

export {
    PostEntity
}