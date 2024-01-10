import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { UserModel } from "./user"


@Entity('post')
class PostModel {
    @PrimaryGeneratedColumn('increment')
        public ID: number | null
    
    @Column({type: 'varchar', length: '100'})
        public title: string

    @Column({type: 'varchar', length: '255'})
        public content: string
    
    @Column({type: 'timestamp', nullable: true, update: false, name: 'created_at'})
        public createdAt: Date

    @Column({type: 'timestamp', nullable: true, update: false, name: 'updated_at'})
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
    PostModel
}