import {MigrationInterface, QueryRunner} from "typeorm";

export class ProductsNoExpiration1641336030192 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE products DROP COLUMN expiration_date;`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE products DROP COLUMN expiration_date;`);
    }

}
