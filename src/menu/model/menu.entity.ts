import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('menu_card')
export class Menu {
    @PrimaryGeneratedColumn()
    menu_card_id: number ;

    @Column()
    menu_card_typemenu_card_id : number;

    @Column()
    menu_card_user_creation : number;

    @Column()
    menu_card_desc: string;

    @Column()
    menu_card_price: number;

    @Column()
    menu_card_image_path: string;

    @Column()
    menu_card_date_creation: string;

    @Column()
    menu_card_active: number;
}