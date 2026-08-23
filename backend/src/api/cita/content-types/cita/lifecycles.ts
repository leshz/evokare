const MODALIDAD_LABELS: Record<string, string> = {
  virtual: "Virtual",
  presencial: "Presencial",
};

const DIA_LABELS: Record<string, string> = {
  lunes: "Lunes",
  martes: "Martes",
  miercoles: "Miércoles",
  jueves: "Jueves",
  viernes: "Viernes",
  sabado: "Sábado",
};

const buildText = (cita) =>
  [
    `Nombre:    ${cita.nombre}`,
    `Correo:    ${cita.correo}`,
    `Teléfono:  ${cita.telefono}`,
    `Modalidad: ${MODALIDAD_LABELS[cita.modalidad] ?? cita.modalidad}`,
    `Día:       ${DIA_LABELS[cita.dia] ?? cita.dia}`,
  ].join("\n");

const buildHtml = (cita) => {
  const row = (label: string, value: string) => `
        <tr>
          <td style="padding:8px 16px;border-bottom:1px solid #ede9fe;color:#6b7280;font-size:14px;">${label}</td>
          <td style="padding:8px 16px;border-bottom:1px solid #ede9fe;color:#1e1b4b;font-size:14px;font-weight:500;">${value}</td>
        </tr>`;

  return `
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f5f3ff;padding:24px;">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;">
      <div style="background:#9f97f0;padding:20px 24px;">
        <h1 style="margin:0;color:#ffffff;font-size:18px;font-weight:600;">Nueva solicitud de cita</h1>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        ${row("Nombre", cita.nombre)}
        ${row("Correo", cita.correo)}
        ${row("Teléfono", cita.telefono)}
        ${row("Modalidad", MODALIDAD_LABELS[cita.modalidad] ?? cita.modalidad)}
        ${row("Día", DIA_LABELS[cita.dia] ?? cita.dia)}
      </table>
      <div style="padding:16px 24px;color:#9ca3af;font-size:12px;">
        Recibida el ${new Date(cita.createdAt).toLocaleString("es-CO")}
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
        "[cita] EMAIL_TO no está definida — se omite la notificación por correo"
      );
      return;
    }

    try {
      await strapi.plugin("email").service("email").send({
        to,
        replyTo: result.correo,
        subject: `Nueva solicitud de cita — ${result.nombre}`,
        text: buildText(result),
        html: buildHtml(result),
      });

      strapi.log.info(`[cita] Notificación enviada a ${to} (cita ${result.id})`);
    } catch (error) {
      // La cita YA está guardada. Un fallo de correo no debe romper la operación
      // ni perder el lead: solo se registra.
      strapi.log.error(
        `[cita] Falló el envío del correo de notificación (cita ${result.id})`,
        error
      );
    }
  },
};
