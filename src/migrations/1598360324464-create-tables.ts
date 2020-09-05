import { MigrationInterface, QueryRunner } from 'typeorm';

const defaultRoles = ['admin'];

export class createTables1598360324464 implements MigrationInterface {
  name = 'createTables1598360324464';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "location" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "address_one" character varying NOT NULL, "address_two" character varying NOT NULL, "address_three" character varying NOT NULL, "post_code" character varying NOT NULL, "long" character varying NOT NULL, "lat" character varying NOT NULL, CONSTRAINT "PK_876d7bdba03c72251ec4c2dc827" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "store" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "opening_time" character varying NOT NULL, "phone_number" character varying NOT NULL, "locationId" uuid, CONSTRAINT "PK_f3172007d4de5ae8e7692759d79" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying NOT NULL, "password" character varying NOT NULL, "message" character varying NOT NULL, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "store" ADD CONSTRAINT "FK_8ee85a3fd1d755fe7ea695e0508" FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );

    await this.createAdmin(queryRunner);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "store" DROP CONSTRAINT "FK_8ee85a3fd1d755fe7ea695e0508"`,
    );
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "store"`);
    await queryRunner.query(`DROP TABLE "location"`);
  }

  async createAdmin(queryRunner: QueryRunner) {
    await queryRunner.query(
      `INSERT INTO "user" ( "username", "password", message) VALUES (
                       'admin', 'admin', 'message')`,
      undefined,
    );
  }
}
