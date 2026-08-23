const SIN_DATO = "—";

// El mensaje llega de un formulario público sin sanitizar: todo valor que
// termine dentro del HTML del correo debe escaparse.
const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const buildText = (mensajeContacto) =>
  [
    `Nombre:   ${mensajeContacto.nombre ?? SIN_DATO}`,
    `Correo:   ${mensajeContacto.email}`,
    `Teléfono: ${mensajeContacto.telefono ?? SIN_DATO}`,
    `Asunto:   ${mensajeContacto.asunto}`,
    "",
    "Mensaje:",
    mensajeContacto.mensaje,
  ].join("\n");

const buildHtml = (mensajeContacto) => {
  const row = (label: string, value: string) => `
        <tr>
          <td style="padding:8px 16px;border-bottom:1px solid #ede9fe;color:#6b7280;font-size:14px;">${label}</td>
          <td style="padding:8px 16px;border-bottom:1px solid #ede9fe;color:#1e1b4b;font-size:14px;font-weight:500;">${escapeHtml(value)}</td>
        </tr>`;

  return `
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f5f3ff;padding:24px;">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;">
      <div style="background:#9f97f0;padding:20px 24px;">
        <h1 style="margin:0;color:#ffffff;font-size:18px;font-weight:600;">Nuevo mensaje de contacto</h1>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        ${row("Nombre", mensajeContacto.nombre ?? SIN_DATO)}
        ${row("Correo", mensajeContacto.email)}
        ${row("Teléfono", mensajeContacto.telefono ?? SIN_DATO)}
        ${row("Asunto", mensajeContacto.asunto)}
      </table>
      <div style="padding:16px 24px;">
        <p style="margin:0 0 8px;color:#6b7280;font-size:14px;">Mensaje</p>
        <div style="color:#1e1b4b;font-size:14px;line-height:1.6;white-space:pre-wrap;word-break:break-word;">${escapeHtml(mensajeContacto.mensaje)}</div>
      </div>
      <div style="padding:16px 24px;color:#9ca3af;font-size:12px;">
        Recibido el ${new Date(mensajeContacto.createdAt).toLocaleString("es-CO")}
      </div>
    </div>
  </div>`;
};

export default {
  async afterCreate(event) {
    const { result } = event;

    const to = process.env.EMAIL_TO;

    if (!to) {
      strapi.log.warn(
        "[mensaje-contacto] EMAIL_TO no está definida — se omite la notificación por correo"
      );
      return;
    }

    try {
      await strapi.plugin("email").service("email").send({
        to,
        replyTo: result.email,
        subject: `Nuevo mensaje de contacto — ${result.asunto}`,
        text: buildText(result),
        html: buildHtml(result),
      });

      strapi.log.info(
        `[mensaje-contacto] Notificación enviada a ${to} (mensaje ${result.id})`
      );
    } catch (error) {
      // El mensaje YA está guardado. Un fallo de correo no debe romper la
      // operación ni perder el lead: solo se registra.
      strapi.log.error(
        `[mensaje-contacto] Falló el envío del correo de notificación (mensaje ${result.id})`,
        error
      );
    }
  },
};
