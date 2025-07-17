import type { APIRoute } from 'astro';
import { pool } from '../../../lib/db';

export const GET: APIRoute = async () => {
    try {
        const result = await pool.query(`
          SELECT * FROM noticias_mdr 
          ORDER BY publication_date DESC 
          LIMIT 4
        `);
        return new Response(JSON.stringify(result.rows), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ error: 'Erro ao buscar notícias' }), { status: 500 });
    }
};
