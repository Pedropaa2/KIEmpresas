import { MigrationInterface, QueryRunner } from "typeorm";

export class Entities1683812644252 implements MigrationInterface {
  name = "Entities1683812644252";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "schedules" DROP COLUMN "hour"`);
    await queryRunner.query(`ALTER TABLE "schedules" ADD "hour" TIME NOT NULL`);
    await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "value"`);
    await queryRunner.query(
      `ALTER TABLE "real_estate" ADD "value" numeric(12,2) NOT NULL DEFAULT '0'`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "value"`);
    await queryRunner.query(
      `ALTER TABLE "real_estate" ADD "value" integer NOT NULL DEFAULT '0'`
    );
    await queryRunner.query(`ALTER TABLE "schedules" DROP COLUMN "hour"`);
    await queryRunner.query(
      `ALTER TABLE "schedules" ADD "hour" TIMESTAMP NOT NULL`
    );
  }
}
