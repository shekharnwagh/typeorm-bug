# Steps to reproduce synchronization bug (https://github.com/typeorm/typeorm/issues/7992)
- Run the app by providing 2 env variables - `DB_USERNAME` and `DB_PASSWORD` for postgres db connection. Make sure `test` DB exists in postgres.
- In first run it'll create `test` table with columns `id`, `col1` and `col2`.
- Now if you add another column `col3` (of any type) in entites/test.ts Typeorm Entity and restart the app, a new columns will not be added in DB table event though `synchronize=true` is set in connection.
