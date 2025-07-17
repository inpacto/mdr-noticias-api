import {withCors} from "../../../lib/withCors.ts";

export const prerender = false;

import type { APIRoute } from 'astro';
import { pool } from '../../../lib/db';

export const GET: APIRoute = async ({ params }) => {
    const slug = params.slug;

    if (!slug) {
        return withCors({ error: 'Erro ao buscar notícias' }, 400);
    }

    try {
        const result = await pool.query('SELECT * FROM noticias_mdr WHERE slug = $1', [slug]);

        if (result.rows.length === 0) {
            return withCors({ error: 'Notícia não Encontrada' }, 404);
        }

        return withCors(result.rows[0]);
    } catch (err) {
        return withCors({ error: 'Erro ao buscar notícias' }, 500);
    }
};
