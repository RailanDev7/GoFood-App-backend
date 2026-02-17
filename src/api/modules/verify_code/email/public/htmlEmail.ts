export function template(code: number) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Verificação</title>
  </head>

  <body style="
    margin:0;
    padding:0;
    background-color:#f1f5f9;
    font-family: Arial, Helvetica, sans-serif;
  ">

    <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 15px;">
      <tr>
        <td align="center">

          <!-- Card -->
          <table width="100%" cellpadding="0" cellspacing="0" style="
            max-width:480px;
            background:#ffffff;
            border-radius:16px;
            padding:35px 25px;
            box-shadow:0 10px 30px rgba(0,0,0,0.08);
          ">

            <!-- VibeChat -->
            <tr>
              <td align="center">
                <h2 style="
                  margin:0;
                  font-size:22px;
                  color:#0f172a;
                ">
                  💬 SeuChat
                </h2>
                <p style="
                  margin-top:6px;
                  font-size:14px;
                  color:#64748b;
                ">
                  Código de acesso
                </p>
              </td>
            </tr>

            <tr><td height="30"></td></tr>

            <!-- Texto -->
            <tr>
              <td align="center">
                <p style="
                  font-size:15px;
                  color:#334155;
                  margin:0;
                  line-height:1.5;
                ">
                  Use o código abaixo para criar sua conta.
                </p>
              </td>
            </tr>

            <tr><td height="30"></td></tr>

            <!-- Código -->
            <tr>
              <td align="center">
                <div style="
                  display:inline-block;
                  padding:18px 35px;
                  font-size:28px;
                  font-weight:bold;
                  letter-spacing:6px;
                  background-color:#2563eb;
                  color:#ffffff;
                  border-radius:12px;
                ">
                  ${code}
                </div>
              </td>
            </tr>

            <tr><td height="30"></td></tr>

            <!-- Aviso -->
            <tr>
              <td align="center">
                <p style="
                  font-size:13px;
                  color:#94a3b8;
                  margin:0;
                ">
                  Este código expira em 10 minutos.
                </p>
              </td>
            </tr>

          </table>

          <!-- Footer -->
          <p style="
            margin-top:25px;
            font-size:12px;
            color:#94a3b8;
          ">
            © 2026 SeuChat
          </p>

        </td>
      </tr>
    </table>

  </body>
  </html>
  `;
}
