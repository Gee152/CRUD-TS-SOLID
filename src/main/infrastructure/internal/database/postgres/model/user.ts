import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"


@Entity()
class UserModel {
    @PrimaryGeneratedColumn('increment')
        public ID: number | null

    @Column({type: 'varchar', length: '255'})
        public name: string
    
    @Column({type: 'varchar', length: '255'})
        public email: string

    @Column({type: 'varchar', length: '255'})
        public password: string
    
    @Column({type: 'timestamp', nullable: true, update: false, name: 'created_at'})
        public createdAt: Date
    
    @Column({type: 'timestamp', nullable: true, name: 'updated_at'})
        public updatedAt: Date

        
    constructor(ID: number | null,  name: string, email: string, password: string, createdAt: Date, updatedAt: Date) {
        this.ID = ID
        this.name = name
        this.email = email
        this.password = password
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    
    }
}

export { 
    UserModel 
}