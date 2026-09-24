/**
 * Handler condiviso dei form PGNetwork.
 *
 * Tutti i form con l'attributo [data-pgform] e un [data-tipo] vengono
 * inviati (fetch no-cors) all'endpoint Google Apps Script, che scrive una
 * riga sullo Sheet e salva gli allegati (CV / foto) su Drive.
 *
 * >>> INCOLLA QUI l'URL del Web App di Apps Script (deploy "Chiunque"). <<<
 * Finché è vuoto, i form mostrano un messaggio e propongono l'invio via email.
 */
export const FORM_ENDPOINT = "";

const CONTACT_EMAIL = "pgardis@pgnetwork.it";
const MAX_FILE_MB = 8;

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const res = String(reader.result || "");
      resolve(res.includes(",") ? res.split(",")[1] : res);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function setStatus(form: HTMLFormElement, msg: string, state: "ok" | "err" | "info") {
  let el = form.querySelector<HTMLElement>(".form-status");
  if (!el) {
    el = document.createElement("p");
    el.className = "form-status";
    form.appendChild(el);
  }
  el.dataset.state = state;
  el.textContent = msg;
}

async function handle(form: HTMLFormElement) {
  const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const btnText = btn?.textContent || "";

  // Raccolta campi (esclusi i file) + campi file in base64.
  const data: Record<string, string> = {};
  const files: Record<string, { name: string; type: string; data: string }> = {};

  const controls = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
    "input[name], textarea[name], select[name]",
  );
  for (const c of controls) {
    if (c instanceof HTMLInputElement && c.type === "file") {
      const file = c.files?.[0];
      if (file) {
        if (file.size > MAX_FILE_MB * 1024 * 1024) {
          setStatus(form, `Il file "${c.name}" supera ${MAX_FILE_MB} MB.`, "err");
          return;
        }
        files[c.name] = {
          name: file.name,
          type: file.type,
          data: await fileToBase64(file),
        };
      }
      continue;
    }
    if (c instanceof HTMLInputElement && (c.type === "checkbox" || c.type === "radio")) {
      if (c.checked) data[c.name] = c.value || "sì";
      continue;
    }
    data[c.name] = c.value;
  }

  const payload = {
    tipo: form.dataset.tipo || "generico",
    pagina: location.pathname,
    inviato: new Date().toISOString(),
    ...data,
    files,
  };

  // Nessun endpoint configurato → fallback email con i campi testuali.
  if (!FORM_ENDPOINT) {
    const righe = Object.entries(data)
      .filter(([k]) => k !== "consenso")
      .map(([k, v]) => `${k}: ${v}`)
      .join("%0D%0A");
    const oggetto = encodeURIComponent(`PGNetwork · ${payload.tipo}`);
    setStatus(
      form,
      "Invio automatico in attivazione. Apriamo la tua email: allega il CV e premi invia.",
      "info",
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${oggetto}&body=${righe}`;
    return;
  }

  try {
    if (btn) {
      btn.disabled = true;
      btn.textContent = "Invio in corso...";
    }
    await fetch(FORM_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });
    form.reset();
    setStatus(form, "Grazie! Abbiamo ricevuto i tuoi dati. Ti ricontatteremo presto.", "ok");
  } catch {
    setStatus(
      form,
      `Invio non riuscito. Riprova o scrivici a ${CONTACT_EMAIL}.`,
      "err",
    );
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = btnText;
    }
  }
}

export function initForms() {
  document.querySelectorAll<HTMLFormElement>("[data-pgform]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      handle(form);
    });
  });
}
