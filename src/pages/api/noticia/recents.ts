import type { APIRoute } from 'astro';
import { pool } from '../../../lib/db';
import {withCors} from "../../../lib/withCors.ts";

export const GET: APIRoute = async () => {
    try {
        const result = await pool.query(`
          SELECT * FROM noticias_mdr 
          ORDER BY publication_date DESC 
          LIMIT 4
        `);

        return withCors(result.rows);
    } catch (err) {
        return withCors({ error: 'Erro ao buscar notícias' }, 500);
    }
};
