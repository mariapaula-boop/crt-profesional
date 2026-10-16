import { revalidateTag } from "next/cache";
import { CMS_TAG } from "@/lib/cms";

// El WordPress (plugin crt-cms) llama aquí cada vez que alguien guarda, para que el
// cambio salga en el sitio de inmediato en lugar de esperar al minuto de caché.
// Se llama a crt-profesional.vercel.app/api/revalidar.
export async function POST(req: Request) {
  const secreto = process.env.CMS_REVALIDAR_SECRETO;
  if (!secreto || req.headers.get("x-crt-secreto") !== secreto) {
    return Response.json({ ok: false }, { status: 401 });
  }
  revalidateTag(CMS_TAG, { expire: 0 });
  return Response.json({ ok: true, revalidado: new Date().toISOString() });
}
