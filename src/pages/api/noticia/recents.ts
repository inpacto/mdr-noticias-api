import type { APIRoute } from 'astro';
import { pool } from '../../../lib/db';
import { withCors } from '../../../lib/withCors.ts';

export const GET: APIRoute = async () => {
    try {
        const result = await pool.query(`
            SELECT * FROM noticias_mdr ORDER BY to_timestamp(publication_date, 'DD/MM/YYYY HH24hMI') DESC LIMIT 4
        `);

        return withCors(result.rows);
    } catch (err) {
        return withCors({ error: 'Erro ao buscar notícias' }, 500);
    }
};
