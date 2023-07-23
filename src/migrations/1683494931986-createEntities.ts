import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateEntities1683494931986 implements MigrationInterface {
  name = "CreateEntities1683494931986";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
    await queryRunner.query(
      `ALTER TABLE "users" ADD "createdAt" date NOT NULL DEFAULT now()`
    );
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedAt"`);
    await queryRunner.query(
      `ALTER TABLE "users" ADD "updatedAt" date NOT NULL DEFAULT now()`
    );
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
    await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" date`);
    await queryRunner.query(`ALTER TABLE "schedules" DROP COLUMN "date"`);
    await queryRunner.query(
      `ALTER TABLE "schedules" ADD "date" date NOT NULL DEFAULT now()`
    );
    await queryRunner.query(
      `ALTER TABLE "real_estate" DROP CONSTRAINT "FK_44ae17efa35575b6a6f83b35ee5"`
    );
    await queryRunner.query(
      `ALTER TABLE "real_estate" DROP COLUMN "createdAt"`
    );
    await queryRunner.query(
      `ALTER TABLE "real_estate" ADD "createdAt" date NOT NULL DEFAULT now()`
    );
    await queryRunner.query(
      `ALTER TABLE "real_estate" DROP COLUMN "updatedAt"`
    );
    await queryRunner.query(
      `ALTER TABLE "real_estate" ADD "updatedAt" date NOT NULL DEFAULT now()`
    );
    await queryRunner.query(
      `ALTER TABLE "real_estate" ADD CONSTRAINT "UQ_44ae17efa35575b6a6f83b35ee5" UNIQUE ("addressId")`
    );
    await queryRunner.query(
      `ALTER TABLE "real_estate" ADD CONSTRAINT "FK_44ae17efa35575b6a6f83b35ee5" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "real_estate" DROP CONSTRAINT "FK_44ae17efa35575b6a6f83b35ee5"`
    );
    await queryRunner.query(
      `ALTER TABLE "real_estate" DROP CONSTRAINT "UQ_44ae17efa35575b6a6f83b35ee5"`
    );
    await queryRunner.query(
      `ALTER TABLE "real_estate" DROP COLUMN "updatedAt"`
    );
    await queryRunner.query(
      `ALTER TABLE "real_estate" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`
    );
    await queryRunner.query(
      `ALTER TABLE "real_estate" DROP COLUMN "createdAt"`
    );
    await queryRunner.query(
      `ALTER TABLE "real_estate" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`
    );
    await queryRunner.query(
      `ALTER TABLE "real_estate" ADD CONSTRAINT "FK_44ae17efa35575b6a6f83b35ee5" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(`ALTER TABLE "schedules" DROP COLUMN "date"`);
    await queryRunner.query(
      `ALTER TABLE "schedules" ADD "date" TIMESTAMP NOT NULL DEFAULT now()`
    );
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
    await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" TIMESTAMP`);
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedAt"`);
    await queryRunner.query(
      `ALTER TABLE "users" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`
    );
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
    await queryRunner.query(
      `ALTER TABLE "users" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`
    );
  }
}
