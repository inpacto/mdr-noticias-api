import type { APIRoute } from 'astro';
import { pool } from '../../../lib/db';

export const GET: APIRoute = async ({ params }) => {
    const slug = params.slug;

    if (!slug) {
        return new Response(JSON.stringify({ error: 'Slug não informado' }), { status: 400 });
    }

    try {
        const result = await pool.query('SELECT * FROM noticias_mdr WHERE slug = $1', [slug]);

        if (result.rows.length === 0) {
            return new Response(JSON.stringify({ error: 'Notícia não encontrada' }), { status: 404 });
        }

        return new Response(JSON.stringify(result.rows[0]), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ error: 'Erro ao buscar notícia' }), { status: 500 });
    }
};
